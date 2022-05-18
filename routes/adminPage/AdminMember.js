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

exports.adminGetMembers = async (req, res) => {
    console.log("adminGetMembers router called"); // Log
    const query = `SELECT id, name
                    FROM  user_data
                    ORDER BY year asc`
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