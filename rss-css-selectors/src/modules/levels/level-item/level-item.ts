import './level-item.scss';
import el from './level-item.html';
import { templateCreation } from '../../../helper/template';

export class LevelItem {
  public element: HTMLElement;
  public levelNumber: number;
  public isPassed?: boolean;
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

  setAsNotCurrent(): void {
    this.isCurrent = false;
    this.element.classList.remove('current');
  }

  setAsPassed(): void {
    this.isPassed = true;
    this.isCurrent = false;
    this.element.classList.add('passed');
    this.element.classList.remove('current');
  }

  setNotPassed(): void {
    this.isPassed = false;
    this.element.classList.remove('passed');
  }

  renderlevelNumber(): void {
    const levelNumber: Element | null = this.element.querySelector('.level-number');
    if (levelNumber) {
      levelNumber.innerHTML = String(this.levelNumber);
    }
  }
}
