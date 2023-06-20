import './table.scss';
import el from './table.html';
import { templateCreation } from '../../../helper/template';
import { Item } from '../item/item';
import { levelsConfig } from '../../../levelsConfig/game';

export class Table {
  public item?: Item;
  public element!: HTMLElement;
  private level: number;

  constructor(level: number) {
    this.level = level;
    this.element = templateCreation(el) as HTMLElement;
    this.forceTable();
  }

  forceTable(): void {
    levelsConfig[this.level].forEach((ele) => {
      this.item = new Item(ele);
      this.element.append(this.item.element);
    });
  }
}
