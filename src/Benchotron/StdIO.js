/* global exports */
/* global process */
"use strict";

export function stdoutWrite(str) {
  return function () {
    process.stdout.write(str);
  };
}

export function stderrWrite(str) {
  return function () {
    process.stderr.write(str);
  };
}

export function closeInterface(i) {
  return function() {
    i.close();
  };
}
