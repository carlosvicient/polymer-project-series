# \<lecture2-element\>

This project was created using the `polymer CLI` by selecting the `polymer-3-element - A simple Polymer 3.0 element template`.

The modifications made in this project are as follows:

1. Add an input form control in the HTML template
    1. Test one-way data binding `[[]]`
    1. Test two-way data binding `{{}}`

1. Show how data binding works with native elements that causes issues on one or more browsers (Attribute binding to dynamic values by using `$`)
    1. Add `red` and `green` styles

        ````CSS
        .red {
            color: red;
        }

        .green {
            color: green;
        }
        ````

    1. Add new `h2` and `<input>`

        ````html
        <h2 class="[[prop1]]">common native element properties that need attribute bindings for dynamic values </h2>
        <p>write red or green in the next field</p>
        <input type="text" name="attrs" value="{{prop1::input}}">
        ````

    1. Replace `class` by `class$`

1. Show how to initialize properties outside the polymer component

    1. Add a new `<lecture2-element></lecture2-element>` inside the `demo/index.html` file

        ````html
        <lecture2-element></lecture2-element>
        `````

    1. Add a html attribute with the name of the property we want to initialize

        ````html
        <lecture2-element prop1="world"></lecture2-element>
        `````

1. Show how to style the host element

    1. Add a css rule to change the background of the host element when hovered

        ````CSS
        :host(:hover) {
          background-color: rgb(255, 239, 239);
        }
        `````

1. Installing and using 3rd party components

    1. Go to [https://www.webcomponents.org/](https://www.webcomponents.org/) and search custom elements

    1. We will install [paper-input](https://www.webcomponents.org/element/@polymer/paper-input). A component to use material design input form controls 

    1. `npm install --save @polymer/paper-input`

    1. Import the component where we want to use it: `import '@polymer/paper-input/paper-input.js';`

    1. Use it in the HTML template: `<paper-input label="green or red..." value="{{prop1}}"></paper-input>` (notice we don't need the `:input` event since this is already a polymer component).


## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) and npm (packaged with [Node.js](https://nodejs.org)) installed. Run `npm install` to install your element's dependencies, then run `polymer serve` to serve your element locally.

## Viewing Your Element

```
$ polymer serve
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.
