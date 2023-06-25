import el from './presentation.html';
import './presentation.scss';
import { templateCreation } from '../../helper/template';
import { Table } from './table/table';

// export const presentation: ChildNode = templateCreation(el);

export class Presentation {
  public table?: Table;
  public element: HTMLElement;

  // private level: number;

  constructor() {
    // this.level = level;
    this.element = templateCreation(el) as HTMLElement;
  }

  renderTable(level: number) {
    this.element.innerHTML = '';
    this.table = new Table(level);
    this.element.append(this.table.element);
  }

  // addStyle(): void {
  //   this.element.style.background = 'red';
  // }
}
