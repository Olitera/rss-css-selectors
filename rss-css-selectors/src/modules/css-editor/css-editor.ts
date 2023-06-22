import './css-editor.scss';
import el from './css-editor.html';
import { templateCreation } from '../../helper/template';

export const editor: ChildNode = templateCreation(el);

export class Editor {
  public element: HTMLElement;

  constructor() {
    this.element = templateCreation(el) as HTMLElement;
    this.renderCssEditor();
  }

  renderCssEditor(): void {
    const table: Element | null = this.element.querySelector('.editor-table');
    const numbers = 19;
    for (let i = 0; i < numbers; i++) {
      const editorLinea: ChildNode = templateCreation(
        `<div class="editor-table-linea"><div class="table-linea-number">${i + 2}</div></div>`
      );
      console.log(editorLinea);
      table?.append(editorLinea);
    }
  }
}
