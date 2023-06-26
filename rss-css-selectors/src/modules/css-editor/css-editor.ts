import './css-editor.scss';
import el from './css-editor.html';
import { templateCreation } from '../../helper/template';

export class Editor {
  public element: HTMLElement;
  public input: HTMLInputElement | null;
  public form: HTMLFormElement | null;

  constructor() {
    this.element = templateCreation(el) as HTMLElement;
    this.form = this.element.querySelector('form');
    this.input = this.element.querySelector('.selector');
    this.renderCssEditor();
  }

  renderCssEditor(): void {
    const tableCss: Element | null = this.element.querySelector('.editor-table');
    const numbers = 19;
    for (let i = 0; i < numbers; i++) {
      const editorLinea: ChildNode = templateCreation(
        `<div class="editor-table-linea"><div class="table-linea-number">${i + 2}</div></div>`
      );
      tableCss?.append(editorLinea);
    }
  }
}
