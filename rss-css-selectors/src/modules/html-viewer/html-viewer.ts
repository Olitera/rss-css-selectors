import './html-viewer.scss';
import el from './html-viewer.html';
import { templateCreation } from '../../helper/template';
import { Numbers } from '../numbers/numbers';

export class Viewer {
  public element: HTMLElement;
  public tableCode!: HTMLDivElement;

  constructor() {
    this.element = templateCreation<HTMLElement>(el);
    this.renderHTMLViewer();
  }

  renderHTMLViewer(): void {
    const tableMain: Element | null = this.element.querySelector('.viewer-main');
    const tableHTML: Numbers = new Numbers(16);
    this.tableCode = document.createElement('div');
    this.tableCode.className = 'table-code';
    tableMain?.append(tableHTML.element);
    tableMain?.append(this.tableCode);
  }
}
