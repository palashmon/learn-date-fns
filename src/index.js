const stringDateFormat = require('../src/1-Parse/StringDateFormat');
const stringTimeFormat = require('../src/1-Parse/StringTimeFormat');
const stringFormatLocale = require('../src/1-Parse/StringFormatLocale');
const addDays = require('../src/3-Manipulate/Add');
const subDays = require('../src/3-Manipulate/Subtract');
const startOfMonth = require('../src/3-Manipulate/StartofTime');
const endOfDay = require('../src/3-Manipulate/EndofTime');

console.log('\nString + Date Format');
console.log(stringDateFormat('12-25-1995'));
// => "1995-12-24T13:00:00.000Z"

console.log('\nString + Time Format');
console.log(stringTimeFormat('2010-10-20 4:30'));
// => "2010-10-19T17:30:00.000Z"

console.log('\nString + Format + locale');
console.log(stringFormatLocale('2012 mars')); // March 2012 in french
// => "2012-02-29T13:00:00.000Z"

console.log('\nAdd Days');
console.log(addDays(7));
// => "2018-09-24T13:00:00.000Z"

console.log('\nSubtract Days');
console.log(subDays(7));
// => "2018-09-10T13:00:00.000Z"

console.log('\nStart Of Month');
console.log(startOfMonth());
// => "2018-08-31T14:00:00.000Z"

console.log('\nEnd Of Day');
console.log(endOfDay());
// => "2018-09-17T13:59:59.999Z"

console.log('\n');
