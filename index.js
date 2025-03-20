console.log("Hello World! Node is present!");

const path = require('path');
const fs = require('fs');
const filePath = '/Users/samuelwood/Documents/Microservices/MicroservicesLabo01WOOD/config/data.json';
console.log(path.isAbsolute('/Users/samuelwood/Documents/Microservices/MicroservicesLabo01WOOD/config/data.json'));  // true​
console.log(filePath);


const fileContent = fs.readFileSync(filePath, 'utf8');

const jsonData = JSON.parse(fileContent);

console.log(jsonData);