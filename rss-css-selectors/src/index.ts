import './style.scss';
import { Presentation } from './modules/presentation/presentation';
import { Editor } from './modules/css-editor/css-editor';
import { Viewer } from './modules/html-viewer/html-viewer';
import { Level } from './modules/levels/levels';
import { Footer } from './modules/footer/footer';
import { Item } from './modules/presentation/item/item';
import { HtmlItem } from './modules/html-viewer/html-item/html-item';
import { levelsConfig } from './levelsConfig/game';
import { LevelItem } from './modules/levels/level-item/level-item';
import { Message } from './modules/message/message';

class Main {
  private input?: HTMLInputElement | null;
  private tableCode?: HTMLDivElement;
  private items?: Item[];
  private presentation!: Presentation;
  private form?: HTMLFormElement | null;
  private level: number;
  private levels?: Level;
  private cssHtml?: HTMLElement;
  private message?: Message;
  private reset?: Element | null;
  private description?: HTMLDivElement | undefined;

  constructor() {
    this.renderMain();
    this.level = 0;
    const dataFromLS: string | null = localStorage.getItem('gameConfig');
    if (dataFromLS && this.levels) {
      const data: { currentLevel: number; levelsConfig: LevelItem[] | undefined } = JSON.parse(dataFromLS);
      console.log(data);
      this.levels.levelsArray.forEach((level: LevelItem, i: number): void => {
        if (data.levelsConfig && data.levelsConfig[i].isPassed) {
          console.log(level);
          level.setAsPassed();
        }
      });
      this.level = data.currentLevel;
    }
    this.startLevel(this.level);
  }

  startLevel(number: number): void {
    this.level = number;
    this.levels?.levelsArray[number].setAsCurrent();
    this.presentation.renderTable(number);
    this.description = this.presentation.description;
    this.items = this.presentation.table?.itemsArray;
    const htmlItemsArray: HtmlItem[] | undefined = this.items?.map((element: Item) => {
      const htmlItemm: HtmlItem = new HtmlItem(element, this.message);
      if (element.child) {
        const htmlItemChild: HtmlItem = new HtmlItem(element.child, this.message);
        htmlItemm.element?.append(htmlItemChild.element);
        const endTag: HTMLSpanElement = document.createElement('span');
        endTag.innerText = `</${element.tag}>`;
        htmlItemm.element?.append(endTag);
      }
      return htmlItemm;
    });
    const tags: HTMLElement[] | undefined = htmlItemsArray?.map((el: HtmlItem) => el.element);
    if (this.tableCode && tags) {
      this.tableCode.innerHTML = '';
      this.tableCode.append(...tags);
    }
    if (this.input) {
      this.input.pattern = levelsConfig[number].answear.join('|');
    }
    this.presentation.help?.addEventListener('click', this.correctAnswer);
    this.setLocalStorage(number);
  }

  renderMain(): void {
    const bodyContainer: HTMLElement = document.createElement('main');
    bodyContainer.className = 'body-container';
    const mainContainer: HTMLDivElement = document.createElement('div');
    mainContainer.className = 'main-container';
    this.presentation = new Presentation();
    this.cssHtml = document.createElement('div');
    this.cssHtml.className = 'css-html';
    const editor: Editor = new Editor();
    this.form = editor.form;
    this.input = editor.input;
    const viewer: Viewer = new Viewer();
    this.tableCode = viewer.tableCode;
    this.levels = new Level();
    this.levels.levelsArray.forEach((level: LevelItem) =>
      level.element.addEventListener('click', (): void => {
        console.log(this.level);
        this.levels?.levelsArray[this.level]?.setAsNotCurrent();
        this.startLevel(level.levelNumber - 1);
      })
    );
    this.reset = this.levels.reset;
    this.reset?.addEventListener('click', this.resetGame);
    const footer: Footer = new Footer();
    const body: HTMLBodyElement = document.querySelector('body') as HTMLBodyElement;
    body?.append(bodyContainer);
    body?.append(footer.element);
    bodyContainer.append(mainContainer);
    bodyContainer.append(this.levels.element);
    mainContainer.append(this.presentation.element);
    mainContainer.append(this.cssHtml);
    this.cssHtml.append(editor.element);
    this.cssHtml.append(viewer.element);
    this.checkForm();
    this.message = new Message();
    bodyContainer.append(this.message.element);
  }

  private checkForm(): void {
    if (this.form) {
      this.form.addEventListener('submit', this.onSubmit);
      this.input?.addEventListener('invalid', this.onError);
    }
  }

  private onSubmit: (e: Event) => void = (e: Event): void => {
    e.preventDefault();
    this.levels?.levelsArray[this.level].setAsPassed();
    this.level++;
    this.items?.forEach((item: Item): void => {
      if (item.right) {
        (item.element as HTMLElement).classList.remove('right');
        setTimeout(() => (item.element as HTMLElement).classList.add('fly-away'), 100);
      }
      console.log(item.child);
      if (item.child && item.child.right) {
        console.log(item.child);
        (item.child.element as HTMLElement).classList.remove('right');
        setTimeout(() => (item.child?.element as HTMLElement).classList.add('fly-away'), 100);
      }
    });
    setTimeout((): void => {
      if (this.levels?.levelsArray.every((el: LevelItem) => el.isPassed)) {
        if (this.description) {
          this.description.innerText = 'You are a winner!';
          this.description.classList.add('win');
        }
      } else if (this.level === levelsConfig.length) {
        if (this.description) {
          this.description.innerText = 'Try again';
          this.description.classList.add('win');
        }
      } else {
        this.startLevel(this.level);
      }
    }, 500);
    if (this.input?.value) {
      this.input.value = '';
    }
  };

  private onError = (e: Event): void => {
    e.preventDefault();
    if (this.cssHtml) {
      this.cssHtml.classList.add('wrong');
      setTimeout(() => this.cssHtml?.classList.remove('wrong'), 1000);
    }
  };

  correctAnswer: () => void = (): void => {
    if (this.input) {
      this.input.value = '';
      const answer: string[] = levelsConfig[this.level].answear[0].split('').filter((el: string) => el !== '\\' && el !== '?');
      answer.forEach((el: string, i: number): void => {
        setTimeout((): void => {
          if (this.input) {
            this.input.value += el;
          }
        }, i * 150);
      });
    }
  };

  private setLocalStorage(currentLevelNumber: number): void {
    const game: { currentLevel: number; levelsConfig: LevelItem[] | undefined } = {
      currentLevel: currentLevelNumber,
      levelsConfig: this.levels?.levelsArray,
    };
    localStorage.setItem('gameConfig', JSON.stringify(game));
    console.log(game);
  }

  private resetGame: () => void = (): void => {
    localStorage.removeItem('gameConfig');
    this.level = 0;
    this.levels?.levelsArray.forEach((level: LevelItem): void => {
      level.setAsNotCurrent();
      level.setNotPassed();
    });
    this.startLevel(this.level);
  };
}

new Main();
