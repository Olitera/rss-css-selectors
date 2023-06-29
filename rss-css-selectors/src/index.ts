import './style.scss';
import { Presentation } from './modules/presentation/presentation';
import { Editor } from './modules/css-editor/css-editor';
import { Viewer } from './modules/html-viewer/html-viewer';
import { Level } from './modules/levels/levels';
import { Footer } from './modules/footer/footer';
import { Item } from './modules/presentation/item/item';
import { HtmlItem } from './modules/html-viewer/html-item/html-item';
import { levelsConfig } from './levelsConfig/game';

class Main {
  private input?: HTMLInputElement | null;
  private tableCode?: HTMLDivElement;
  private items?: Item[];
  private presentation!: Presentation;
  private form?: HTMLFormElement | null;
  private level: number;
  private levels?: Level;

  constructor() {
    this.renderMain();
    this.level = 0;
    this.startLevel(this.level);
  }

  startLevel(number: number): void {
    this.levels?.levelsArray[number].setAsCurrent();
    this.presentation.renderTable(number);
    this.items = this.presentation.table?.itemsArray;
    const htmlItemsArray = this.items?.map((element) => {
      const htmlItemm = new HtmlItem(element);
      if (element.child) {
        const htmlItemChild = new HtmlItem(element.child);
        htmlItemm.element?.append(htmlItemChild.element);
        const endTag = document.createElement('span');
        endTag.innerText = `</${element.tag}>`;
        htmlItemm.element?.append(endTag);
      }
      return htmlItemm;
    });
    const tags = htmlItemsArray?.map((el) => el.element);
    if (this.tableCode && tags) {
      this.tableCode.innerHTML = '';
      this.tableCode.append(...tags);
    }
    if (this.input) {
      this.input.pattern = levelsConfig[number].answear.join('|');
    }
    console.log(this.items);
  }

  renderMain(): void {
    const bodyContainer: HTMLDivElement = document.createElement('div');
    bodyContainer.className = 'body-container';
    const mainContainer: HTMLDivElement = document.createElement('div');
    mainContainer.className = 'main-container';
    this.presentation = new Presentation();
    const cssHtml: HTMLElement = document.createElement('div');
    cssHtml.className = 'css-html';
    const editor: Editor = new Editor();
    this.form = editor.form;
    this.input = editor.input;
    const viewer: Viewer = new Viewer();
    this.tableCode = viewer.tableCode;
    this.levels = new Level();
    const footer: Footer = new Footer();
    const body: HTMLBodyElement = document.querySelector('body') as HTMLBodyElement;
    body?.append(bodyContainer);
    body?.append(footer.element);
    bodyContainer.append(mainContainer);
    bodyContainer.append(this.levels.element);
    mainContainer.append(this.presentation.element);
    mainContainer.append(cssHtml);
    cssHtml.append(editor.element);
    cssHtml.append(viewer.element);
    this.checkForm();
  }

  private checkForm(): void {
    if (this.form) {
      this.form.addEventListener('submit', this.onSubmit);
    }
  }

  private onSubmit: (e: Event) => void = (e: Event) => {
    e.preventDefault();
    this.levels?.levelsArray[this.level].setAsPassed();
    this.level++;
    if (this.level === levelsConfig.length) {
      alert('win');
    } else {
      this.startLevel(this.level);
    }
    if (this.input?.value) {
      this.input.value = '';
    }
  };
}

new Main();
