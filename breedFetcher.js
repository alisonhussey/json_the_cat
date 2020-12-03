const request = require('request');
const arguments = process.argv.slice(2);
const breed = arguments[0];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (err, response, body) => {
  if (err) {
    console.log('url invalid', err);
  } else {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log('breed does not exist');
    } else {
      console.log(data[0].description);
    }
  }
});