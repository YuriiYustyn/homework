const priceApples = 15.678;
const priceCherries = 123.965;
const pricePeaches = 90.2345;
const maxPrice = Math.max(priceApples, priceCherries, pricePeaches);
console.log(maxPrice);

const minPrice = Math.min(priceApples, priceCherries, pricePeaches);
console.log(minPrice);

const entireСost = +(priceApples + priceCherries + pricePeaches).toFixed(2);
console.log(entireСost);

const costFruits = Math.floor(priceApples) + Math.floor(priceCherries) + Math.floor(pricePeaches);
console.log(costFruits);

const costHundred = Math.ceil(costFruits * 0.01) * 100;
console.log(costHundred);

const remainder = costFruits % 2;
console.log(!remainder);

const payment = 500;
const comeback = payment - entireСost; 
console.log(comeback);

const averageValue = +(entireСost / 3).toFixed(2);
console.log(averageValue);


const max = 90;
const min = 1;
const randomDiscount = Math.round(Math.random() * (max - min) + min + 1) ; 
console.log(randomDiscount);
const cashDiscount = + (randomDiscount * 0.01 * entireСost).toFixed(2);
console.log(cashDiscount);

const summe = + (entireСost - cashDiscount).toFixed(2);
console.log(summe);
const exesCost = + (entireСost *0.5).toFixed(2)
const profit = (summe - exesCost).toFixed(2);
console.log(profit);

document.writeln(
   `максимальне число: ${maxPrice};<br>
   мінімальне число:${minPrice};<br>
   вартість всіх товарів: ${entireСost};<br>
   сума цілих частин: ${costFruits} ;<br>
   суму товарів округлену до сотень: ${costHundred};<br>
   чи є сума всіх товарів парним числом: ${!remainder};<br>
   суму решти: ${comeback};<br>
   середнє значення цін: ${averageValue};<br>
   випадкова знижка: ${cashDiscount};<br>
   суму до оплати зі знижкою: ${summe};<br>
   чистий прибуток: ${profit};
   `
)