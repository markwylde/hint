const stripAnsi = require('strip-ansi');

const test = require('tape');

const hinton = require('../');

let consoleLogs = [];
function logSpy (...args) {
  consoleLogs.push(args);
  console.log(...args);
}
hinton.setLogger(logSpy);

test('nothing output when no environment variable provided', t => {
  t.plan(1);

  consoleLogs = [];

  hinton('one', 'this is a test');

  t.deepEqual(consoleLogs.length, 0);
});

test('works', t => {
  t.plan(3);

  consoleLogs = [];
  process.env.HINT = '*';

  hinton('one', 'this is a test');

  t.equal(stripAnsi(consoleLogs[0][0]), 'one')
  t.equal(stripAnsi(consoleLogs[0][1]), './test/index.js:30')
  t.equal(stripAnsi(consoleLogs[0][2]), 'this is a test')

});
