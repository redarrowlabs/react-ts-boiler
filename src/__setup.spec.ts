/// <reference path="../node_modules/@types/mocha/index.d.ts" />
// ^ Mocha can't find it's own references for some reason.

//Enable should syntax -- myvar.should.be.true;
import chai = require('chai');
chai.should();
