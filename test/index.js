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
  t.plan(1);

  consoleLogs = [];
  process.env.HINT = '*';

  hinton('one', 'this is a test');

  t.deepEqual(consoleLogs[0], [
    '\x1B[38;5;160mone\x1B[39m',
    '\x1B[38;5;245m./test/index.js:28\x1B[39m',
    'this is a test'
  ]);
});
