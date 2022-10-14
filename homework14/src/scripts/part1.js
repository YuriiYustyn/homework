export const priceApples = 15.678;
export const priceCherries = 123.965;
export const pricePeaches = 90.2345;
export const maxPrice = Math.max(priceApples, priceCherries, pricePeaches);

export function getSum(min = 10, max = 100) {
   let skip = true
   let sum =0
   for (let i = min; i <= max; i++) {
      if (skip && i % 2 === 0) {
         continue
      }
      sum += i;
   };
   return sum
}

export function leadsDegree(x=5, y=3) {
   let result = x;
   for (let i = 1; i < y; i++) {
      result *= x;
   }
   return result;
}

export const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
export const studensBoy = ["Олександр", "Ігор", "Олексій"];
export const studensGirl = ["Олена", "Іра", "Світлана"];

export function createPair(arr) {
   let pair = []
   for (let i = 0; i < arr.length; i++) {
      pair.push([studensBoy[i], studensGirl[i]])
   }
   return pair
}

export function getAverage(...numbers) {
   let average = 0;
   numbers.forEach(el => Number.isInteger(el) && (average += el))
   return +(average / numbers.length).toFixed(2)
}


