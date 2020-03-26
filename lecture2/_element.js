import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `lecture2-element`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class Lecture2Element extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'lecture2-element',
      },
    };
  }
}

window.customElements.define('lecture2-element', Lecture2Element);
