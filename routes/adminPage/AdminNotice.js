const mysqlConnection = require("../../modules/mysql");
const connection = mysqlConnection.connection;

exports.adminGetNotices = async (req, res) => {
  console.log("adminGetNotices router called"); // Log
  const query = `SELECT n.post_key, n.title, n.detail, n.post_date, ud.year, ud.name
                  FROM  notice_board AS n
                  JOIN user_data AS ud
                  ON n.post_writter = ud.id
                  ORDER BY n.post_date desc`
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

exports.adminDeleteNotice = async (req, res) => {
  console.log("adminDeleteNotice router called"); // Log
  const key = req.body.key;
  console.log("post_key: " + key + " deleted");// Log

  connection.query(`DELETE FROM 365fret.notice_board WHERE post_key IN ?`,
    [key],
    (err) => {
    if (err) console.log(err);
    else res.send("True");
  })
}

exports.adminAddNotice = async (req, res) => {
  console.log("adminAddNotice router called"); // Log
  const [title, detail, writer] = req.body;
  console.log(writer);
  const postTime = yyyymmddhhmmss(new Date());

  connection.query(`INSERT INTO 365fret.notice_board(title, detail, post_date, post_writter) VALUE(?,?,?,?)`,
    [title, detail, postTime ,writer],
    (err) => {
    if (err) console.log(err);
    else res.send("True");
  })
}

const yyyymmddhhmmss = (d) => {
  var year = d.getFullYear();
  var month = ('0' + (d.getMonth() + 1)).slice(-2);
  var day = ('0' + d.getDate()).slice(-2);

  var dateString = year + '-' + month  + '-' + day;

  var hours = ('0' + d.getHours()).slice(-2); 
  var minutes = ('0' + d.getMinutes()).slice(-2);
  var seconds = ('0' + d.getSeconds()).slice(-2); 

  var timeString = hours + ':' + minutes  + ':' + seconds;

  return (dateString + ' ' + timeString);
}