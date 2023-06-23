import './level-item.scss';
import el from './level-item.html';
import { templateCreation } from '../../../helper/template';

// export const levelItem: ChildNode = templateCreation(el);

export class LevelItem {
  public element: HTMLElement;
  private levelNumber: number;

  constructor(levelNumber: number) {
    this.element = templateCreation(el) as HTMLElement;
    this.levelNumber = levelNumber;
    this.renderlevelNumber();
  }

  renderlevelNumber() {
    const levelNumber = this.element.querySelector('.level-number');
    if (levelNumber) {
      levelNumber.innerHTML = String(this.levelNumber);
    }
  }
}
