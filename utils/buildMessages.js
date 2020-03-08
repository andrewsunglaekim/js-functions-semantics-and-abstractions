function buildMessages(data){
  const { messages } = data
  messages.forEach((message) => {
    buildMessage(message)
  })
}
