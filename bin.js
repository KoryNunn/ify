#!/usr/bin/env node

var ify = require('./'),
    args = Array.prototype.slice.call(process.argv, 2);

process.stdout.write(ify.apply(null, args) + '\n');