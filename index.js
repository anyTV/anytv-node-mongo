'use strict';

var mongo = require('mongoskin');

module.exports = {
    connections : {},

    open : function (config) {
        var connection,
            credentials = '',
            key = '',
            i;

        for (i in config) {
            key += config[i];
        }

        if (this.connections[key]) {
            return this.connections[key];
        }

        credentials = (config.user || '')
            + ((config.user && config.password) ?
                    (':' + config.password) : '');

        connection = mongo.db('mongodb://'
            + ((credentials) ? (credentials + '@') : '')
            + (config.host || '127.0.0.1') + ':'
            + (config.port || 27017) + '/'
            + config.database,
            {native_parser : true}
        );

        this.connections[key] = connection;

        return connection;
    }
};
