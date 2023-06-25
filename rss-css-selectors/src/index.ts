import './style.scss';
import { Presentation } from './modules/presentation/presentation';
import { Editor } from './modules/css-editor/css-editor';
import { Viewer } from './modules/html-viewer/html-viewer';
import { Level } from './modules/levels/levels';
import { Footer } from './modules/footer/footer';
import { Item } from './modules/presentation/item/item';

class Main {
  private input?: Element | null;
  private tableCode?: HTMLDivElement;
  private items?: Item[];
  private presentation!: Presentation;

  constructor() {
    this.renderMain();
    this.startLevel(0);
  }

  startLevel(number: number): void {
    this.presentation.renderTable(number);
    this.items = this.presentation.table?.itemsArray;
    console.log(this.items);
  }

  renderMain(): void {
    const bodyContainer: HTMLDivElement = document.createElement('div');
    bodyContainer.className = 'body-container';
    const mainContainer: HTMLDivElement = document.createElement('div');
    mainContainer.className = 'main-container';
    this.presentation = new Presentation();
    // this.table = presentation.table;
    const cssHtml: HTMLElement = document.createElement('div');
    cssHtml.className = 'css-html';
    const editor: Editor = new Editor();
    this.input = editor.input;
    const viewer: Viewer = new Viewer();
    this.tableCode = viewer.tableCode;
    const level: Level = new Level();
    const footer: Footer = new Footer();

    const body: HTMLBodyElement = document.querySelector('body') as HTMLBodyElement;
    body?.append(bodyContainer);
    body?.append(footer.element);
    bodyContainer.append(mainContainer);
    bodyContainer.append(level.element);
    mainContainer.append(this.presentation.element);
    mainContainer.append(cssHtml);
    cssHtml.append(editor.element);
    cssHtml.append(viewer.element);
  }
}

new Main();

// body?.addEventListener('click', () => presentation.addStyle());
