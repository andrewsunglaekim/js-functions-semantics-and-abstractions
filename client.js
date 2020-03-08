console.log('hello!ss');

function fetchData() {
  fetch('http://localhost:4000/messages/')
    .then((res) => {
      console.log('res');
      return res.json();
    })
    .then((res) => {
      console.log(res);
    })
}

fetchData();
