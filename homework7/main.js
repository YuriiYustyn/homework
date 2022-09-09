const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 }
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 }
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 }

// рахує скільки податків ви заплатите як IT - спеціаліст в якійсь з країн
function getMyTaxes(salary){
   return  this.tax* salary
}
console.log(getMyTaxes.call(ukraine, 2000))

// рахує скільки у середньому податків платятт IT - спеціалісти у кожній країні
function getMiddleTaxes(){
  return  this.tax * this.middleSalary
}
console.log(getMiddleTaxes.call(litva))
// яка рахує, скільки всього податків платять IT - спеціалісти у кожній країні
function  getTotalTaxes(){
   return this.tax * this.middleSalary * this.vacancies
}
console.log(getTotalTaxes.call(latvia))

// об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд
function getMySalary(){
   let max = 2000
   let min = 1500
   const newSalary = +(Math.random() * (max - min) + min).toFixed(2)
   const object = {
      salary: newSalary,
      taxes: this.tax,
      profit: +(newSalary - (newSalary * this.tax)).toFixed(2)
   }
   console.log(object)
}
const mySalary = getMySalary.bind(ukraine)

setInterval(mySalary,10000)


