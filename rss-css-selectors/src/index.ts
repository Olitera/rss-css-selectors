import './style.scss';
import { Presentation } from './modules/presentation/presentation';
import { Editor } from './modules/css-editor/css-editor';
import { Viewer } from './modules/html-viewer/html-viewer';
import { Level } from './modules/levels/levels';

const mainContainer: HTMLDivElement = document.createElement('div');
mainContainer.className = 'main-container';
const presentation: Presentation = new Presentation();
const cssHtml: HTMLElement = document.createElement('div');
cssHtml.className = 'css-html';
const editor: Editor = new Editor();
const viewer: Viewer = new Viewer();
const level: Level = new Level();

const body: HTMLBodyElement = document.querySelector('body') as HTMLBodyElement;
body?.append(mainContainer);
mainContainer.append(presentation.element);
mainContainer.append(cssHtml);
cssHtml.append(editor.element);
cssHtml.append(viewer.element);
body?.append(level.element);

body?.addEventListener('click', () => presentation.addStyle());
