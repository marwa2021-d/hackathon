const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
})

const DataObj = mongoose.model('DataObj', userSchema)

module.exports = DataObj;
