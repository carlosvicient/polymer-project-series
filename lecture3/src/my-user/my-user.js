import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

/**
 * `my-user` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class MyUser extends PolymerElement {
    static get properties() {
        return {
            name: {
                type: String,
                value: "John"
            },
            lastName: {
                type: String,
                value: "Doe"
            },
            birthYear: {
                type: Number,
                value: 1900
            },
            age: {
                type: Number,
                computed: 'computeAge(birthYear)'
            }
        }
    }

    static get template() {
        return html`
        <style>
            :host {
                display: inline;
                margin: 1em 1em;
            }

            div {
                display: inline-block;
                padding: 0 1em;
                margin: 1em 1em;
                border: 1px solid black;
                border-radius: 1em;
                background-color: rgba(173, 216, 230, 0.6);
            }

        </style>
        <div>
            <span>[[name]]</span>
            <span>[[lastName]], </span>
            <span>[[birthYear]]</span>
            <span>([[age]] years old)</span>
        </div>
        `;
    }

    computeAge(birthYear) {
        return new Date().getFullYear() - this.birthYear;
    }

    /**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * Use for one-time configuration of your component after local
     * DOM is initialized.
     */
    ready() {
        super.ready();
    }
}

customElements.define('my-user', MyUser);