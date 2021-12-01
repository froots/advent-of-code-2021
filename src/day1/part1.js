const hasIncreased = require('./has-increased');

module.exports = (depths) => depths.filter(hasIncreased).length;
