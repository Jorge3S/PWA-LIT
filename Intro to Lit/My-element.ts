import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('name-tag')
export class NameTag extends LitElement {
 @property()
  name: string = 'Your name here';
  ChangeName(event:Event) {
    const input = event.target as HTMLInputElement;
    this.name = input.value;
  }
  
  render() {
    // TODO: Add declarative event listener to input.
    return html`
      <p>Hello, ${this.name}</p>
      <input @input=${this.ChangeName} placeholder = "Enter your name">
    `;
  }

}
