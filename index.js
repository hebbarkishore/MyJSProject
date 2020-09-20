console.log('my name is ksh');
const {performance} = require('perf_hooks');
//var module = require('ES6')

//console.log('milliseconds:'+t1)
const largeARr = new Array(100).fill('nemo');
function justCheck(array) {
  let t1 = performance.now();
  array.forEach( s => console.log('value:'+s));
}

justCheck(largeARr);//Adding the changes