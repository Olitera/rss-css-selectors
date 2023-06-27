import './table.scss';
import el from './table.html';
import { templateCreation } from '../../../helper/template';
import { Item } from '../item/item';
import { levelsConfig } from '../../../levelsConfig/game';
import { IItemConfig } from '../../../interfaces/item-config';

export class Table {
  public item?: Item;
  public element!: HTMLElement;
  private level: number;
  public itemsArray?: Item[];

  constructor(level: number) {
    this.level = level;
    this.element = templateCreation(el) as HTMLElement;
    this.forceTable();
  }

  forceTable(): void {
    this.itemsArray = levelsConfig[this.level].level.map((elem: IItemConfig) => {
      return this.createItem(elem);
    });
  }

  createItem(elem: IItemConfig) {
    this.item = new Item(elem);
    if (elem.child) {
      this.item.child = new Item(elem.child);
      (this.item.element as HTMLElement).append(this.item.child.element);
    }
    this.element.append(this.item.element);
    return this.item;
  }
}
