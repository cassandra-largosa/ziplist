/**
 * ziplist for E27
 * Created by Cassandra Largosa on 2/6/2017.
 */

const test1 = [1, 2, 3];
const test2 = ['a', 'b', 'c'];

function zipList(list1, list2) {
  const zip = [];
  for (let i = 0; i < list1.length; i += 1) {
    zip.push(list1[i], list2[i]);
  }
  return zip;
}

console.log(zipList(test1, test2));

function zipListTheSimpleWay(list1, list2) { // aka underscore
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(test1, test2));
