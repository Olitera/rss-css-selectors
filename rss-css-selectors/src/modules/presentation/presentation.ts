import el from './presentation.html';
import './presentation.scss';
import { templateCreation } from '../../interfaces/template';
import { Table } from './table/table';

export const presentation: ChildNode = templateCreation(el);

export class Presentation {
  public table: Table;
  public element: HTMLElement;

  constructor() {
    this.element = templateCreation(el) as HTMLElement;
    this.table = new Table();
    this.element.append(this.table.element);
  }

  addStyle(): void {
    this.element.style.background = 'red';
  }
}
