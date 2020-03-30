import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-ajax/iron-ajax.js';
import "../my-user/my-user";

/**
 * @customElement
 * @polymer
 */
class Lecture3App extends PolymerElement {
  static get template() {
    return html`
    <style>
      :host {
        display: block;
        border: 1px solid rgb(246, 236, 255);
        background-color: rgba(246, 236, 255, 0.45);
        border-radius: 1px;
        min-height: 90vh;
        margin: 5vh;
      }

      :host > h2 {
        border-bottom: 1px solid rgb(246, 236, 255);
        display: flex;
        justify-content: center;
        margin: 0;
        padding: 1em;
      }

      :host ::slotted(*) {
        padding: 1em;
      }
      
    </style>
    <iron-ajax
        auto
        url="https://my-json-server.typicode.com/carlosvicient/fake-api/users"
        handle-as="json"
        on-response="handleResponse"
        debounce-duration="300">
    </iron-ajax>
    <h2>
      Hello [[prop1]]!
      <button on-click="doClick">+1 click (total: [[nClicks]])</button>
    </h2>
    <my-user></my-user>
    <slot></slot>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'lecture3-app'
      },
      nClicks: {
        type: Number,
        value: 0
      }
    };
  }

  doClick(/*event*/) {
    // console.log('Button clicked!', event);
    console.log("Button clicked!");
    this.nClicks+=1;
    console.log("Number of clicks: ", this.nClicks);
  }

  handleResponse(response){
    console.log("HandleResponse is: ", response);
    console.log(response.detail.response);
  }
}

window.customElements.define('lecture3-app', Lecture3App);
