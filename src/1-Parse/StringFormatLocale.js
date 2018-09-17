/**
 * Return the date parsed from string using the given format string and locale.
 */
const parse = require('date-fns/parse');
const fr = require('date-fns/locale/fr');

module.exports = function(dateLocaleString) {
  return parse(dateLocaleString, 'yyyy MMMM', new Date(), { locale: fr });
};
