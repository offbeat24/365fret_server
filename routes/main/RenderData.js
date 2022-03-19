const { response } = require('express');
const mysqlConnection = require("../../modules/mysql");
const connection = mysqlConnection.connection;
const today = new Date();
var year = today.getFullYear();
var month = ('0' + (today.getMonth() + 1)).slice(-2);
var day = ('0' + today.getDate()).slice(-2);
const dateString = year + '-' + month  + '-' + day;

exports.getUserEvents = async (req, res) => {
    console.log("getUserEvents router called"); // Log
    const userID = req.body.userID;
    console.log("userID: " + userID);

    connection.query(
        `SELECT * FROM 365fret.event WHERE event_key in (SELECT fk_event_key FROM 365fret.event_member WHERE fk_user_id=?) ORDER BY eventdate asc`,
        [userID]
        , (err, response) => {
            if (err) console.log(err);
            else res.send(response);
    })
}
exports.getUserComingEvents = async (req, res) => {
    console.log("getUserComingEvents router called"); // Log
    const userID = req.body.userID;
    console.log("userID: " + userID);
    connection.query(
        `SELECT * FROM 365fret.event WHERE event_key in (SELECT fk_event_key FROM 365fret.event_member WHERE fk_user_id=?) AND eventdate >= ? ORDER BY eventdate asc`,
        [userID, dateString]
        , (err, response) => {
            if (err) console.log(err);
            else res.send(response);
    })
}

exports.getUserPassedEvents = async (req, res) => {
    console.log("getUserPassedEvents router called"); // Log
    const userID = req.body.userID;
    console.log("userID: " + userID);

    connection.query(
        `SELECT * FROM 365fret.event WHERE event_key in (SELECT fk_event_key FROM 365fret.event_member WHERE fk_user_id=?) AND eventdate < ? AND type < 3 ORDER BY eventdate asc`,
        [userID, dateString]
        , (err, response) => {
            if (err) console.log(err);
            else res.send(response);
    })
}

exports.getUserProfile = async (req, res) => {
    console.log("getUserProfile router called");
    const userID = req.body.userID;
    console.log("userID: " +userID);

    connection.query(
        `SELECT * FROM 365fret.user_data WHERE id = ?`,
        [userID]
        , (err, response) => {
            if (err) console.log(err);
            else res.send(response);
    })
}