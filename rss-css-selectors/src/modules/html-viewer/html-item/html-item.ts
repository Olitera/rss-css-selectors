import './html-item.scss';
import el from './html-item.html';
import { templateCreation } from '../../../helper/template';
import { Item } from '../../presentation/item/item';

export class HtmlItem {
  public element: HTMLElement;
  // private _itemConfig: { className: string };
  private _item: Item;

  constructor(item: Item) {
    // this._itemConfig = itemConfig;
    this._item = item;
    this.element = templateCreation(el) as HTMLElement;
    this.createTag();
    this.element.addEventListener('mouseenter, mouseleave', this.addListener);
  }

  createTag(): void {
    if (this._item.child) {
      const openTag = document.createElement('span');
      openTag.innerText = `<${this._item.className}>`;
      this.element.append(openTag);
    } else {
      this.element.innerText = `<${this._item.className} />`;
    }
  }

  addListener = () => {
    (this._item.element as HTMLElement).classList.toggle('active');
  };
}
