const fs = require('fs');

// Make the function take in a callback function
const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log('Callback: I have the data!');
    if (!error) {
      // call the callback function, sending it the data ...
      callback(data);
    }
  });
};

// ... and we pass in a callback to the function call, where our data
// will be available!
const bombay = breedDetailsFromFile('Bombay', (data) => {
  console.log(data);
});
console.log('Return Value: ', bombay); // => will NOT print out details, instead we will see undefined!
