async function getRandomChinese(lenght = 6) {
   let acc = ''
   let quanity = lenght
   let chineseSing = () => String.fromCharCode(Date.now().toString().slice(-5))
   let randomSign = () => new Promise((resolve) =>
      setTimeout(() => { return resolve(chineseSing()) }, 50))
   while (quanity > 0) {
      console.log(acc);
      acc += await randomSign()
      quanity--
   }
   return acc
}
getRandomChinese(10).then((res) => console.log(res))

