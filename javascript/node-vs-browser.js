console.time('timer');
for (var i = 0; i < 10000000; i++) {
  var a = i;
}
console.timeEnd('timer');

/*

Will anything different happen betweeen running this in Node vs the browser?

*/
