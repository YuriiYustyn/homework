let numberMin;
do { numberMin = +prompt('Введіть ціле число N, від якого рахуватиметься сума чисел'); }
while (!Number.isInteger(numberMin));

let numberMax;
do { numberMax = +prompt('Введіть ціле число M, до якого слід рахувати суму чисел'); }
while (!Number.isInteger(numberMax) || numberMin > numberMax);

const skip = confirm('Пропускати парні числа?');

let sum = 0;


for (let i = numberMin; i <= numberMax; i++) {
   if (skip && i % 2 === 0) {
      continue
   }
   sum += i;
};

let divMin = document.createElement("div")
divMin.innerHTML = `<p> мінімальне число  ${numberMin}</p>`
document.body.appendChild(divMin)
divMin.className = "topFi";

let divMax = document.createElement("div")
divMax.innerHTML = `<p> максимальне число ${numberMax}</p>`
document.body.appendChild(divMax)
divMax.className = "topFi";

let div = document.createElement("div")
div.innerHTML = `<p> сума чисел  ${sum}</p>`
document.body.appendChild(div)
div.className = "topFi";












