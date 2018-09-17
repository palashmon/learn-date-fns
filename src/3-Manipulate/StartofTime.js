/**
 * Return the start of a unit of time for the given date.
 */
const startOfMonth = require('date-fns/startOfMonth');
module.exports = function() {
  return startOfMonth(new Date());
};
