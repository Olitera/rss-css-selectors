import './html-viewer.scss';
import el from './html-viewer.html';
import { templateCreation } from '../../helper/template';

export class Viewer {
  public element: HTMLElement;
  public tableCode!: HTMLDivElement;

  constructor() {
    this.element = templateCreation(el) as HTMLElement;
    this.renderHTMLViewer();
  }

  renderHTMLViewer(): void {
    const tableMain = this.element.querySelector('.viewer-main');
    const tableHTML: Element | null = this.element.querySelector('.viewer-table');
    this.tableCode = document.createElement('div');
    this.tableCode.className = 'table-code';
    const numbers = 20;
    for (let i = 0; i < numbers; i++) {
      const viewerLinea: ChildNode = templateCreation(`<div class="viewer-table-linea">${i + 1}</div>`);
      // console.log(viewerLinea);
      tableHTML?.append(viewerLinea);
      tableMain?.append(this.tableCode);
    }
  }
}
