const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));

app.get('/', (request, response) => {
  response.render('index', {
    title: 'Olá Mundo!',
    message: 'From Ironhack Lisboa'
  });
});

app.get('/about', (request, response) => {
  const data = {
    name: 'David',
    location: 'Lisbon, Portugal',
    profession: 'Whatever I want',
    pet: {
      name: 'Panda',
      color: 'Black and White',
      species: 'dog'
    },

    pets: [
      {
        name: 'Panda',
        color: 'Black and White',
        species: 'dog',
        wellBehaved: true
      },
      {
        name: 'Pipoca',
        color: 'Brown',
        species: 'dog',
        wellBehaved: false
      },
      {
        name: 'Whiskers',
        color: 'Yellow',
        species: 'cat',
        wellBehaved: true
      }
    ]
  };
  response.render('about', data);
});

app.listen(3000);
