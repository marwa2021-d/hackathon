const mongoose = require('mongoose');

//↓↓↓↓↓↓ Get address from meir and insert ↓↓↓↓↓↓
mongoose.connect('mongodb://127.0.0.1:27017/authentication',
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })

