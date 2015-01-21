var mongo = require('mongoskin'),

    cached_config,

    mongo_wrapper = function(config) {
        cached_config = config || cached_config;

        return mongo.db('mongodb://'
                + cached_config.host
                + ':'
                + cached_config.port
                + '/'
                + cached_config.name,
            {native_parser : true}
        );
    };


module.exports = mongo_wrapper;
