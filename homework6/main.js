const students = [{
   name: "Tanya",
   course: 3,
   subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
   }
}, {
   name: "Victor",
   course: 4,
   subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
   }
}, {
   name: "Anton",
   course: 2,
   subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
   }
}];

// поверне список предметів для конкретного студента
function getSubjects(student) {
   let result = ""
   for (let key in student.subjects) {
      redactedWords = (key.slice(0, 1).toUpperCase() + (key.slice(1).toLowerCase()))
      result += (redactedWords.replace('_', ' ')) + "    "
   }
   return result
}
console.log(getSubjects(students[0]));

// поверне середню оцінку
function getAverageMark(student) {
   let marks = Object.values(student.subjects).reduce((acc, item) => acc.concat(item))
   let sumMark = marks.reduce((acc, item) => acc + item)
   return +(sumMark / marks.length).toFixed(2)
}
console.log(getAverageMark(students[1]))

// поверне інформацію загального виду по переданому студенту
function getStudentInfo(student) {
   return {
      name: student.name,
      course: student.course,
      averageMark: getAverageMark(student)
   }
}
console.log(getStudentInfo(students[0]));

// поверне імена студентів у алфавітному порядку
const getStudentsNames = (allStudents => allStudents.map(el => el.name).sort());
console.log(getStudentsNames(students));

// поверне кращого студента зі списку по показнику середньої оцінки
function getBestStudent(arrForStudents) {
   let markAllStudents = arrForStudents.map(el => getAverageMark(el))
   let maxMark = Math.max(...markAllStudents)
   return arrForStudents[markAllStudents.indexOf(maxMark)].name
}
console.log(getBestStudent(students));

// повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень
function calculateWordLetters(test) {
   let result = {}
   let calculateLetters = test.split("").map(el => {
      return result[el] !== undefined ? ++result[el] : result[el] = 1
   })
   return result
}
console.log(calculateWordLetters("Helleol"));


