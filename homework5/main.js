//повертає масив випадкових чисел
function getRandomArray(length, min, max) {
   let randomArr = [];
   do {
     randomArr.push(Math.floor((Math.random() * (max - min + 1)) + min))
   }
   while (randomArr.length !== length)
   return randomArr
}
console.log(getRandomArray(17,39,99));

//рахує середнє арифметичне
let forModaOdd = [3, 2, 2, 4, 7, 6, 7]
function getAverage(numbers) {
   let average = 0;
   numbers.map(el => Number.isInteger(el) ? average += el : average + 0)
   return +(average / numbers.length).toFixed(2)
}
console.log(getAverage(forModaOdd));

// рахує медіану всіх переданих в неї аргументів
function getMedian(numbers) {
   let filterNumber = numbers.filter(el => Number.isInteger(el))
   let result = null
   let finishSort = filterNumber.sort((a, b) => a - b)
   if (finishSort.length % 2) {
      result = ((finishSort.length - 1) / 2)
      return finishSort[result]
   } else {
      let indexAverage = (finishSort.length / 2)
      let frontIndexAverage = (finishSort.length / 2 -1)
      result =(finishSort[indexAverage] + finishSort[frontIndexAverage])/2
      return result
   }
}
console.log(getMedian(forModaOdd));

// фільтрує парні числа передані як аргументи функції
const filterEvenNumbers=(...num)=>num.filter(el => el % 2!==0 )
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));

// порахує кількість чисел більших 0
const countPositiveNumbers=(...numbers) =>(numbers.filter(el => el > 0)).length
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 3, 9, 9, 11, 6));

// залишить тільки ті, які діляться на ціло на 5
const getDividedByFive =(...numbers)=> numbers.filter(el => el % 5==0)
console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

//вираховує моду всіх переданих в неї аргументів.
let forModa = [6, 55, 6, 55, 13, 6, 78, 2, 55, 7, 55, 87, 55, 2, 56, 3, 4, 2]
function getModa(plural) {
   function countsRepetitions(plural) {
      let result = []
      for (let i = 0; i < plural.length; i++) {
         let index = plural[i];
         function getFilterIndex(ind) {
            let example = plural.filter((el) => el === ind)
            return example
         }
         result.push(getFilterIndex(index))
      }
      return result
   }
   let arrayOfRepeated = countsRepetitions(plural)
   
   function convertRepeatInArray(arr) {
      let arrForLenght = []
      for (let i = 0; i < arr.length; i++) {
         arrForLenght.push(arr[i].length)
      }
      return arrForLenght
   }
   const largestLength = convertRepeatInArray(arrayOfRepeated)

   function getMaxLength(list) {
      let maxForArr = list.reduce((a, b) => a > b ? a : b);
      let indexModa = largestLength.indexOf(maxForArr)
      return plural[indexModa]
   }
   let moda = getMaxLength(largestLength)
   return moda
}
console.log(getModa(forModa));

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






