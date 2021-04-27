const express = require("express")
const router = express.Router()
const dataObj = require('../models/dataObj.model')

const data = {
    originalData: {
        link: "https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector",
        lang: "english",
        rawData: {
            title: "Document.querySelector()",
            content: "The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned."
        },
    },
    translatedData: {
        isTranslated: true,
        lang: "hebrew",
        rawData: {
            title: "יקשדכחשגד",
            content: `חנדגשלכחדנגשכלחגנשדלהחמדשלה 
            שדלחהמשדהל חמש
            ש,דחמדלףחהמ`
        },
    }
}


router
    .get("/", async (req, res) => {
        try {
            const ans = JSON.stringify(data)
            res.send(ans)
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