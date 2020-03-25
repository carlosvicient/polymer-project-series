import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class Lecture1App extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        /*
        The HTML elements in your template become children in your custom element's shadow DOM. Shadow DOM provides a mechanism for encapsulation, meaning that elements inside the shadow DOM don't match selectors outside the shadow DOM.
        https://polymer-library.polymer-project.org/3.0/docs/devguide/style-shadow-dom
        */
        h2 {
          color: green;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'lecture1-app'
      }
    };
  }
}

window.customElements.define('lecture1-app', Lecture1App);
