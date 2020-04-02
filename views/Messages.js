class MessagesView {
  constructor(messages, el) {
    this.messages = messages;
    this.el = el;
  }

  renderMessages() {
    this.messages.forEach((message) => {
      const messageView = new MessageView(message)
      this.el.appendChild(messageView.render());
    })
  }
}
