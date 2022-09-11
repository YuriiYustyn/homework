//повертає масив випадкових чисел
function getRandomArray(length, min, max) {
   let randomArr = [];
   do {
      let randomNumber = Math.floor((Math.random() * (max - min + 1)) + min)
      randomArr.push(randomNumber)
   }
   while (randomArr.length !== length)
   return randomArr
}
console.log(getRandomArray(10, 39, 99));

//рахує середнє арифметичне
function getAverage(...numbers) {
   let average = 0;
   numbers.forEach(el => Number.isInteger(el) && (average += el))
   return +(average / numbers.length).toFixed(2)
}
console.log(getAverage(3, 2, 2, 4, 7, 6, 7));

// рахує медіану всіх переданих в неї аргументів
function getMedian(...numbers) {
   let filterNumber = numbers.filter(Number.isInteger)
   let finishSort = filterNumber.sort((a, b) => a - b)
   if (finishSort.length % 2) {
      let middleIndexOfArray = (finishSort.length - 1) / 2
      return finishSort[middleIndexOfArray]
   } else {
      let indexAverage = (finishSort.length / 2)
      let frontIndexAverage = (finishSort.length / 2 - 1)
      let firstNumer = finishSort[indexAverage]
      let secondNumber = finishSort[frontIndexAverage]
      return (firstNumer + secondNumber) / 2
   }
}
console.log(getMedian(3, 2, 2, 4, 7, 6, 7));

// фільтрує парні числа передані як аргументи функції
const filterEvenNumbers = (...num) => num.filter(el => el % 2 !== 0)
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));

// порахує кількість чисел більших 0
const countPositiveNumbers = (...numbers) => numbers.filter(el => el > 0).length
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 3, 9, 9, 11, 6));

// залишить тільки ті, які діляться на ціло на 5
const getDividedByFive = (...numbers) => numbers.filter(el => el % 5 == 0)
console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

//вираховує моду всіх переданих в неї аргументів.
function getModa(...plural) {
   function countsRepetitions(numbers) {// створить масив масивів, де підмасиви це всі повторення елемента
      let result = []
      function getFilterIndex(ind) {// створить масив з всіма знайденими ел, такими ж як ind
         let arrayRepetitions = numbers.filter((el) => el === ind)
         return arrayRepetitions
      }
      for (let i = 0; i < numbers.length; i++) {
         let index = numbers[i];
         result.push(getFilterIndex(index))
      }
      return result
   }
   let arrayOfRepeated = countsRepetitions(plural)

   function convertRepeatInArray(arr) {// створить масив з довжин підмасивів
      let arrForLenght = []            //(ел цього масиву це буквально кількість повторень кожного ел plural)
      for (let i = 0; i < arr.length; i++) {
         arrForLenght.push(arr[i].length)
      }
      return arrForLenght
   }
   const largestLength = convertRepeatInArray(arrayOfRepeated)

   function getMaxLength(list) {// визначить елемент який найбільше повторювався
      let maxForArr = Math.max(...list)
      let indexModa = largestLength.indexOf(maxForArr)// виведе індекс під яким мода в "pluralі"
      return plural[indexModa]
   }
   let moda = getMaxLength(largestLength)
   return moda
}
console.log(getModa(6, 55, 6, 55, 13, 6, 78, 2, 55, 7, 55, 87, 55, 2, 56, 3, 4, 2));

// розбиває кожне слово на умовні склади по 3 букви
const divideByThree = (word) => {
   let wordArr = word.toLowerCase().split('').filter(char => char !== " ");
   const divider = 3;
   let wordDivArr = [];
   while (wordArr.length >= divider) {
      let smallArr = [];
      for (let i = 0; i < divider; i++) {
         smallArr.push(wordArr.shift());
      }
      wordDivArr.push(smallArr.join(''));
   }
   if (wordArr.length > 0) {
      wordDivArr.push(wordArr.join(''));
   }
   return wordDivArr;
};
console.log(divideByThree('comander'))






