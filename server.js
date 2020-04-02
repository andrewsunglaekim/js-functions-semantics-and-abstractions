const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

app.get('/messages/', (req, res) => {
  res.json({
    messages: [
      {
        username: "Mary",
        image: "https://www.a.com/100/150",
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni ullam natus, distinctio perspiciatis deleniti voluptatum nihil! Minima laboriosam soluta magnam quos voluptatibus voluptatem nemo minus vitae quidem veniam sed saepe omnis ullam iure vero qui vel aperiam accusantium recusandae hic repudiandae ipsum, expedita alias necessitatibus. Omnis accusantium sunt voluptas voluptate!',
        focused: true,
        timestamp: '2018-10-14T13:41:03-04:00'
      },
      {
        username: "Bob",
        image: "https://www.a.com/100/200",
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo dolor voluptas qui maiores, odio molestias eos eum, enim mollitia. Omnis minima error officiis rerum id ullam mollitia quod consequatur, provident vero quia nihil quibusdam ipsa iure. Ea adipisci porro recusandae rerum explicabo ab fugiat, in architecto sunt! Minus, deleniti officiis.',
        focused: false,
        timestamp: '2018-10-14T13:51:03-04:00'
      },
      {
        username: "Sue",
        image: "https://www.a.com/100/250",
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos ex, minus, sed quibusdam voluptatum vitae iure, reiciendis soluta laboriosam autem, doloribus voluptates asperiores distinctio libero. Aliquid magni odit voluptatibus, dignissimos, sapiente doloremque neque! Sint dolor, deserunt libero beatae, saepe veniam quaerat quisquam cumque temporibus aut maiores error non impedit esse!',
        focused: false,
        timestamp: '2018-10-14T13:53:03-04:00'
      },
      {
        username: "Mary",
        image: "https://www.a.com/100/150",
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis architecto dignissimos reprehenderit eligendi voluptates sed saepe, iste tempore, explicabo enim ratione recusandae! Ab recusandae quo, non tempora accusamus eos blanditiis earum voluptas, minima corrupti, error culpa voluptates hic perferendis similique provident voluptatem quas tenetur. Facere fugiat tenetur reiciendis quam, facilis.',
        focused: true,
        timestamp: '2018-10-14T14:02:03-04:00'
      },
    ],
  })
})

app.listen(4000, () => {
  console.log('App starting on port 4000');
})
