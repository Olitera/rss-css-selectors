export function templateCreation(htmlFromString: string): ChildNode {
  const template: HTMLTemplateElement = document.createElement('template');
  template.innerHTML = htmlFromString;
  return template.content.firstChild as ChildNode;
}
