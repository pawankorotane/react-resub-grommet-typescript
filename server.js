const express = require('express');

const app = express();

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

app.listen(4000, () => console.log('API is running on port 4000'));