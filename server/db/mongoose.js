const mongoose = require('mongoose');

//↓↓↓↓↓↓ Get address from meir and insert ↓↓↓↓↓↓
// mongoose.connect('mongodb://127.0.0.1:27017/hackaton-appleseeds',
mongoose.connect('mongodb://myUserAdmin:abc789@18.197.28.167:27017/',
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })

