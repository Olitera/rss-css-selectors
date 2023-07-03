import './html-item.scss';
import el from './html-item.html';
import { templateCreation } from '../../../helper/template';
import { Item } from '../../presentation/item/item';
import { Message } from '../../message/message';

export class HtmlItem {
  public element: HTMLElement;
  private item: Item;
  private message?: Message;

  constructor(item: Item, message?: Message) {
    this.item = item;
    this.message = message;
    this.element = templateCreation(el) as HTMLElement;
    this.createTag();
    this.addListener(this.element);
    this.addListener(this.item.element);
  }

  createTag(): void {
    const openTag: HTMLSpanElement = document.createElement('span');
    let text = `<${this.item.tag}`;
    if (this.item.className) {
      text += ` class="${this.item.className}"`;
    }
    if (this.item.id) {
      text += ` id="${this.item.id}"`;
    }
    if (this.item.child) {
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
    (this.item.element as HTMLElement).classList.toggle('active');
    const x = (this.item.element as HTMLElement).offsetLeft + 220;
    const y = (this.item.element as HTMLElement).offsetTop + 15;
    this.message?.show(`<${this.item.tag}`, x, y);
    this.element.classList.toggle('active');
    e.stopPropagation();
  };
}
