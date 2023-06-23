import './levels.scss';
import el from './levels.html';
import { templateCreation } from '../../helper/template';
import { LevelItem } from './level-item/level-item';

// export const level: ChildNode = templateCreation(el);
export class Level {
  public element: HTMLElement;

  constructor() {
    this.element = templateCreation(el) as HTMLElement;
    this.renderLevel();
  }

  renderLevel() {
    const levelTitle = this.element.querySelector('.level-title');
    console.log(levelTitle);
    for (let i = 10; i > 0; i--) {
      const levelItem = new LevelItem(i);
      levelTitle?.after(levelItem.element);
    }
  }
}
