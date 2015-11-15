'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoskin = require('mongoskin');

var _mongoskin2 = _interopRequireDefault(_mongoskin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A simple class that stores connections and returns connection on open
 */

var CustomMongo = (function () {
    function CustomMongo() {
        _classCallCheck(this, CustomMongo);

        this.connections = {};
        this.helper = _mongoskin2.default.helper;
    }

    /**
     * opens a mongo connection
     * @param {object} config mongo database credentials
     */

    _createClass(CustomMongo, [{
        key: 'open',
        value: function open(config) {
            var connection = undefined;
            var credentials = undefined;
            var key = '';

            for (var i in config) {
                key += config[i];
            }

            if (this.connections[key]) {
                return this.connections[key];
            }

            credentials = (config.user || '') + (config.user && config.password ? ':' + config.password : '');

            connection = _mongoskin2.default.db('mongodb://' + (credentials ? credentials + '@' : '') + (config.host || '127.0.0.1') + ':' + (config.port || 27017) + '/' + config.database, { native_parser: true });

            this.connections[key] = connection;

            return connection;
        }
    }]);

    return CustomMongo;
})();

exports.default = CustomMongo;
;