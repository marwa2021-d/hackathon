const express = require('express')
const app = express();
require('./db/mongoose');
const route = require('./routers/index.router');

const PORT = process.env.PORT || 8000;

app.use(express.json())

app.use('/api/', route);

app.listen(PORT, () => {
    console.log('listening to port ' + PORT)
})