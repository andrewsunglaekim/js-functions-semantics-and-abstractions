function fetchData() {
  fetch('http://localhost:4000/messages/')
    .then((res) => {
      console.log('res');
      return res.json();
    })
    .then((res) => {
      buildMessages(res)
    });
}

fetchData();
