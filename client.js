function fetchData() {
  fetch('http://localhost:4000/messages/')
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      // destructures messages from response
      buildMessages(res);
    });
}

fetchData();
