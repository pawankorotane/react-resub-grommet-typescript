import path from 'path'
import fs from 'fs'

import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import { App }  from '../src/App'

const PORT = 8080
const app = express()

app.use(express.static('./build'));

app.get('/', (req, res) => {
  const app = ReactDOMServer.renderToString(<App />);

  const indexFile = path.resolve('./build/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

const now = Date.now().valueOf();
const todos = [];
let i = 0
while(i < 5){
    todos.push({
        id: i,
        creationTime: now,
        text: `Task ${i}`,
        status: false
    })
    i++;
}

app.get('/api/todos', (req, res) => {
    res.json({todos});
});

app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`)
})