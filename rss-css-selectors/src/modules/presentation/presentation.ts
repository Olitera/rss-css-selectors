import el from './presentation.html';
import './presentation.scss';
import { templateCreation } from '../../helper/template';
import { Table } from './table/table';
import { levelsConfig } from '../../levelsConfig/game';

export class Presentation {
  public table?: Table;
  public element: HTMLElement;
  public presentationContainer?: HTMLDivElement;
  public description?: HTMLDivElement;
  public help?: HTMLButtonElement;

  constructor() {
    this.element = templateCreation<HTMLElement>(el);
  }

  renderTable(level: number): void {
    this.element.innerHTML = '';
    this.presentationContainer = document.createElement('div');
    this.presentationContainer.className = 'presentation-container';
    this.help = document.createElement('button');
    this.help.className = 'presentation-but';
    this.help.innerText = 'Help';
    this.description = document.createElement('div');
    this.description.className = 'description';
    this.description.innerText = levelsConfig[level].description;
    this.presentationContainer.append(this.help, this.description);
    this.table = new Table(level);
    this.element.append(this.presentationContainer, this.table.element);
  }
}
