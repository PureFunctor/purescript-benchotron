/* global exports */
/* global require */
"use strict";

export var benchmarkJS = require('benchmark');

export function monkeyPatchBenchmark(b) {
  return function () {
    b.support.decompilation = false;
  };
}

export function runBenchmarkImpl(Benchmark) {
  return function (fn) {
    return function () {
      var b = new Benchmark(fn);
      b.run();
      if (typeof b.error !== 'undefined') {
         throw b.error;
      }
      return b.stats;
    };
  };
}
