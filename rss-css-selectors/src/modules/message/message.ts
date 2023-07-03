import './message.scss';
import el from './message.html';
import { templateCreation } from '../../helper/template';

export class Message {
  public element: HTMLElement = templateCreation(el) as HTMLElement;

  show(message: string, x: number, y: number): void {
    this.element.innerText = message;
    this.element.style.top = `${y}px`;
    this.element.style.left = `${x}px`;
    this.element.classList.remove('hidden');
  }

  hide(): void {
    this.element.classList.add('hidden');
  }
}
