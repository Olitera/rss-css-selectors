import './numbers.scss';
import el from './numbers.html';
import { templateCreation } from '../../helper/template';

export class Numbers {
  public element: HTMLElement;
  public count: number;
  public color?: string;

  constructor(count: number, color?: string) {
    this.element = templateCreation(el) as HTMLElement;
    this.count = count;
    this.color = color;
    this.renderNumbers();
  }

  renderNumbers(): void {
    for (let i = 0; i < this.count; i++) {
      const numbersLinea: ChildNode = templateCreation(`<div class="numbers-table-linea">${i + 1}</div>`);
      if (this.color) {
        (numbersLinea as HTMLElement).classList.add(this.color);
      }
      this.element.append(numbersLinea);
    }
  }
}
