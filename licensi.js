//Create By Adip
//Inspired By Felix

const request = require('request');

request('https://microsoft.com/licensi.txt', function (error, response, body) {
    console.log(body)
    if (body === "MASUKIN BODY LICENSI WEB KALIAN") {
        console.log('CORRECT LICENSI');
    }
    else {
        console.log('SERVER HAS SHUTDOWN');
        process.exit();
    }
});