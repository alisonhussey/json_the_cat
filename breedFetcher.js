const request = require('request');
const arguments = process.argv.slice(2);
const breed = arguments[0];

request(`https://api.thecapi.com/v1/breeds/search?q=${breed}`, (err, response, body) => {
  if (err) {
    console.log('url invalid', err);
  } else {
    const data = JSON.parse(body);
    console.log(data[0].description);
    if (data.length === 0) {
      console.log('breed does not exist');
    }
  }
});

