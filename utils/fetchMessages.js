function fetchMessages() {
  return fetch('http://localhost:4000/messages/')
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      const { messages } = res
      return messages;
    })
}
