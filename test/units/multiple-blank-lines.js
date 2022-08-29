'use strict';

var assert = require('assert');
var yaml   = require('../../');

it('load("")', function () {
  const resultEmptyString = yaml.load('');
  assert.strictEqual(resultEmptyString, undefined);
});

it('load("one line break")', function () {
  const resultSingleNewLine = yaml.load('\n');
  assert.strictEqual(resultSingleNewLine, undefined);
});

it('load("two line breaks")', function () {
  const resultDoubleNewLine = yaml.load('\n\n');
  assert.strictEqual(resultDoubleNewLine, undefined);
});
