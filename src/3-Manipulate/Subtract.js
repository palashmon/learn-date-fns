/**
 * Subtract the specified number of days from the given date.
 */
const subDays = require('date-fns/subDays');
module.exports = function(days) {
  return subDays(new Date(), days);
};
