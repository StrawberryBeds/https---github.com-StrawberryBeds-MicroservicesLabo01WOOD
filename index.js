console.log("Hello World! Node is present!");

const path = require('path');
const fs = require('fs');
const filePath = '/Users/samuelwood/Documents/Microservices/MicroservicesLabo01WOOD/config/data.json';
console.log(path.isAbsolute('/Users/samuelwood/Documents/Microservices/MicroservicesLabo01WOOD/config/data.json'));  // true​
console.log(filePath);

fs.readFileSync(filePath, 'utf-8',(err, data) => {
    if (err) throw error;
    console.log(data);
})
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error:  ${err}`);
    process.exit(1)
})