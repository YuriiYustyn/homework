"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.divButton = exports.audios = void 0;
exports.elementReproduction = elementReproduction;
exports.generateBlocks = generateBlocks;
exports.randomColor = randomColor;
exports.replaceAll = replaceAll;
function randomColor() {
  var quantityColor = 16777216;
  return "#".concat(Math.floor(Math.random() * quantityColor).toString(16));
}
function generateBlocks() {
  var bigSquare = document.querySelector(".test");
  bigSquare.classList.add('bigSquare');
  bigSquare.innerHTML = '';
  for (var i = 0; i < 25; i++) {
    var square = document.createElement("div");
    square.classList.add('smallSquare');
    square.style.background = randomColor();
    bigSquare.append(square);
  }
}
var audios = document.querySelectorAll('audio');
exports.audios = audios;
var divButton = document.querySelectorAll('.el');
exports.divButton = divButton;
document.body.addEventListener("keydown", replaceAll);
function replaceAll(e) {
  var keyCodeEvent = e.keyCode;
  audios.forEach(function (el, ind) {
    if (el.id == keyCodeEvent) {
      elementReproduction(el, ind);
    }
  });
}
function elementReproduction(item, i) {
  item.currentTime = 0;
  item.play();
  divButton[i].classList.toggle("elDown");
  setTimeout(function () {
    return divButton[i].classList.toggle('elDown');
  }, 300);
}
divButton.forEach(function (el, ind) {
  el.addEventListener("click", function () {
    return elementReproduction(audios[ind], ind);
  });
});