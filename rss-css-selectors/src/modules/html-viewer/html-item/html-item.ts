import './html-item.scss';
import el from './html-item.html';
import { templateCreation } from '../../../helper/template';
import { Item } from '../../presentation/item/item';

export class HtmlItem {
  public element: HTMLElement;
  private _item: Item;

  constructor(item: Item) {
    this._item = item;
    this.element = templateCreation(el) as HTMLElement;
    this.createTag();
    this.addListener(this.element);
    this.addListener(this._item.element);
  }

  createTag(): void {
    const openTag: HTMLSpanElement = document.createElement('span');
    let text = `<${this._item.tag}`;
    if (this._item.className) {
      text += ` class="${this._item.className}"`;
    }
    if (this._item.id) {
      text += ` id="${this._item.id}"`;
    }
    if (this._item.child) {
      openTag.innerText = text + '>';
      this.element.append(openTag);
    } else {
      this.element.innerText = text + ' />';
    }
  }

  private addListener(el: ChildNode) {
    el.addEventListener('mouseover', this.addListenerFunction);
    el.addEventListener('mouseout', this.addListenerFunction);
  }

  private addListenerFunction = (e: Event): void => {
    (this._item.element as HTMLElement).classList.toggle('active');
    this.element.classList.toggle('active');
    e.stopPropagation();
  };
}
