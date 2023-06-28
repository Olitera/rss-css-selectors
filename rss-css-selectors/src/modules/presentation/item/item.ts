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

  constructor(itemConfig: IItemConfig) {
    (this.element as HTMLElement).classList.add(itemConfig.tag);
    this.tag = itemConfig.tag;
    if (itemConfig.className) {
      (this.element as HTMLElement).classList.add(itemConfig.className);
      this.className = itemConfig.className;
    }
    // if (itemConfig.id) {
    //   this.element as HTMLElement).
    //     // .add(itemConfig.id);
    //   this.className = itemConfig.className;
    // }
  }
}
