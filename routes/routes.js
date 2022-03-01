const express = require("express");
const router = express.Router();

const event = require("./main/Event.js");


// 이벤트 관리
router.get("/getEvents", event.getEvents);
router.put("/addEvent", event.addEvent);


module.exports = router;
