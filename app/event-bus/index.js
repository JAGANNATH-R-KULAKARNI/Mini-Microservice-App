const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

const events = [];

app.post('/events', (req, res) => {
  const event = req.body;

  events.push(event);

  axios.post('http://posts-svc:4000/events', event).then((u)=>console.log('u')).catch((err)=>console.log('err'));
  axios.post('http://comments-svc:4001/events', event).then((u)=>console.log('u')).catch((err)=>console.log('err'));
  axios.post('http://query-svc:4002/events', event).then((u)=>console.log('u')).catch((err)=>console.log('err'));
  axios.post('http://moderation-svc:4003/events', event).then((u)=>console.log('u')).catch((err)=>console.log('err'));

  return res.send({ status: 'OK' });
});

app.get('/events', (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log('Listening on 4005');
});
