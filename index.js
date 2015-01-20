var mongo     = require('mongoskin'),
    db_config = require(__dirname + '/../config/config').DB_MONGO;

module.exports = mongo.db('mongodb://'
        + db_config.host
        + ':'
        + db_config.port
        + '/'
        + db_config.name,
    {native_parser : true});
