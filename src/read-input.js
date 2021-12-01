const fs = require('fs');

module.exports = function readInput(num, cb) {
  const filePath = `./src/day${num}/input.txt`;
  fs.readFile(filePath, (err, data) => {
    if (err) {
      throw new Error("Couldn't read file", err);
    }
    return cb(data.toString());
  });
};
