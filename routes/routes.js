const express = require("express");
const router = express.Router();

const event = require("./main/Event.js");
const notice = require("./main/Notice.js");


// 이벤트 관리
router.get("/getEvents", event.getEvents);
router.put("/addEvent", event.addEvent);
router.post("/deleteEvent", event.deleteEvent);

// 공지 관리
router.get("/getNotices", notice.getNotices);


module.exports = router;
