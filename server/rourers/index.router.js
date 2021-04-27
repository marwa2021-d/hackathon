const express = require("express")
const router = express.Router()
const dataObj = require('../models/dataObj.model')

router
    .get("/", async (req, res) => {
        try {
            res.send('fetch is work')
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