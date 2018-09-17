/**
 * Return the date parsed from date string using the given format string.
 */
const parse = require('date-fns/parse');
module.exports = function(dateString) {
  return parse(dateString, 'MM-dd-yyyy', new Date());
};
