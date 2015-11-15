'use strict';

import mongo from 'mongoskin';

/**
 * A simple class that stores connections and returns connection on open
 */
export default class CustomMongo {

    constructor () {
        this.connections = {};
        this.helper = mongo.helper;
    }

    /**
     * opens a mongo connection
     * @param {object} config mongo database credentials
     */
    open (config) {
        let connection;
        let credentials;
        let key = '';

        for (let i in config) {
            key += config[i];
        }

        if (this.connections[key]) {
            return this.connections[key];
        }

        credentials = (config.user || '')
            + ((config.user && config.password)
                    ? (':' + config.password)
                    : '');

        connection = mongo.db('mongodb://'
            + (credentials ? (credentials + '@') : '')
            + (config.host || '127.0.0.1') + ':'
            + (config.port || 27017) + '/'
            + config.database,
            {native_parser : true}
        );

        this.connections[key] = connection;

        return connection;
    }
};
