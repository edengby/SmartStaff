const mysql = require('mysql');
const config  = require('../config');

//todo install mysql, create db, create user, grant access, create table
var pool = mysql.createPool(config.db);

// connect to database
pool.getConnection(function (err) {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

exports.getUser = function(username, callback) {
    var sqlQuery = 'SELECT * FROM staff WHERE name= ?';

    pool.getConnection(function(err, connection) {
        if(err) {
            console.log(err);
            callback(true);
            return;
        }
        connection.query(sqlQuery, [username], function(err, results) {
                connection.release();
                if(err) {
                    console.log(err);
                    callback(true);
                    return;
                };
                callback(false, results);
            }
        );
    });
};

exports.getStaff = function(callback) {
    var sqlQuery = 'SELECT * FROM staff';
    pool.getConnection(function(err, connection) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            connection.query(sqlQuery, [], function (err, results) {
                    connection.release();
                    if(err) {
                        console.log(err);
                        callback(true);
                        return;
                    };
                    callback(false, results);
                }
            );
        }
    );
};

exports.updateStatus = function(newStatus, id, callback) {
    var sqlQuery = 'UPDATE staff SET status=? WHERE id=?';
    pool.getConnection(function(err, connection) {

        if(err) {
                console.log(err);
                callback(true);
                return;
            }

        connection.query(sqlQuery, [newStatus, id], function (err, results) {
                    connection.release();
                    if(err) {
                        console.log(err);
                        callback(true);
                        return;
                    };
                    callback(false, results);
                }
            );
        }
    );
};