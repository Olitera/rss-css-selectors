import './level-item.scss';
import el from './level-item.html';
import { templateCreation } from '../../../helper/template';

// export const levelItem: ChildNode = templateCreation(el);

export class LevelItem {
  public element: HTMLElement;
  private readonly levelNumber: number;
  private isPassed?: boolean;
  private isCurrent?: boolean;

  constructor(levelNumber: number) {
    this.element = templateCreation(el) as HTMLElement;
    this.levelNumber = levelNumber;
    this.renderlevelNumber();
  }

  setAsCurrent() {
    this.isCurrent = true;
    this.element.classList.add('current');
  }
  setAsPassed() {
    this.isPassed = true;
    this.isCurrent = false;
    this.element.classList.add('passed');
    this.element.classList.remove('current');
  }
  renderlevelNumber() {
    const levelNumber = this.element.querySelector('.level-number');
    if (levelNumber) {
      levelNumber.innerHTML = String(this.levelNumber);
    }
  }
}
