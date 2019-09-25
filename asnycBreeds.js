const fs = require('fs');

// Make the function take in a callback function
const breedDetailsFromFile = function(breed, callback) {
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (!error) {
      // call the callback function, sending it the data ...
      callback(data);
    }
  });
};

module.exports = breedDetailsFromFile;
