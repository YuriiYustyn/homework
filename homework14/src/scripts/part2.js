export const studentsObj = [{
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

export function getSubjects(student) {
   let result = []
   for (let key in student.subjects) {
      let redactedWords = key.slice(0, 1).toUpperCase() + (key.slice(1).toLowerCase())
      result.push(redactedWords.replace('_', ' ')) + "    "
   }
   return result
}

export const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 }
export function getMyTaxes(salary) {
   return this.tax * salary
}


export class Student {
   constructor(university, course, fullName, marks) {
      this.university = university
      this.course = course
      this.fullName = fullName
      this.marks = marks
      this.dismiss = false
   }
   getInfo() {
      return `Студент ${this.course}го курсу, ${this.university}, ${this.fullName} `
   }
}
export const ostap = new Student("Вища школа психотерапії м.Одеса", "1", "Остап Бендер", [5, 4, 4, 5])


