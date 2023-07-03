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

  constructor() {
    this.renderMain();
    this.level = 0;
    const dataFromLS = localStorage.getItem('gameConfig');
    if (dataFromLS && this.levels) {
      const data: { currentLevel: number; levelsConfig: LevelItem[] | undefined } = JSON.parse(dataFromLS);
      console.log(data);
      this.levels.levelsArray.forEach((level, i) => {
        if (data.levelsConfig && data.levelsConfig[i].isPassed) {
          console.log(level);
          level.setAsPassed();
        }
      });
      this.level = data.currentLevel;
      // console.log(this.level, this.level);
    }
    this.startLevel(this.level);
  }

  startLevel(number: number): void {
    this.level = number;
    this.levels?.levelsArray[number].setAsCurrent();
    this.presentation.renderTable(number);
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
    const bodyContainer: HTMLDivElement = document.createElement('div');
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
        this.levels?.levelsArray[this.level].setAsNotCurrent();
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
    body.append(this.message.element);
    // this.message.show('gkuyguioyg', 160, 465);
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
      if (this.level === levelsConfig.length) {
        alert('win');
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
    }
  };

  correctAnswer: () => void = (): void => {
    if (this.input) {
      this.input.value = '';
      const answer = levelsConfig[this.level].answear[0];
      answer.split('').forEach((el, i) => {
        setTimeout(() => {
          if (this.input) {
            this.input.value += el;
          }
        }, i * 150);
      });
      // this.input.value = levelsConfig[this.level].answear[0];
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
    this.levels?.levelsArray.forEach((level) => {
      level.setAsNotCurrent();
      level.setNotPassed();
    });
    this.startLevel(this.level);
  };
}

new Main();

console.log(`
-написать table в table-code
-исправить верные ответы через help
-Рядом с элементом отображается его html-код
-выводится уведомление о победе
-Если пользователь ответил неправильно, отображается соответствующая анимация
-Клик по кнопке Help выводит нужный селектор в окне для ввода кода. Селектор выводится с эффектом печати текста (плавное появление текста по буквам) 
-или уровень выполнен с использованием подсказки
-Внешний вид приложения 
-Минимальная ширина страницы, при которой проверяется корректность отображения приложения - 500рх
-использование разных стилей для активного и неактивного состояния элемента, плавные анимации
-используются Generics
-дублирование кода сведено к минимуму, не используются магические числа, используются осмысленные имена переменных и функций, оптимальный размер функций и т.д.
-реализованы юнит-тесты, использующие различные методы jest – 2 балла за каждую покрытую функцию/метод, но не более 20 баллов (процент покрытия каждой функции/метода не учитывается)
`);
