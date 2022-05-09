const mysqlConnection = require("../../modules/mysql");
const connection = mysqlConnection.connection;

exports.adminFindMember = async (req, res) => {
    console.log("adminFindMember router called"); // Log
    const name = req.body.name;
    console.log(name);
    connection.query(`SELECT id FROM user_data WHERE name = ?`,
        [name],
        (err, response) => {
        if (err) console.log(err);
        console.log(response[0].id);
        if (response[0].id.length != 0) {
            res.send({ result: response[0].id });
            console.log(response[0].id);
        }
        else {
            res.send({ result: 'no member' });
        }
    })
}

