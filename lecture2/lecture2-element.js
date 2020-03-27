import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';

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
          border: 1px solid black;
          margin: 1em;
          padding: 1em;
        }

        :host(:hover) {
          background-color: rgb(255, 239, 239);
        }

        .red {
          color: red;
        }

        .green {
          color: green;
        }
      </style>

      <h2>Hello [[prop1]]!. This form is config to use 1-way data binding</h2>
      <input type="text" name="oneWay" value="[[prop1]]">

      <h2>And this one 2-way data binding</h2>
      <input type="text" name="twoWay" value="{{prop1::input}}">

      <h2 class$="[[prop1]]">common native element properties that need attribute bindings for dynamic values </h2>
      <p>write red or green in the next field</p>
      <input type="text" name="attrs" value="{{prop1::input}}">

      <h2>Yet another "input" using paper-input web component</h2>
      <paper-input label="green or red..." value="{{prop1}}"></paper-input>
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
