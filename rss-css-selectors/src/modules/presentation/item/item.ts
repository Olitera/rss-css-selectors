import './item.scss';
import el from './item.html';
import { templateCreation } from '../../../helper/template';

export class Item {
  public element: ChildNode = templateCreation(el);
  public className: string;

  constructor(itemConfig: { className: string }) {
    (this.element as HTMLElement).classList.add(itemConfig.className);
    this.className = itemConfig.className;
  }
}
