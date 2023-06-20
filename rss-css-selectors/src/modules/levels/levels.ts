import './levels.scss';
import el from './levels.html';
import { templateCreation } from '../../interfaces/template';

export const level: ChildNode = templateCreation(el);

export class Level {
  public element: HTMLElement;

  constructor() {
    this.element = templateCreation(el) as HTMLElement;
  }
}
