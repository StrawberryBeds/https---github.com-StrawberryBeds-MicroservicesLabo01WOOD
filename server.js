// Importer le module http
const http = require('http');

const logEvents = require("./logEvents");
const EventEmitter = require('events');

class MyEmitter extends EventEmitter { };
const myEmitter = new MyEmitter();

myEmitter.on('log', (message) => logEvents(message));
myEmitter.emit('log', 'Log event emitted');

// Créer un serveur HTTP
const server = http.createServer((req, res) => {
  // Définir le type de contenu de la réponse
  res.setHeader('Content-Type', 'text/plain');

  // Écrire la réponse
  res.statusCode = 200;
  res.end('Bonjour, ceci est un serveur HTTP!');
});

// Définir le port et l'adresse où le serveur écoute
const port = 3000;
server.listen(port, () => {
  console.log(`Serveur en écoute sur http://localhost:${port}`);
});