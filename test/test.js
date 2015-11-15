'use strict';

const should = require('chai').should();
const CustomMongo = require(process.cwd() + '/lib/CustomMongo').default;
const FREE_DB = {
    host: 'localhost:27017',
    user: 'root',
    password: '',
    database: 'test'
};


describe('Overall test', () => {

    it ('mongo.open should return a connection', (done) => {
        const mongo = new CustomMongo();
        mongo.open(FREE_DB).collection.should.exist;

        done();
    });

    it ('mongo.open should re-use connections', (done) => {
        const mongo = new CustomMongo();
        const connection = mongo.open(FREE_DB);
        mongo.open(FREE_DB).should.be.equal(connection);

        done();
    });

});
