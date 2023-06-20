import './html-viewer.scss';
import el from './html-viewer.html';
import { templateCreation } from '../../helper/template';

export const viewer: ChildNode = templateCreation(el);

export class Viewer {
  public element: HTMLElement;

  constructor() {
    this.element = templateCreation(el) as HTMLElement;
  }
}
