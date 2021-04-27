const express = require("express")
const router = express.Router()

router
    .get("/", async (req, res) => {
        try {
            res.send('fadsfsd')
        } catch (e) {
            res.status(400).send(e.message)
        }
    })

module.exports = router;