import './levels.scss';
import el from './levels.html';
import { templateCreation } from '../../helper/template';
import { LevelItem } from './level-item/level-item';
import { levelsConfig } from '../../levelsConfig/game';

export class Level {
  public element: HTMLElement;
  public levelsArray: LevelItem[] = [];

  constructor() {
    this.element = templateCreation(el) as HTMLElement;
    this.renderLevel();
  }

  renderLevel(): void {
    const levelTitle = this.element.querySelector('.level-title');
    console.log(levelTitle);
    for (let i = levelsConfig.length; i > 0; i--) {
      const levelItem = new LevelItem(i);
      this.levelsArray.unshift(levelItem);
      levelTitle?.after(levelItem.element);
    }
  }
}
