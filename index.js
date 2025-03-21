const path = require('path');
const fs = require('fs');

const data = require("./data/data");

const fileContent = fs.readFileSync(path.join(__dirname, 'data', 'data.json'), 'utf8');
const jsonData = JSON.parse(fileContent);

console.log(jsonData);

let newTask = { id: '4', task: 'Ajoute serveur', done: false }
data.push(newTask)

fs.writeFile(path.join(__dirname, 'data', 'data.json'), JSON.stringify(data), (err) => {
        if (err) throw err;
    console.log('Write complete');
})


// fs.readFileSync(filePath, 'utf-8',(err, data) => {
//     if (err) throw error;
//     console.log(data);
// })
// process.on('uncaughtException', err => {
//     console.error(`There was an uncaught error:  ${err}`);
//     process.exit(1)
// })