const days = require('./src/days');

const [, , day] = process.argv;

if (day && Number(day)) {
  days[Number(day)]();
} else {
  days.forEach((d) => d());
}
