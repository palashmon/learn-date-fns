/**
 * Add the specified number of days to the given date.
 */
const addDays = require('date-fns/addDays');
module.exports = function(days) {
  return addDays(new Date(), days);
};
