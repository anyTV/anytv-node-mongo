'use strict';

var mongo = require('mongoskin'),
    connections = {};

module.exports = function (config) {
    var connection,
        key = '',
        i;

    for (i in config) {
        key += config[i];
    }

    if (connections[key]) {
        return connections[key];
    }

    connection = mongo.db('mongodb://'
        + config.user + ':'
        + config.password + '@'
        + (config.host || '127.0.0.1') + ':'
        + (config.port || 27107) + '/'
        + config.database,
        {native_parser : true}
    );

    connections[key] = connection;

    return connection;
};
