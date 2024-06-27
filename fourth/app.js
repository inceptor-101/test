const _ = require('lodash');
const items= [4, [4, 5,[4,8,[9]]]]
const newItem = _.flattenDeep(items)
console.log(newItem)