const request = require('request');
const baseUrl = 'https://api.thecatapi.com/v1/breeds/search?q=';


const fetchBreedDescription = function(breed, callback) {
  const newUrl = baseUrl + breed;
  request(newUrl, (err, response, body) => {
    if (err) {
      callback(err, null);
    } else {
      const data = JSON.parse(body);
      if (!data.length) {
        callback('breed does not exist', null);
      } else {
        callback(null, data[0].description);
      }
    }
  });
};



module.exports = { fetchBreedDescription };