var _ = require('lodash');
var users = [
    { 'user': 'barney', 'active': false },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': true }
];
var result = _.findIndex(users, function (o) { return o.user == 'fred'; });
console.log(result);
