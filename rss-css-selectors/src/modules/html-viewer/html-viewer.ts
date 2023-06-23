import './html-viewer.scss';
import el from './html-viewer.html';
import { templateCreation } from '../../helper/template';

// export const viewer: ChildNode = templateCreation(el);

export class Viewer {
  public element: HTMLElement;

  constructor() {
    this.element = templateCreation(el) as HTMLElement;
    this.renderHTMLViewer();
  }

  renderHTMLViewer(): void {
    const tableHTML: Element | null = this.element.querySelector('.viewer-table');
    const numbers = 20;
    for (let i = 0; i < numbers; i++) {
      const viewerLinea: ChildNode = templateCreation(
        `<div class="viewer-table-linea"><div class="viewer-linea-number">${i + 1}</div></div>`
      );
      // console.log(viewerLinea);
      tableHTML?.append(viewerLinea);
    }
  }
}
