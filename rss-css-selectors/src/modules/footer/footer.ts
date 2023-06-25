import './footer.scss';
import el from './footer.html';
import { templateCreation } from '../../helper/template';

export class Footer {
  public element: HTMLElement;

  constructor() {
    this.element = templateCreation(el) as HTMLElement;
  }
}
