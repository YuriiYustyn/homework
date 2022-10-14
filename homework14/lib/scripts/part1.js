"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPair = createPair;
exports.getAverage = getAverage;
exports.getSum = getSum;
exports.leadsDegree = leadsDegree;
exports.students = exports.studensGirl = exports.studensBoy = exports.pricePeaches = exports.priceCherries = exports.priceApples = exports.maxPrice = void 0;
var priceApples = 15.678;
exports.priceApples = priceApples;
var priceCherries = 123.965;
exports.priceCherries = priceCherries;
var pricePeaches = 90.2345;
exports.pricePeaches = pricePeaches;
var maxPrice = Math.max(priceApples, priceCherries, pricePeaches);
exports.maxPrice = maxPrice;
function getSum() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var skip = true;
  var sum = 0;
  for (var i = min; i <= max; i++) {
    if (skip && i % 2 === 0) {
      continue;
    }
    sum += i;
  }
  ;
  return sum;
}
function leadsDegree() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  var result = x;
  for (var i = 1; i < y; i++) {
    result *= x;
  }
  return result;
}
var students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
exports.students = students;
var studensBoy = ["Олександр", "Ігор", "Олексій"];
exports.studensBoy = studensBoy;
var studensGirl = ["Олена", "Іра", "Світлана"];
exports.studensGirl = studensGirl;
function createPair(arr) {
  var pair = [];
  for (var i = 0; i < arr.length; i++) {
    pair.push([studensBoy[i], studensGirl[i]]);
  }
  return pair;
}
function getAverage() {
  var average = 0;
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  numbers.forEach(function (el) {
    return Number.isInteger(el) && (average += el);
  });
  return +(average / numbers.length).toFixed(2);
}