const express = require("express")
const router = express.Router()

const sendMailController = require("../controllers/sendMailController")

router.post("/send-mail", sendMailController.send)

module.exports = router