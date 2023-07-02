import './level-item.scss';
import el from './level-item.html';
import { templateCreation } from '../../../helper/template';

export class LevelItem {
  public element: HTMLElement;
  public levelNumber: number;
  private isPassed?: boolean;
  private isCurrent?: boolean;

  constructor(levelNumber: number) {
    this.element = templateCreation(el) as HTMLElement;
    this.levelNumber = levelNumber;
    this.renderlevelNumber();
  }

  setAsCurrent(): void {
    this.isCurrent = true;
    this.element.classList.add('current');
  }

  setAsNotCurren(): void {
    this.isCurrent = false;
    this.element.classList.remove('current');
  }

  setAsPassed(): void {
    this.isPassed = true;
    this.isCurrent = false;
    this.element.classList.add('passed');
    this.element.classList.remove('current');
  }

  renderlevelNumber(): void {
    const levelNumber = this.element.querySelector('.level-number');
    if (levelNumber) {
      levelNumber.innerHTML = String(this.levelNumber);
    }
  }
}
