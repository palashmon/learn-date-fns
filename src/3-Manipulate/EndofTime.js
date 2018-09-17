/**
 * Return the end of a unit of time for the given date.
 */
const endOfDay = require('date-fns/endOfDay');
module.exports = function() {
  return endOfDay(new Date());
};
