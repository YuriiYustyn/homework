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
   'Попався НАЗАРЕ? Я МАТРИЦЯ.\n',
   'ПорнХаб заразив твій пк вірусами\n',
   'Тепер ти будеш підкорятися мені']
let conteiner = document.querySelector(".conteiner")
async function innerHTML1() {
   const signChinese = document.createElement('div')
   signChinese.innerHTML = await getRandomChinese(20)
   signChinese.className = "elDown"
   conteiner.appendChild(signChinese)

}
let eventBotton = document.querySelector('.botton-inner')
eventBotton.addEventListener('click', innerHTML1)
let audio = document.querySelector('.audio-click')
let audio1 = document.querySelector('.audio1')
let audio2 = document.querySelector('.audio2')

function typeText() {
   eventBotton.remove()
   //малює рядок
   let line = 0
   let count = 0
   let out = ''
   let HTMLout = document.querySelector('.out')
   async function typeLine() {
      let interval = setTimeout(function () {
         out += textOut[line][count]
         HTMLout.innerHTML = out + '|'
         count++
         //перевірки на кінець рядка і кінець тексту + ввімкнення сміху в кінці
         if (count >= textOut[line].length) {
            count = 0
            line++
            if (line == textOut.length) {
               clearTimeout(interval)
               HTMLout.innerHTML = out
               // audio2.play()
               setTimeout(() => audio1.play(),2700 )
               audio2.play()
               return true
            }
         }
         typeLine()
         audio.currentTime = 0
         audio.play()
   
      }, getRandomInt(getRandomInt(550 * 1.9)))
   }
   typeLine()
}

function getRandomInt(max) {
   return Math.floor(Math.random() * Math.floor(max))
}
eventBotton.addEventListener('click', typeText)







