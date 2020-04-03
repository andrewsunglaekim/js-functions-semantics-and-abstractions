function init() {
  fetchMessages().then((messages) => {
    const messagesEl = document.querySelector('.messages');
    const messagesView = new MessagesView(messages, messagesEl);
    messagesView.renderMessages();
  });
}

init();
