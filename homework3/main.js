//підводить число в степінь

document.querySelector(".degreeButton").onclick = ExponentResult;
function ExponentResult() {
   let getValue1 = document.querySelector(".degreeInput1").value
   let getValue2 = document.querySelector(".degreeInput2").value
   let callLeadsDegree = leadsDegree(getValue1, getValue2)
   document.querySelector(".degreeResult").innerHTML = callLeadsDegree
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
   let getValue = document.querySelector(".newNameInput").value
   let callEditingName = editingName(getValue)
   document.querySelector(".newNameResult").innerHTML = callEditingName
}
function editingName(name) {
   let newName = name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase();
   return newName;
}

// вираховує суму, що залишається після оплати податку

document.querySelector(".nettoButton").onclick = netto
function netto() {
   let getValue = document.querySelector(".nettoInput").value
   let callCalculateNetto = сalculateNetto(getValue)
   document.querySelector(".nettoResult").innerHTML = callCalculateNetto
}
function сalculateNetto(salary) {
   const taxPDFO = 18;
   const taxMilitary = 0.5;
   const alltaxes = taxPDFO + taxMilitary; 
   let salaryNetto = +(salary - (salary * alltaxes)/100 ).toFixed(2);
   return salaryNetto;
}

//рахує скільки разів певна буква повторюється

document.querySelector(".countsLettersButton").onclick = countLetterIner
function countLetterIner () {
   let getValue1 = document.querySelector(".countsLettersInput1").value
   let getValue2 = document.querySelector(".countsLettersInput2").value
   let callCountLetter = countLetter(getValue1, getValue2);
   document.querySelector(".countsLettersDivResult").innerHTML = callCountLetter
}
function countLetter(string, leter) {
   let counter = 0;
   const leterSmall = leter.toLowerCase()
   for (let i = 0; i < string.length; i++) {
      if (string[i].toLowerCase() === leterSmall) {
         counter++;
      }
   }
   return counter;
}

//генерації випадкового паролю

document.querySelector(".passGenerationButton").onclick = inerPass
function inerPass() {
   let getValue = document.querySelector(".passGenerationInput").value
   let callGetRandomPaswword = getRandomPaswword(getValue)
   document.querySelector(".passGenerationResult").innerHTML = callGetRandomPaswword
}
function getRandomPaswword(length = 8) {
   let min = 0;
   let max = 9;   
   let password = "";
   password.length = length;
   for (let i = 0; i < length; i++) {
      let randomNumber = pickRandomNumber(min, max)
      let strinG = String(randomNumber)
      password += strinG;
   }
   return password;
   }

//видалить з речення букви, які зустрічаються більше 1 разу

document.querySelector(".removeSameButton").onclick = inerUnitLeters
function inerUnitLeters() {
   let getValue = document.querySelector(".removeSameInput").value
   let callRemovesDuplication = removesDuplication(getValue)
   document.querySelector(".removeSameResult").innerHTML = callRemovesDuplication
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

const findMax = (number) => +Math.max(...(number + ''));
console.log(findMax(45654409));

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
   const searchCurrency = sum.slice(-3).toLowerCase();
   if (searchCurrency === 'uah') {
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
console.log(conversion('1784.89$'))

//видаляє всі букви з речення

function deleteLetters(string, letter) {
   let newString = [];
   for (let i = 0; i < string.length; i++) {
      if (string[i].toLowerCase() !== letter.toLowerCase()) {
         newString += string[i];
      }
   }
   return newString;
}
console.log(deleteLetters('what is yor name', 'a'));


