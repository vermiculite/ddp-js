var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.use(sinonChai);

global.chai = chai;
global.expect = expect;
global.sinon = sinon;
global.sinonChai = sinonChai;