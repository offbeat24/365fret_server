const express = require('express')
const cors = require("cors")
const routes = require("../routes/routes")
const morgan = require("morgan")
require('dotenv').config();

const app = express()
app.use(cors())
app.use(morgan('dev'))

app.use(express.json());  // JSON 형식 수신
app.use("/", routes);     // express router 미들웨어 사용

app.listen(process.env.PORT, () => {
  console.log("server opened on port " + process.env.PORT)
});
