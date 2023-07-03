import './levels.scss';
import el from './levels.html';
import { templateCreation } from '../../helper/template';
import { LevelItem } from './level-item/level-item';
import { levelsConfig } from '../../levelsConfig/game';

export class Level {
  public element: HTMLElement;
  public levelsArray: LevelItem[] = [];
  public reset: Element | null;

  constructor() {
    this.element = templateCreation(el) as HTMLElement;
    this.renderLevel();
    this.reset = this.element.querySelector('.level-but');
  }

  renderLevel(): void {
    const levelTitle = this.element.querySelector('.level-title');
    for (let i: number = levelsConfig.length; i > 0; i--) {
      const levelItem: LevelItem = new LevelItem(i);
      this.levelsArray.unshift(levelItem);
      levelTitle?.after(levelItem.element);
    }
  }
}
