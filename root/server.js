const express = require('express')
const cors = require("cors")
const routes = require("../routes/routes")
const PORT = 3000

const app = express()
app.use(cors())

app.use(express.json());  // JSON 형식 수신
app.use("/", routes);     // express router 미들웨어 사용

app.listen(PORT, () => {
  console.log("server opened on port " + PORT)
});
