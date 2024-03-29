import './css-editor.scss';
import el from './css-editor.html';
import { templateCreation } from '../../helper/template';
import { Numbers } from '../numbers/numbers';

export class Editor {
  public element: HTMLElement;
  public input: HTMLInputElement | null;
  public form: HTMLFormElement | null;

  constructor() {
    this.element = templateCreation<HTMLElement>(el);
    this.form = this.element.querySelector('form');
    this.input = this.element.querySelector('.editor-selector');
    this.renderCssEditor();
  }

  renderCssEditor(): void {
    const editorMain: Element | null = this.element.querySelector('.editor-main');
    const tableCSS: Numbers = new Numbers(16, 'table-linea');
    editorMain?.append(tableCSS.element);
  }
}
