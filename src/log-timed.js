/* eslint-disable no-console */
module.exports = function logTimed(prefix, cb) {
  const hrstart = process.hrtime();
  const result = cb();
  const hrend = process.hrtime(hrstart);

  console.info(
    `${prefix}: Result: ${result} - in ${hrend[0]}s ${hrend[1] / 1000000}ms`
  );
};
