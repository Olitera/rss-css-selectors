import './css-editor.scss';
import el from './css-editor.html';
import { templateCreation } from '../../interfaces/template';

export const editor: ChildNode = templateCreation(el);

export class Editor {
  public element: HTMLElement;

  constructor() {
    this.element = templateCreation(el) as HTMLElement;
  }
}
