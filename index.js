var mongo     = require('mongoskin'),
    db_config;

module.exports = function(_db_config) {
    db_config = _db_config;
    
    return mongo.db('mongodb://'
            + db_config.host
            + ':'
            + db_config.port
            + '/'
            + db_config.name,
        {native_parser : true}
    );
};
