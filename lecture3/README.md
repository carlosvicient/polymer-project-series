# \<lecture3\>

Application created `Polymer CLI` picking the `create polymer application` option.

After creating the application, these are the changes made in the code.

1. Styles added
    ````html
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
    `````

1. Add button in `<h2>` and use the "annotated event listeners" `on-click`

    ````html
    <button on-click="doClick">Click</button>
    ````

1. Create the `doClick` function and implement functionality

    1. Create function

        ````javascript
        doClick() {
            console.log("Button clicked!");
        }
        `````

    1. Add property for counting number of clicks

        ````javascript
        nClicks: {
            type: Number,
            value: 0
        }
        `````
    1. Modify `doClick` function to increment number of clicks

        ````javascript
        doClick() {
            console.log("Button clicked!");
            this.nClicks+=1;
        }
        `````
    1. Modify button text to bind number of clicks

        ````html
        <button on-click="doClick">+1 click (total: [[nClicks]])</button>
        ````
    
1. Show how composition works (slots). 

    1. First, we add a child between the opening and closing tags of our component in the `index.html` file

        ````html
        <lecture3-app>
            <div>Hello, I am a div and I want to be rendered here</div>
        </lecture3-app>
        ````

        The div won't be rendered.
    
    1. Add a `<slot></slot>` in the HTML template

        ````html
        <lecture3-app>
            <div>Hello, I am a div and I want to be rendered here</div>
        </lecture3-app>
        ````

1. Show how composition works (nested components).

    1. Create a new element `my-user/my-user.js`

    1. Add `HTML template`

        ````html
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
            <span>[[lastName]]</span>
            <span>[[birthYear]]</span>
            <span>[[age]] years old</span>
        </div>
        `````

    1. Add properties (notice age is a computed property)

        ````javascript
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
        `````

    1. Implement `computeAge(birtYear)` function

        ````javascript
        computeAge(birthYear) {
            return new Date().getFullYear() - this.birthYear;
        }
        `````

    1. Use `<my-user></my-user>` in `lecture3-app.js` element

        ````javascript
        import "../my-user/my-user";
        `````

        and:

        `````html
        <my-user></my-user>
        `````

#Bonus

Let's see how to:

- Perform Ajax requests

- Repeat a template (dom-repeat)

- Work with arrays (observe array mutations)

1. Install [iron-ajax](https://www.webcomponents.org/element/@polymer/iron-ajax) 

    1. `npm install --save @polymer/iron-ajax`

    1. Import the component: `import '@polymer/iron-ajax/iron-ajax.js';`

    1. Use it in the HTML template

        ````html
        <iron-ajax
            auto
            url="https://my-json-server.typicode.com/carlosvicient/fake-api/users"
            handle-as="json"
            on-response="handleResponse"
            debounce-duration="300">
        </iron-ajax>
        ````

        Notice the `url` points to a fake webservice that returns 5 users. the `on-response` contains the function which will be executed when the promise is resolved

    1. Create the `handleResponse` method

        ````javascript
        handleResponse(response){
            console.log("HandleResponse is: ", response);
            console.log(response.detail.response);
            this.users = response.detail.response;
        }
        ````

1. Use a dynamic template (`dom-repeat`)

    ````html
    <template is="dom-repeat" items="[[users]]">
      <my-user 
        name=[[item.name]] 
        last-name="[[item.lastName]]"
        birthday="[[item.birthday]]"
      ></my-user>
    </template>
    ````

1. If you need to "mutate" the `users` array, you will need to observe or tell polymer how to (or when) the view should be re-rendered

    >If you manipulate an array using the native methods (like Array.prototype.push), you can notify Polymer after the fact, as described in Batch changes to an object or array.
    
    [Work with arrays](https://polymer-library.polymer-project.org/3.0/docs/devguide/model-data#work-with-arrays)

    Try this (comment and uncomment to see the differences):

    `````javascript
    handleResponse(response){
        console.log("HandleResponse is: ", response);
        console.log(response.detail.response);
        this.users = response.detail.response;

        //After 5 seconds delete the first element of the list
        setTimeout(()=>{
        console.log('timer');
        //wrong
        // console.log('Before removing: ', this.users.length);
        // this.users.pop();
        // console.log('After removing: ', this.users.length);
        //end wrong
        
        //right (remove the first element)
        this.splice('users', 0, 1);
        }, 5000);
    }
    `````


## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your application locally.

## Viewing Your Application

```
$ polymer serve
```

## Building Your Application

```
$ polymer build
```

This will create builds of your application in the `build/` directory, optimized to be served in production. You can then serve the built versions by giving `polymer serve` a folder to serve from:

```
$ polymer serve build/default
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally. [Java SE Development Kit 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) is required. Note that if you do not have the `javac` command installed, you will be promted to install Java 10. To uninstall Java, see the direction [here](https://www.java.com/en/download/help/mac_uninstall_java.xml). See [issue #405 for the status of Java 10 support](https://github.com/Polymer/tools/issues/405).
