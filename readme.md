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

Install this repository if you'd like to run any of these scenarios locally.

The backend service used in this lesson is an express server, to install and run:

```bash
$ git clone git@github.com:andrewsunglaekim/js-functions-semantics-and-abstractions.git
$ cd js-functions-semantics-and-abstractions
$ npm install nodemon -g
$ npm install
$ nodemon server.js
```

> Nodemon runs node services that restart the service if it detects changes in the directory. We should be able to see messages in our browser now at `http://localhost:4000/messages/`

## Framing - Abstraction (2/5)
As developers we're told from the beginning to keep things DRY. It's something that constantly nags at us almost to a detriment. When we start weighing our decisions against one another, that's when real engineering starts. Abstraction is at the crux of all of that.

Wikipedia:

> the concept of procedures, functions, or subroutines which represent a specific of implementing control flow in programs;

In this lesson we'll introspect on this repository at various branches.

## We do - 3 minute Code Review (3/8)

Look at the implementation of rendering these messages.

Checkout to the `first-exercise` branch.

```
$ git checkout first-exercise
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

## We do - think-pair-share Groups (10/18)

As groups, we'll review 4 primary functions in this code base: `buildMessage`, `buildMessages`, `parseTime`, and `fetchData`.

Spend the next 5 minutes talking about the function our group was assigned. While discussing the merits and detriments of your function think about and use the following 3 words:

- input(s)
- output(s)
- side effect(s)

![1000 words](images/1000words.jpg)

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

- a loop of `buildMessage` runs against each

### `buildMessages`

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
