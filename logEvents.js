const dayjs = require('dayjs');

const fs = require('fs');
const fsPromises = require('fs').promises;

const path = require('path');

const logEvents = async(message) => {
    const dateTime = dayjs().format("YYYY-MM-DD HH:mm:ss");
    const logItem = `${dateTime}\t${message}\n`;
    console.log(logItem);
    try {
        await fsPromises.appendFile(path.join(__dirname, 'config','eventLog.txt'), logItem);
    } catch (err) {
        console.err(err);
    }
}

module.exports = logEvents('Hello from logEvents!');


// console.log(format(new Date(), 'yyyyMMdd\tHH:mm:SS'))
// console.log(uuid())