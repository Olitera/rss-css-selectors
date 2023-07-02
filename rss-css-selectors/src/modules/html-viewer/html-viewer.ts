import './html-viewer.scss';
import el from './html-viewer.html';
import { templateCreation } from '../../helper/template';
import { Numbers } from '../numbers/numbers';

export class Viewer {
  public element: HTMLElement;
  public tableCode!: HTMLDivElement;

  constructor() {
    this.element = templateCreation(el) as HTMLElement;
    this.renderHTMLViewer();
  }

  renderHTMLViewer(): void {
    const tableMain = this.element.querySelector('.viewer-main');
    const tableHTML: Numbers = new Numbers(20);
    this.tableCode = document.createElement('div');
    this.tableCode.className = 'table-code';
    tableMain?.append(tableHTML.element);
    tableMain?.append(this.tableCode);
  }
}
