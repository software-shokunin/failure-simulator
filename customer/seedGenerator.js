const faker = require('faker');

function pad(num, size){
  return ('000' + num).substr(-size);
}

console.log('[');

Array(999).fill().map((_, i) => i).forEach((i) => {
  console.log(JSON.stringify({
    "name": faker.name.findName(),
    "paymentDetails": {
      "number": "4000 0000 0000 " + pad(i, 4),
      "ccv": pad(i, 3),
      "expiry": "11/20"
    }
  }) + ',');
});

console.log(JSON.stringify({
  "name": faker.name.findName(),
  "paymentDetails": {
    "number": "4000 0000 0000 1000",
    "ccv": "999",
    "expiry": "11/20"
  }
}));


console.log(']')
