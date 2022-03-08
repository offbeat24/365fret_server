const mysqlConnection = require("../../modules/mysql");
const connection = mysqlConnection.connection;

exports.getNotices = async (req, res) => {
  console.log("getNotices router called"); // Log
  const query = `SELECT n.title, n.detail, n.post_date, ud.year, ud.name
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
