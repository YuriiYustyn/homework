/////////////////////////Домашне завдання (початок)////////////////////////////////////
function* createIdGenerator(startSize) {
   let value = startSize
   while (value) {
      let currentValue = yield value
      currentValue === 'up' ? value = value + 2 : true
      currentValue === 'down' ? value = value - 2 : true
   }
   console.log(value);
}
let idGenerator = createIdGenerator(14)

let up = document.querySelector('.up')
let down = document.querySelector('.down')
up.addEventListener('click', () => {
   let question = document.querySelector('.question')
   question.style.fontSize = `${idGenerator.next("up").value}px`
})
down.addEventListener('click', () => {
   let question = document.querySelector('.question')
   question.style.fontSize = `${idGenerator.next("down").value}px`
})

console.log(idGenerator.next("up"));
console.log(idGenerator.next('up'));
console.log(idGenerator.next("up"));
console.log(idGenerator.next());
console.log(idGenerator.next());
console.log(idGenerator.next("down"));
console.log(idGenerator.next("down"));

/////////////////////////////Домашне завдання (кінець)////////////////////////////////

let start = document.querySelector('.button-replaceText')
start.addEventListener('click', () => {
   typeText(), start.remove()
})

let prytula = document.querySelector('.prytula')
let counterAnimation = 0
let endContent = 0
let izBohatoi = document.querySelector('.iz-bohatoi')
let bohata = document.querySelector('.bohata')
let yomy = document.querySelector('.yomy')
let myToto = document.querySelector('.my-toto')
let swyni = document.querySelector('.swyni')
let treba = document.querySelector('.treba')
let kachky = document.querySelector('.kachky')
let kra = document.querySelector('.kra')
let tyashka = document.querySelector('.tyashka')
let kin = document.querySelector('.kin')
let content = document.querySelector('.div-content')


let forecasts = ['Радість', "Гроші", "Насолода", 'Несподіванка', 'Депресія', 'Розчарування',
   'Зрада', 'Пригода', 'Неприємність', 'Потрясіння', 'Непорозуміння', 'Секс', 'Нічого',
   'Здивування', 'Ігнор', 'Азарт', 'Сором', 'Гнів', 'Огида', 'Вдячність', 'Ентузіазм'
   , 'Переляк', 'Шаленьство', 'Ностальгія', 'Блаженьство', 'Розчулення', 'Повага',
   'Гордість', 'Прихильність', 'Кайф', 'Знахідка', 'Похвала', 'Визнання', 'Пофігізм',
   'Рутина', 'Рутина', 'Рутина', 'Рутина', 'Рутина', 'Натхнення', 'Борги', 'Борги',
   'Нічого', 'Прозріння', 'Успіх', 'Блядство', 'Знайомство', 'ДжекПот', 'Циганка']
let time = {
   0: 'Сьогодні',
   1: 'За місяць',
   2: 'Через рік',
   3: 'Було недавно'
}

function addContent() {
   let cards = document.querySelector('.all-cards')
   console.log(cards);
   for (let i = 0; i <= 21; i++) {
      let card = document.createElement('div')
      card.classList = 'card'
      card.innerHTML = forecasts[getRandonForecasts()],
         card.addEventListener('click', () => {
            treba.play(),
               addAnimation(card, counterAnimation)
         })
      cards.appendChild(card)
   }
}

function addAnimation(card, numberAnimation) {
   card.classList = `${"animation" + numberAnimation}`
   card.textContent += ' -' + `${'\n' + time[counterAnimation]}`
   counterAnimation++
   if (counterAnimation === 4) {
      setTimeout(() => {
         createBlokHelp()
         yomy.play()
      }, 6000)
      setInterval(() =>
         endContent > 0 ? true : yomy.play()
         , 10000)
   }
   console.log(counterAnimation);
}

function createBlokHelp() {
   let divHelp = document.createElement('div')
   divHelp.classList = 'help'
   let p = document.createElement('p')
   p.innerHTML = "20 ГРН для ЗСУ"
   let prytula = document.createElement('img')
   prytula.src = 'img/prytula.jpg'
   prytula.classList = 'foto-prytula'
   let buttonHelp1 = document.createElement('a')
   buttonHelp1.href = 'https://prytulafoundation.org/uk/home/support_page'
   buttonHelp1.target = "_blank"
   buttonHelp1.classList = 'buttonHelp'
   buttonHelp1.innerHTML = 'Пожертвувати'
   let buttonHelp2 = document.createElement('a')
   buttonHelp2.classList = 'buttonHelp'
   buttonHelp2.addEventListener('click', () => {
      endContent++
      tyashka.play()
   })
   buttonHelp1.addEventListener('click', () => {
      bohata.play()
   })
   buttonHelp2.innerHTML = 'Пізніше'
   divHelp.append(prytula, p, buttonHelp1, buttonHelp2)
   content.appendChild(divHelp)
}

let button = document.querySelector('.button-replaceText')
button.addEventListener('click', getForecasts)

function getForecasts(arr) {
   arr.forEach(el => el.innerHTML = forecasts[getRandonForecasts()])
}

const textOut = ['Я ІЗ БОГАТОЇ СІМЇ.\n',
   'Погадаю тобі на картах безплатно.\n',
   'Тилько поможіте ЗСУ\n',
   ' - 20 гривень\n',
   'Перша карта скаже про завтра.\n',
   'Друга про цей місяць.\n',
   'Третя про рік!!!\n',
   'Четвера - що вже було\n',
   'Отож почнімо, вибери 4 карти']

function typeText() {
   let line = 0
   let count = 0
   let out = ''
   let divContent = document.querySelector('.div-text')
   async function typeLine() {
      let interval = setTimeout(function () {
         out += textOut[line][count]
         divContent.innerHTML = out + '|'
         count++
         //перевірки на кінець рядка і кінець тексту 
         if (count >= textOut[line].length) {
            count = 0
            line++
            if (line == textOut.length) {
               clearTimeout(interval)
               divContent.innerHTML = out
               izBohatoi.play()
               setTimeout(() =>
                  document.querySelector('.foto-bohata').style.display = "grid"
                  , 3800)
               setTimeout(() => {
                  document.querySelector('.foto-bohata').style.display = "none"
               }, 4800)

               setTimeout(() => {
                  swyni.play()
                  document.querySelector('.foto-svyni').style.display = "grid"
               }, 5800)
               setTimeout(() => {
                  document.querySelector('.foto-svyni').style.display = "none"
               }, 6800)

               setTimeout(() => {
                  kin.play()
                  document.querySelector('.foto-kin').style.display = "grid"
               }, 7800)
               setTimeout(() => {
                  document.querySelector('.foto-kin').style.display = "none"
               }, 8800)

               setTimeout(() => {
                  kachky.play()
                  document.querySelector('.foto-magdak').style.display = "grid"
               }, 9800)
               setTimeout(() => {
                  kra.play()
                  addContent(),
                     document.querySelector('.foto-magdak').style.display = "none"
               }, 10800)
               return true
            }
         }
         typeLine()
      }, 20)
   }
   typeLine()
}

function getRandomInt(max) {
   return Math.floor(Math.random() * Math.floor(max))
}

function getRandonForecasts(min = 0, max = 49) {
   return Math.floor(Math.random() * (max - min + 1) + min)
}


