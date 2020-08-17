const express = require('express')
const router = express.Router();

const { sentMail } = require("../controllers/sendGrid")

router.post('/emailForm', sentMail)




module.exports = router