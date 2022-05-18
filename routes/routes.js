const express = require("express");
const router = express.Router();
const event = require("./main/Event.js");
const renderData = require("./main/RenderData.js");
const notice = require("./main/Notice.js");

const adminEvent = require("./adminPage/AdminEvent.js");
const adminMember = require("./adminPage/AdminMember.js");
const adminNotice = require("./adminPage/AdminNotice.js");
// const adminReport = require("./admin_page/AdminReport.js");
// const adminSchedule = require("./admin_page/AdminSchedule.js");


// 이벤트 관리
router.get("/getEvents", event.getEvents);
router.put("/addEvent", event.addEvent);
router.post("/deleteEvent", event.deleteEvent);

// 렌더용 데이터 관리
router.post("/getUserEvents", renderData.getUserEvents);
router.post("/getUserComingEvents", renderData.getUserComingEvents);
router.post("/getUserPassedEvents", renderData.getUserPassedEvents);
router.post("/getUserProfile", renderData.getUserProfile);
// 공지 관리
router.get("/getNotices", notice.getNotices);

//adminPage

//어드민 페이지 이벤트 관리
router.get("/adminGetEvents", adminEvent.adminGetEvents);
router.put("/adminAddEvent", adminEvent.adminAddEvent);
router.post("/adminDeleteEvent", adminEvent.adminDeleteEvent);

//어드민 페이지 공지 관리
router.get("/adminGetNotices", adminNotice.adminGetNotices);
router.post("/adminDeleteNotice", adminNotice.adminDeleteNotice);
router.put("/adminAddNotice", adminNotice.adminAddNotice);

//어드민 페이지 멤버 관리
router.post("/adminFindMember", adminMember.adminFindMember);
router.get("/adminGetMembers", adminMember.adminGetMembers);
module.exports = router;
