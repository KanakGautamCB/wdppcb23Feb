const express = require('express');
const app = express();
const port = 4000;
const fs = require('fs/promises');

const path = require('path');
const publicPath = path.join(__dirname, 'public');


app.use(express.static(publicPath));
app.use(express.json()); // Middleware to parse JSON bodies



app.get('/tasks', (req, res) => {
    fs.readFile(path.join(__dirname, 'tasks.json'),{encoding: 'utf-8'})
        .then((data) => {
            const tasks = JSON.parse(data);
            res.send(tasks);
        })
        .catch((err) => {
            console.error('Error reading tasks:', err);
            res.status(500).send('Internal Server Error');
        });
})

app.post('/tasks', (req, res) => {
    const newTasks = req.body.tasks;
    console.log(req.body);
    fs.writeFile(path.join(__dirname, 'tasks.json'), JSON.stringify(newTasks))
        .then(() => {
            res.status(200).send('Tasks updated successfully');
        })
        .catch((err) => {
            console.error('Error writing tasks:', err);
            res.status(500).send('Internal Server Error');
        });
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


