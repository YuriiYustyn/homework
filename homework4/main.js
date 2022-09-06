const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
const studensBoy = ["Олександр", "Ігор", "Олексій"];
const studensGirl = ["Олена", "Іра", "Світлана"];


function createPair(arr) {
   let pair = []
   for (let i = 0; i < arr.length; i++) {
      pair.push([studensBoy[i], studensGirl[i]])
   }
   return pair
}
const pairStudents = createPair(studensBoy)
console.log(pairStudents);


let copyPairStudents = pairStudents.slice(0)
function getTask(pair) {
   let resultNew = [];
   for (let i = 0; i < pair.length; i++) {
      let addLetter = pair[i].join(' і ')//до кожної пари додасть букву "і"
      resultNew.push([addLetter, themes[i]])// до кожного елемента result додає "тему"
   }
   return resultNew
}
const pairTask = getTask(copyPairStudents);
console.log(pairTask);


function getStudentsMarks(units) {
   let studentsMark = [];
   for (let i = 0; i < units.length; i++) {
      studentsMark.push([units[i], marks[i]])
   }
   return studentsMark;
}
const studentsMarks = getStudentsMarks(students)
console.log(studentsMarks);


let copyPairTask = pairTask.map(item => item.slice(0))
function getMarksPairs(pairsCompare) {
   let result = [];
   let min = 1;
   let max = 5;
   function markRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
   }
   for (let i = 0; i < pairsCompare.length; i++) {
      result.push(pairsCompare[i].concat(markRandom(min, max)))

   }
   return result
}
const randonMark = getMarksPairs(copyPairTask);
console.log(randonMark);


const findSelectorPair = document.querySelector(".div_createPair")
findSelectorPair.onclick = addDOMPair;
function addDOMPair() {
   findSelectorPair.innerHTML = `<table class="tablePair"></table>`
   for (let i = 0; i < pairStudents.length; i++) {
      let rawPair = document.createElement('tr')
      rawPair.innerHTML = `<td>${[i + 1]}</td>
                        <td>${pairStudents[i][0]}</td>
                        <td>${pairStudents[i][1]}</td>`
      findSelectorPair.appendChild(rawPair)
   }
}


const findSelectorTask = document.querySelector(".div_createPair2")
findSelectorTask.onclick = addDOMPair2;
function addDOMPair2() {
   findSelectorTask.innerHTML = `<table class="tablePair"></table>`
   for (let i = 0; i < pairTask.length; i++) {
      let rawPair = document.createElement('tr')
      rawPair.innerHTML = `<td>${[i + 1]}</td>
                        <td>${pairTask[i][0]}</td>
                        <td>${pairTask[i][1]}</td>   
                        `
      findSelectorTask.appendChild(rawPair)
   }
}


const findSelectorMark = document.querySelector(".div_createPair3")
findSelectorMark.onclick = addDOMPair3;
function addDOMPair3() {
   findSelectorMark.innerHTML = `<table class="tablePair"></table>`
   for (let i = 0; i < students.length; i++) {
      let rawPair = document.createElement('tr')
      rawPair.innerHTML = `<td>${[i + 1]}</td>
                           <td>${students[i]}</td>
                           <td>${marks[i]}</td
                        `
      findSelectorTask.appendChild(rawPair)
   }
}


const findSelectorPairMark = document.querySelector(".div_createPair4")
findSelectorPairMark.onclick = addDOMPair4;
function addDOMPair4() {
   findSelectorPairMark.innerHTML = `<table class="tablePair"></table>`
   for (let i = 0; i < pairTask.length; i++) {
      let rawPair = document.createElement('tr')
      rawPair.innerHTML = `<td>${[i + 1]}</td>
                           <td>${pairTask[i][0]}</td>
                           <td>${pairTask[i][1]}</td>
                           <td>${randonMark[i][2]}</td
                        `
      findSelectorPairMark.appendChild(rawPair)
   }
}