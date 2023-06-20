import './item.scss';
import el from './item.html';
import { templateCreation } from '../../../helper/template';

export class Item {
  element: ChildNode = templateCreation(el);

  constructor(itemConfig: { className: string }) {
    (this.element as HTMLElement).classList.add(itemConfig.className);
  }
}
