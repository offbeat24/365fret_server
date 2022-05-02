const mysqlConnection = require("../../modules/mysql");
const connection = mysqlConnection.connection;

exports.adminFindMember = async (req, res) => {
    console.log("adminFindMember router called"); // Log
    const name = req.body.name;

    connection.query(`SELECT id FROM user_data WHERE name = '?'`,
        [name],
        (err, response) => {
        if (err) console.log(err);
        if (response.length != 0) {
            res.send({ result: response });
        }
        else {
            res.send({ result: 'no member' });
        }
    })
}

