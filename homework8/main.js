class Student {
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
   get marksArr() {
      return !this.dismiss ? this.marks : null
   }
   set marksArr(mark) {
      if (!this.dismiss) {
         return this.marks.push(mark)
      } else {
         return null
      }
   }
   getAverageMark() {
      let sum = this.marks.reduce((acc, item) => acc + item)
      return sum / this.marks.length
   }
   getDismiss() {
      this.dismiss = true
      console.log('Студента виключено')
   }
   getRecover() {
      this.dismiss = false
      console.log("Студента поновлено, тепер можна ставити і переглядати його оцінки");
   }
}
const ostap = new Student("Вища школа психотерапії м.Одеса", "1", "Остап Бендер", [5, 4, 4, 5])
//Завдання 1
console.log(ostap)
//Завдання 2
console.log(ostap.getInfo())
//Завдання 3
console.log(ostap.marksArr)
//Завдання 4
ostap.marksArr = 5
console.log(ostap.marksArr)
//Завдання 5
console.log(ostap.getAverageMark());
//Завдання 6
ostap.getDismiss()
ostap.marksArr = 6
console.log(ostap.marksArr);
//Завдання 7
ostap.getRecover()
ostap.marksArr = 7
console.log(ostap.marksArr);

console.log("////////////////////////////////////////ADWANCED//////////////////////////////////////////////////")

class BudgetStudent extends Student {
   constructor(university, course, fullName, marks) {
      super(university, course, fullName, marks)
      this.dismiss = false
   }
   averageMark() {
      return this.getAverageMark()
   }
   scholarship() {
      return !this.dismiss && this.averageMark() >= 4 ? console.log('Ви отримали 1400 грн стипендії') : console.log('Лузер')
   }
}
const oleg = new BudgetStudent("ТНЕУ м.Тернопіль", 2, 'Oleg Babay', [4, 5, 3, 5, 4])
setInterval(function () { oleg.scholarship() }, 5000)




