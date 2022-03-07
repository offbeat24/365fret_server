const mysqlConnection = require("../../modules/mysql");
const connection = mysqlConnection.connection;

exports.getEvents = async (req, res) => {
  console.log("getEvents router called"); // Log
  const query = `SELECT * FROM 365fret.event`
  connection.query(query, (err, response) => {
    if (err) console.log(err);

    if (response.length != 0) {
      res.send({ result: response });
    }
    else {
      res.send({ result: 'no item' });
    }
  })
}

exports.addEvent = async (req, res) => {
  console.log("addEvents router called"); // Log
  const [type, name, startdate, enddate, eventdate, eventplace] = req.body;

  connection.query(`INSERT INTO 365fret.event(type, name, startdate, enddate, eventdate, eventplace) VALUE(?,?,?,?,?,?)`,
    [type, name, startdate, enddate, eventdate, eventplace],
    (err) => {
    if (err) console.log(err);
    else res.send("True");
  })
}

exports.deleteEvent = async (req, res) => {
  console.log("deleteEvents router called"); // Log
  const key = req.body.key;
  console.log("key: " + key)  // Log

  connection.query(`DELETE FROM 365fret.event WHERE event_key = ?`,
    [key],
    (err) => {
    if (err) console.log(err);
    else res.send("True");
  })
}

