import './css-editor.scss';
import el from './css-editor.html';
import { templateCreation } from '../../helper/template';
import { Numbers } from '../numbers/numbers';

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
    const editorMain: Element | null = this.element.querySelector('.editor-main');
    const tableCSS = new Numbers(20, 'table-linea');
    editorMain?.append(tableCSS.element);
  }
}
