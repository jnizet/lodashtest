import _ from 'lodash';

const users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

const result = _.findIndex(users, (o: any) => o.user == 'fred');
console.log(result);

let arr = _.fill(Array(3), 2);

console.log(arr);

arr = _.initial(arr);
console.log(arr);
