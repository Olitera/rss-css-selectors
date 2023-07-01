import './item.scss';
import el from './item.html';
import { templateCreation } from '../../../helper/template';
import { IItemConfig } from '../../../interfaces/item-config';

export class Item {
  public element: ChildNode = templateCreation(el);
  public tag: string;
  public child?: Item;
  public className?: string;
  public id?: string;
  public right?: string;

  constructor(itemConfig: IItemConfig) {
    (this.element as HTMLElement).classList.add(itemConfig.tag);
    this.tag = itemConfig.tag;
    this.right = itemConfig.right;
    if (itemConfig.className) {
      (this.element as HTMLElement).classList.add(itemConfig.className);
      this.className = itemConfig.className;
    }
    if (itemConfig.id) {
      (this.element as HTMLElement).setAttribute('id', itemConfig.id);
      this.id = itemConfig.id;
    }
    if (itemConfig.right) {
      (this.element as HTMLElement).classList.add(itemConfig.right);
    }
  }
}
