const express = require("express")
const app = express()

const morgan = require("morgan")
const routes = require("./routes")

app.use(morgan("tiny"))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api", routes)

app.listen(8080, () => console.log("Listening in port 8080"))