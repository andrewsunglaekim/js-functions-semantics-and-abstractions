function buildMessages(data){
  const messagesEl = document.querySelector('.messages')
  // messagesEl.appendChild(el)
  const { messages } = data;
  messages.forEach((message) => {
    const messageView = new MessageView(message)
    messagesEl.appendChild(messageView.el);
  });
}
