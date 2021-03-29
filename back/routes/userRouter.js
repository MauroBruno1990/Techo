const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController")

router.post("/", userController.create)
router.put("/:id", userController.update)


module.exports = router