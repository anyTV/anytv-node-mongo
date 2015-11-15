# anytv-node-mongo

[![Build Status](https://travis-ci.org/anyTV/anytv-node-mongo.svg?branch=master)](https://travis-ci.org/anyTV/anytv-node-mongo)
[![Coverage Status](https://coveralls.io/repos/anyTV/anytv-node-mongo/badge.svg?branch=master&service=github&t)](https://coveralls.io/github/anyTV/anytv-node-mongo?branch=master)
[![Documentation](https://doc.esdoc.org/github.com/anyTV/anytv-node-mongo/badge.svg?branch=master&service=github)](https://doc.esdoc.org/github.com/anyTV/anytv-node-mongo?branch=master)
[![Dependencies](https://david-dm.org/anyTV/anytv-node-mongo.svg)](https://david-dm.org/anyTV/anytv-node-mongo)
[![npm version](https://badge.fury.io/js/anytv-node-mongo.svg)](https://badge.fury.io/js/anytv-node-mongo)

Our version of mongoskin that makes connecting to mongo simpler. Especially made for our awesome expressjs [boilerplate](https://github.com/anyTV/anytv-node-boilerplate).


This module uses the popular [mongoskin](https://github.com/kissjs/node-mongoskin).

# Install

```sh
npm install anytv-node-mongo --save
```

# Features

* Simpler connection with `mongo.open(config)`


# Usage

### Opening a connection
On your index.js / server.js / app.js, register your database using a key.
```javascript
import mongo from 'anytv-node-mongo';

const config = {
	host: 'localhost',
	user: 'root',
	password: '',
	database: test
};

mongo.open(config)
	.collection('users')
	.findOne({_id: 'SOMEID'}, callback);
```

# Documentation

Code documentation can be found [here](https://doc.esdoc.org/github.com/anyTV/anytv-node-mongo/).


# Contributing

Install the tools needed:
```sh
npm install babel -g
npm install esdoc -g
npm install mocha -g
npm install --dev
```

To compile the ES6 source code to ES5:
```sh
babel src --watch --out-dir lib
```

To generate the docs:
```sh
npm run docs
```

# Running test

```sh
npm test
```

# Code coverage

```sh
npm run coverage
```
Then open coverage/lcov-report/index.html.

# License

MIT


# Author
[Freedom! Labs, any.TV Limited DBA Freedom!](https://www.freedom.tm)
