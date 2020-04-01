# Functions semanticJS and abstractions

- Define Abstraction
- Identify the inputs of a function
- Identify the outputs of a function
- Identify the side effects of a function
- Define Functional Programming
- Write semantic javascript variable names
- Identify potential anti patterns in code structure
- Identify the subjectivity of engineering

## Admin (3/3)

### Admin - zoom "guidelines"
Some guidelines might be helpful.

First and foremost, audience participation is welcome and encouraged.

That said, it being a zoom call, look for pauses and defer to other speakers that begin earlier.

Alternatively, another way to get heard or ensure a question is answered is to propose the question in the slack channel #js-functions-abstractions

### Admin - installation
Install this repository if you'd like to run any of these scenarios locally.

The backend service used in this lesson is an express server, to install and run:

```bash
$ git clone git@github.com:andrewsunglaekim/js-functions-semantics-and-abstractions.git
$ cd js-functions-semantics-and-abstractions
$ npm install nodemon -g
$ npm install
$ nodemon server.js
```

> Nodemon runs node services that restart the service if it detects changes in the directory. We should be able to see json of some messages in our browser now at `http://localhost:4000/messages/`


## Framing - Abstraction (5/8)
As developers we're told from the beginning to keep things DRY. It's something that constantly nags at us almost to a detriment.

When we start weighing our decisions against one another, that's when real engineering starts. Abstraction is at the crux of all of that.

Wikipedia:

> the concept of procedures, functions, or subroutines which represent a specific of implementing control flow in programs;

In this lesson, we'll introspect on this repository at various branches.

### A contrived thought experiment
Imagine a world where logging hello is a feature. A company says I need this feature:

```js
console.log('hello');
```

The company then says wow, what a great feature. We want it to happen twice we liked it so much. Got you fam:

```js
console.log('hello');
console.log('hello');
```

The company then says, "This isn't a feature for ants. I'm going to have to see that feature at least 3 times."

We stop. We've seen this before. We think ahead. Boom:

```js
const numberOfTimesToPrintHello = 3
for (let i = 0; i < numberOfTimesToPrintHello; i++) {
  console.log('hello');
}
```

We do it this way because we can just change the number to whatever we need in the future.

**So often, we solution faster than we domain.**

Maybe we should have started with some questions first.

- Are we going to have to do this again?
- How often and what will trigger it?
- What more information do we need about this features scope?

Maybe, just MAYBE. 3 times was exactly the number of times they wanted for this feature to happen on load. And that's all that will ever be required.

Perhaps the right answer for this scenario was

```
console.log('hello');
console.log('hello');
console.log('hello');
```

Another question we should have asked, especially in this contrived case, was:

- Why are we doing this at all?

This thought experiment is a metaphor for engineering. We're constantly weighing things as we solution. Today we'll look at several snippets of code. Let's look at the code with as many angles as possible.

## We do - 3 minute Code Review (3/11)

Checkout to the `first-exercise` branch.

```
$ git checkout first-exercise
$ open index.html
// alternatively, open the index.html in the browser in a different way
```

Spend the next 3 minutes familiarizing with the dataset, reviewing the html and javascript, viewing the page in the browser.

## We do - Code smells - Maybe not (11/14)

Code smell always has a negative connotation. What we're looking for are **potential** ways to improve upon `client.js`:

```js
function init() {
  fetch('http://localhost:4000/messages/')
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      // destructures messages from response
      const { messages } = res;
      messages.forEach((message) => {
        // creates element to append
        const el = document.createElement('div');

        // intializes time variables
        const date = luxon.DateTime.fromISO(message.timestamp);
        const amPM = date.hour > 12 ? 'pm' :'am';
        const hour = date.hour > 12 ? date.hour % 12 : date.hour;

        // adds dom content
        el.className = `message ${message.focused ? 'message--reversed' : ''}`
        el.innerHTML = `
          <div class="message__row">
            <div class="message__content">
              <div class="message__time">
                ${`${date.day} ${date.monthShort} ${hour}:${date.minute} ${amPM}`}
              </div>
              <div class="message__body">
                ${message.body}
              </div>
            </div>
            <div class='message__user'>
              <div class='message__username'>
                ${message.username}
              </div>
              <img
                class="message__image"
                src="${message.image}">
            </div>
          </div>
        `

        // appends to list
        const messagesEl = document.querySelector('.messages')
        messagesEl.appendChild(el)
      });
    });
}

init();
```

There's ultimately nothing to incorrect about this code. It's a bit procedural but it gets the job done well enough in just under 50 lines of code.. with comments!

If we know this "feature" will be exactly just rendering 4 messages, this code may be just fine.

However, that's usually not the case in development. Scope creep and changing requirements are norms of the industry.

We want to write code with abstractions to help us reuse functionality.

Let's take a look at a different solution with some abstractions added to it.

## We do - 3 minute Code Review (3/11)

Look at the implementation of rendering these messages.

Checkout to the `second-exercise` branch.

```
$ git checkout second-exercise
$ open index.html
// alternatively, open the index.html in the browser in a different way
```

You should now see a "chat transcript" in the browser.

> this code snippet and all future ones assumes you have the local server running from the admin section

The files that are creating this view is located in `index.html`:

- `utils/buildMessage.js`
- `utils/buildMessages.js`
- `utils/parseTime.js`
- `client.js`

## We do - think-pair-share Groups (10/21)

As groups, we'll review 4 primary functions in this code base: `buildMessage`, `buildMessages`, `parseTime`, and `fetchData`.

Spend the next 5 minutes talking about the function our group was assigned. While discussing the merits and detriments of your function think about and use the following 3 words:

- input(s)
- output(s)
- side effect(s)

![1000 words](images/1000words.jpg)

### Inputs, Outputs, Side Effects

By definition, these things are very simple and intuitive:

```js
function add(num1, num2) {
  console.log(num1);
  return num1 + num2
}
```

For function `add`:

- inputs: `num1`, `num2`

- outputs: `num1 + num2`

- side effects: `num1` is logged.

How we use inputs, outputs, and side effects; moreover, how we organize them together are not so simple and intuitive.

### `buildMessages`

```js
function buildMessages(data){
  const { messages } = data;
  messages.forEach((message) => {
    buildMessage(message);
  });
}
```

What are the inputs of the `buildMessages`?

- `data`

What is the output of `buildMessages`?

- `undefined`

What are the side effects?

- a loop of `buildMessage` runs passing each message to the callback.

> It should be noted that client software is a world of side effects.

What about `forEach`? What are it's inputs, outputs and side effects?

### `buildMessage`

```js
function buildMessage(message) {
  const el = document.createElement('div');
  el.className = `message ${message.focused ? 'message--reversed' : ''}`
  el.innerHTML = `
    <div class="message__row">
      <div class="message__content">
        <div class="message__time">
          ${parseTime(message.timestamp)}
        </div>
        <div class="message__body">
          ${message.body}
        </div>
      </div>
      <div class='message__user'>
        <div class='message__username'>
          ${message.username}
        </div>
        <img
          class="message__image"
          src="${message.image}">
      </div>
    </div>
  `
  const messagesEl = document.querySelector('.messages')
  messagesEl.appendChild(el)
}
```

Inputs:


## SemanticJS

This isn't a piece of software, its a header for this part of the lesson. The idea is we want to have GREAT variable names. We all intrinsically know this as developers. Despite this, we struggle with naming things all the time.

Spend 2 minutes discussing the merits or issues with your group's variable name.

```
// TODO: needs code blocks as examples
data
callback
isProd
```

if this then that org == 'admin' ?  '#ff2124': '#42221f'
