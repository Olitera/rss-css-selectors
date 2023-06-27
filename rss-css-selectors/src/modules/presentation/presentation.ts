import el from './presentation.html';
import './presentation.scss';
import { templateCreation } from '../../helper/template';
import { Table } from './table/table';
import { levelsConfig } from '../../levelsConfig/game';

export class Presentation {
  public table?: Table;
  public element: HTMLElement;
  public description?: HTMLDivElement;

  constructor() {
    this.element = templateCreation(el) as HTMLElement;
  }

  renderTable(level: number) {
    this.element.innerHTML = '';
    this.description = document.createElement('div');
    this.description.className = 'description';
    this.description.innerText = levelsConfig[level].description;
    this.table = new Table(level);
    this.element.append(this.description, this.table.element);
  }
}
