const express = require('express')
const app = express();
const path = require('path');
require('./db/mongoose');
const route = require('./rourers/index.router');

const cors = require('cors')
require('dotenv').config()

const PORT = process.env.PORT;

app.use(express.json())
app.use(cors())
app.use('/api/', route);
app.use((req, res) => {
    res.status(404).send('Error: Something went wrong... try again')
})

app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log('listening to port ' + PORT)
})