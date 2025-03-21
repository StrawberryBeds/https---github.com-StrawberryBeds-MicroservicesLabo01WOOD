const dayjs = require('dayjs');
// const { v4: uuid } = require('uuid');

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
        console.log(err);
    }
}

module.exports = logEvents;