const express = require("express")
const router = express.Router()
const dataObj = require('../models/dataObj.model')


// get all translated


// get all nun translated

// delete by id

router
    // post - add new url
    .post('/articles', async (req, res) => {

        const article = new dataObj({
            originalData: req.body, translatedData: [{
                isTranslated: false,
                lang: 'he',
                rawData: {
                    title: '',
                    content: ''
                }
            },
            {
                isTranslated: false,
                lang: 'ar',
                rawData: {
                    title: '',
                    content: ''
                }
            },
            ]
        })
        try {
            await article.save()
            res.status(201).send(article)
        } catch (e) {
            console.log(e)
            console.log(e.message)
            res.status(400).send(e)
        }

    })
    // get specific article
    .get("/", async (req, res) => {
        const test = new dataObj({
            originalData: {
                link: "https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector",
                lang: "en",
                rawData: {
                    title: "Document.querySelector()",
                    content: "The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned."
                },
            },
            translatedData: [{
                isTranslated: false,
                lang: 'he',
                rawData: {
                    title: '',
                    content: ''
                }
            },
            {
                isTranslated: false,
                lang: 'ar',
                rawData: {
                    title: '',
                    content: ''
                }
            },
            ]
        })
        try {
            res.send(test)

        } catch (e) {
            res.status(400).send(e.message)
        }
    })
    .post('', async (req, res) => {
        try {
            let data = new dataObj(req.body)
            await data.save()
            res.send(req.body)
        } catch (e) {
            res.status(400).send(e.message)
        }
    })




module.exports = router;