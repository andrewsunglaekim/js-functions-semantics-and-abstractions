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
