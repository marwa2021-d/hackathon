const mongoose = require('mongoose');
const validator = require('validator');
const scrape = require('../scrape.v2')


const rawDataSchema = new mongoose.Schema({
    title: {
        type: String,
        // required: true,
    },
    content: {
        type: String,
        // required: true,
    },
})

const originalDataSchema = new mongoose.Schema({
    link: {
        unique: true,
        type: String,
        required: true,
    },
    lang: {
        type: String,
        required: true,
    },
    rawData: {
        type: rawDataSchema,
        // required: true,
    }
})
const translatedDataSchema = new mongoose.Schema({
    lang: {
        type: String,
        required: true,
    },
    isTranslated: {
        type: Boolean,
        default: false
    },
    rawData: {
        type: rawDataSchema,
        required: true,
    }
})


const pageSchema = new mongoose.Schema({
    originalData: {
        type: originalDataSchema,
        required: true,
    },
    translatedData: [{
        type: translatedDataSchema,
        // required: true,
    }],
})

pageSchema.pre('save', async function (next) {
    const data = this;
    console.log(222222)
    if (data.isModified('originalData')) {
        const data2 = await scrape(data.originalData.link)
        data.originalData.rawData.title = data2.title;
        data.originalData.rawData.content = data2.description;
    }
    // console.log(data)
    next()
})

const DataObj = mongoose.model('DataObj', pageSchema)

module.exports = DataObj;
