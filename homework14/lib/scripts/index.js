"use strict";

require("../styles/styleHome10.css");
require("../styles/bg1.jpg");
require("../styles/styleHome9.css");
require("../styles/style.css");
var _part = require("./part1");
var _part2 = require("./part2");
var _part3 = require("./part3");
require("./audios/audioone.mp3");
require("./audios/audiotwo.mp3");
require("./audios/audiothree.mp3");
require("./audios/audiofour.mp3");
require("./audios/audiofive.mp3");
require("./audios/audioseex.mp3");
require("./audios/audioseven.mp3");
var _part4 = require("./part4");
(0, _part4.getRandomChinese)(10).then(function (res) {
  return console.log(res);
});
console.log(_part.maxPrice);
console.log((0, _part.getSum)());
console.log((0, _part.leadsDegree)());
console.log((0, _part.createPair)(_part.studensBoy));
console.log((0, _part.getAverage)(3, 2, 2, 4, 7, 6, 7));
console.log((0, _part2.getSubjects)(_part2.studentsObj[0]));
console.log(_part2.getMyTaxes.call(_part2.ukraine, 2000));
console.log(_part2.ostap.getInfo());
function foo(selector, verb) {
  document.querySelector(selector).innerHTML += verb;
}
foo('.home9', setInterval(_part3.generateBlocks, 5000));
document.body.addEventListener("keydown", _part3.replaceAll);
_part3.divButton.forEach(function (el, ind) {
  el.addEventListener("click", function () {
    return (0, _part3.elementReproduction)(_part3.audios[ind], ind);
  });
});
(0, _part4.getPlanets)();
_part4.up.addEventListener('click', function () {
  var question = document.querySelector('.h1');
  question.style.fontSize = "".concat(_part4.idGenerator.next("up").value, "px");
});
_part4.down.addEventListener('click', function () {
  var question = document.querySelector('.h1');
  question.style.fontSize = "".concat(_part4.idGenerator.next("down").value, "px");
});
var img = document.createElement('img');
img.setAttribute('src', Image);