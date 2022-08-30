const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
const studensBoy = ["Олександр", "Ігор", "Олексій"];
const studensGirl = ["Олена", "Іра", "Світлана"];


function CreatePair(arr) {
   let pair = []
   for (let i = 0; i < arr.length; i++) {
      pair.push([studensBoy[i], studensGirl[i]])
   }
   return pair
}
const pairStudents = CreatePair(studensBoy)
console.log(pairStudents);

document.querySelector(".div_createPair").onclick = addDOMPair;
function addDOMPair() {
   document.querySelector('.div_inerPair').innerHTML = `<table class="tablePair"></table>`
   for (let i = 0; i < pairStudents.length; i++) {
      let rawPair = document.createElement('tr')
      rawPair.innerHTML = `<td>${[i + 1]}</td>
                        <td>${pairStudents[i][0]}</td>
                        <td>${pairStudents[i][1]}</td>
                        `
      // <td>${randonMark[i][2]}</td>
      document.querySelector('.div_createPair').appendChild(rawPair)
   }
}


function getTask() {
   let resultNew = [];//накопичує всі елементи result з доданою до кожного темою
   let result = [];//накопичує результати додавання в елемент масиву букву і
   for (let i = 0; i < pairStudents.length; i++) {
      result.push(pairStudents[i].join(' і '))//до кожного елементу pairs добавить букву і
      resultNew.push([result[i], themes[i]])// до кожного елемента result додає "тему"
   }
   return resultNew
}
const pairTask = getTask();
console.log(getTask());

document.querySelector(".div_createPair2").onclick = addDOMPair2;
function addDOMPair2() {
   document.querySelector('.div_inerPair2').innerHTML = `<table class="tablePair"></table>`
   for (let i = 0; i < pairStudents.length; i++) {
      let rawPair = document.createElement('tr')
      rawPair.innerHTML = `<td>${[i + 1]}</td>
                        <td>${pairTask[i][0]}</td>
                        <td>${pairTask[i][1]}</td>   
                        `
      document.querySelector('.div_createPair2').appendChild(rawPair)
   }
}



function getStudentsMarks() {
   let studentsMark = [];
   for (let i = 0; i < students.length; i++) {
      studentsMark.push([students[i], marks[i]])
   }
   return studentsMark;
}
const StudentsMarks = getStudentsMarks()
console.log(getStudentsMarks());

document.querySelector(".div_createPair3").onclick = addDOMPair3;
function addDOMPair3() {
   document.querySelector('.div_inerPair3').innerHTML = `<table class="tablePair"></table>`
   for (let i = 0; i < students.length; i++) {
      let rawPair = document.createElement('tr')
      rawPair.innerHTML = `<td>${[i + 1]}</td>
                           <td>${students[i]}</td>
                           <td>${marks[i]}</td
                        `
      document.querySelector('.div_createPair3').appendChild(rawPair)
   }
}



function getMarksPairs() {
   let pairTaskMark = Array.from(pairTask)
   let randomMark = [];
   let min = 2;
   let max = 5;
   for (let i = 0; i < pairTaskMark.length; i++) {
      randomMark.push(Math.floor(Math.random() * (max - min + 1) + min))
      pairTaskMark[i].push( (randomMark[i])) 
   }
   return pairTaskMark
}
const randonMark = getMarksPairs();
console.log(randonMark);

document.querySelector(".div_createPair4").onclick = addDOMPair4;
function addDOMPair4() {
   document.querySelector('.div_inerPair4').innerHTML = `<table class="tablePair"></table>`
   for (let i = 0; i < pairTask.length; i++) {
      let rawPair = document.createElement('tr')
      rawPair.innerHTML = `<td>${[i + 1]}</td>
                           <td>${pairTask[i][0]}</td>
                           <td>${pairTask[i][1]}</td>
                           <td>${randonMark[i][2]}</td
                        `
      document.querySelector('.div_createPair4').appendChild(rawPair)
   }
}