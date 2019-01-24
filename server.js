const express = require('express');

const app = express();

const now = Date.now().valueOf();
const todos = [];
let i = 0
while(i < 5){
    todos.push({
        id: now.toString(),
        creationTime: now,
        text: `Test ${i}`,
    })
    i++;
}

app.get('/api/todos', (req, res) => {
    res.json({todos});
});

app.listen(4000);