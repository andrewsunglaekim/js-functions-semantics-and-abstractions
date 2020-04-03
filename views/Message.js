class MessageView {
  constructor(msg) {
    this.msg = msg;
  }

  render() {
    const el = document.createElement('div');
    el.className = `message ${this.msg.focused ? 'message--reversed' : ''}`
    el.innerHTML = `
      <div class="message__row">
        <div class="message__content">
          <div class="message__time">
            ${parseTime(this.msg.timestamp)}
          </div>
          <div class="message__body">
            ${this.msg.body}
          </div>
        </div>
        <div class='message__user'>
          <div class='message__username'>
            ${this.msg.username}
          </div>
          <img
            class="message__image"
            src="${this.msg.image}">
        </div>
      </div>
    `
    return el;
  }
}
