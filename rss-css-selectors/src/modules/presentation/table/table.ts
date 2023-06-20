import './table.scss';
import el from './table.html';
import { templateCreation } from '../../../interfaces/template';

export class Table {
  element: ChildNode = templateCreation(el);
}
