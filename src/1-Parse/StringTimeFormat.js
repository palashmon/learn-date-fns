/**
 * Return the date parsed from time string using the given format string.
 */
const parse = require('date-fns/parse');
module.exports = function(datetimeString) {
  return parse(datetimeString, 'yyyy-MM-dd H:mm', new Date());
};
