declare function require(s: string);
const _ = require('lodash');

const users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

const result = _.findIndex(users, o => o.user == 'fred');

console.log(result);
