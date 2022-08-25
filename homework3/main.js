//підводить число в степінь

document.querySelector(".degreeButton").onclick = ExponentResult
function ExponentResult() {
   let a = document.querySelector(".degreeInput1").value
   let b = document.querySelector(".degreeInput2").value
   let c = leadsDegree(a, b)
   document.querySelector(".degreeResult").innerHTML = c
}
function leadsDegree(x, y) {
   let result = x;
   for (let i = 1; i < y; i++) {
      result *= x;
   }
   return result;
}

// Форматує ім'я

document.querySelector(".newNameButton").onclick = newName
function newName() {
   let a = document.querySelector(".newNameInput").value
   let b = editingName(a)
   document.querySelector(".newNameResult").innerHTML = b
}
function editingName(name) {
   let newName = name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase();
   return newName;
}

// вираховує суму, що залишається після оплати податку

document.querySelector(".nettoButton").onclick = netto
function netto() {
   let a = document.querySelector(".nettoInput").value
   let b = сalculateNetto (a)
   document.querySelector(".nettoResult").innerHTML = b
}
function сalculateNetto(salary) {
   let salaryNetto = +(salary * 0.805).toFixed(2);
   return salaryNetto;
}

//рахує скільки разів певна буква повторюється

document.querySelector(".countsLettersButton").onclick = countLetterIner
function countLetterIner () {
   let a = document.querySelector(".countsLettersInput1").value
   let b = document.querySelector(".countsLettersInput2").value
   let c = countLetter(a, b);
   document.querySelector(".countsLettersDivResult").innerHTML = c
}
function countLetter(string, leter) {
   let counter = 0;
   for (let i = 0; i < string.length; i++) {
      if (string[i].toLowerCase() === leter.toLowerCase()) {
         counter++;
      }
   }
   return counter;
}

//генерації випадкового паролю

document.querySelector(".passGenerationButton").onclick = inerPass
function inerPass() {
   let a = document.querySelector(".passGenerationInput").value
   let b = getRandomPaswword (a)
   document.querySelector(".passGenerationResult").innerHTML = b
}
function getRandomPaswword(length = 8) {
   let password = [];
   password.length = length;
   const randomNumber = () => Math.floor((Math.random() * 9) + 1)
   for (let i = 0; i < length; i++) {
      password[i] = randomNumber();
   }
   return +password.join("");
}

//видалить з речення букви, які зустрічаються більше 1 разу

document.querySelector(".removeSameButton").onclick = inerUnitLeters
function inerUnitLeters() {
   let a = document.querySelector(".removeSameInput").value
   let b = removesDuplication(a)
   document.querySelector(".removeSameResult").innerHTML = b
}
function removesDuplication(string) {
   let arr = string.toLowerCase().split("");
   let result = "";
   for (let i = 0; i < arr.length; i++) {
      if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
         result += arr[i];
      }
   }
   return result;
}

//отримує будь-яке число та виводить найбільшу цифру в цьому числі
const findMax = (number) => +Math.max(...(number + '').split(''));
console.log(findMax(456544));

//повертає випадкове ціле число в діапазоні
function pickRandomNumber(min, max) {
   let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
   return randomNumber;
}
console.log(pickRandomNumber(6, 19));

//конвертує долари в гривні та навпаки
function conversion(sum) {
   const exchangeRate = 40;
   let result;
   if (sum.slice(-3) === 'UAH' || sum.slice(-3) === 'Uah' || sum.slice(-3) === 'uah') {
      result = +(sum.slice(0, -3) / exchangeRate);
   }
   else if (sum.slice(-1) === '$') {
      result = exchangeRate * (sum.slice(0, -1))
   }
   else {
      result = 'error, не коректна валюта'
   }
   return result;
}
console.log(conversion('1485$'))

//видаляє всі букви з речення
function deleteLetters(string, letter) {
   newString = [];
   for (let i = 0; i < string.length; i++) {
      if (string[i].toLowerCase() !== letter.toLowerCase()) {
         newString += string[i];
      }
   }
   return newString;
}
console.log(deleteLetters('what is yor name', 'a'));

