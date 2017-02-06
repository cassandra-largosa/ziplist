/**
 * Combines two lists of equal length in alternating order
 * Created by Cassandra Largosa on 2/6/2017.
 */

const testA = [1, 2, 3];
const testB = ['a', 'b', 'c'];

function zipList(a, b) {
  let list = [];
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      list.push(a[i]);
      list.push(b[i]);
    }
    return list
  }
  return 'Cannot zip lists of different lengths'
}

console.log(zipList(testA, testB));

function zipListTheSimpleWay(a, b) {
  return _.union(_.flatten(_.zip(a, b)));
}

console.log(zipListTheSimpleWay(testA, testB));
