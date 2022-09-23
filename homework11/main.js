async function getRandomChinese(lenght = 6) {
   let acc = ''
   let quanity = lenght
   let chineseSing = () => String.fromCharCode(Date.now().toString().slice(-5))
   let randomSign = () => new Promise((resolve) =>
      setTimeout(() => { return resolve(chineseSing()) }, 50))
   while (quanity > 0) {
      acc += await randomSign()
      quanity--
   }
   return acc
}
getRandomChinese(10).then((res) => console.log(res))

const textOut = ['Я бачу тебе.\n',
   'Прокинься, Я МАТРИЦЯ.\n',
   'ПорнХаб заразив твій пк вірусами\n',
   'Тепер ти будеш підкорятися мені']
let a = document.querySelector(".conteiner")
async function innerHTML1() {
   const signChinese = document.createElement('div')
   signChinese.innerHTML = await getRandomChinese(10)
   signChinese.className = "elDown"
   a.appendChild(signChinese)

}
let eventBotton = document.querySelector('.botton-inner')
eventBotton.addEventListener('click', innerHTML1)
let audio = document.querySelector('.audio-click')
let audio1 = document.querySelector('.audio1')
console.log(audio);
function typeText() {
   eventBotton.remove()
   //малює рядок
   let line = 0
   let count = 0
   let out = ''
   let HTMLout = document.querySelector('.out')
   function typeLine() {
      let interval = setTimeout(function () {
         out += textOut[line][count]
         HTMLout.innerHTML = out + '|'
         count++
         //перевірки
         if (count >= textOut[line].length) {
            count = 0
            line++
            if (line == textOut.length) {
               clearTimeout(interval)
               HTMLout.innerHTML = out
               audio1.play()
               return true
            }
         }
         typeLine()
         audio.currentTime = 0
         audio.play()
      }, getRandomInt(getRandomInt(600 * 1.9)))
   }
   typeLine()

}

function getRandomInt(max) {
   return Math.floor(Math.random() * Math.floor(max))
}
eventBotton.addEventListener('click', typeText)







