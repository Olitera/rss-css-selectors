import './item.scss';
import el from './item.html';
import { templateCreation } from '../../../helper/template';
import { IItemConfig } from '../../../interfaces/item-config';

export class Item {
  public element: ChildNode = templateCreation(el);
  public className: string;
  public child?: Item;

  constructor(itemConfig: IItemConfig) {
    (this.element as HTMLElement).classList.add(itemConfig.tag);
    this.className = itemConfig.tag;
    // this.child = itemConfig.child;
  }
}
