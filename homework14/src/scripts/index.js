import "../styles/styleHome10.css"
import '../styles/bg1.jpg'
import "../styles/styleHome9.css"
import "../styles/style.css"
import { maxPrice } from "./part1"
import { getSum } from "./part1"
import { leadsDegree } from "./part1"
import { students, studensBoy, studensGirl, createPair } from "./part1"
import { getAverage } from "./part1"
import { studentsObj, getSubjects } from "./part2"
import { ukraine, getMyTaxes } from "./part2"
import { Student, ostap } from "./part2"
import { randomColor, generateBlocks } from "./part3"
import { audios, divButton, replaceAll, elementReproduction } from "./part3"
import './audios/audioone.mp3'
import './audios/audiotwo.mp3'
import './audios/audiothree.mp3'
import './audios/audiofour.mp3'
import './audios/audiofive.mp3'
import './audios/audioseex.mp3'
import './audios/audioseven.mp3'
import { getRandomChinese } from "./part4"
import { trPlanets, getPlanets } from "./part4"
import { createIdGenerator, idGenerator, up, down } from "./part4"

getRandomChinese(10).then((res) => console.log(res))
console.log(maxPrice)
console.log(getSum())
console.log(leadsDegree())
console.log(createPair(studensBoy))
console.log(getAverage(3, 2, 2, 4, 7, 6, 7))
console.log(getSubjects(studentsObj[0]))
console.log(getMyTaxes.call(ukraine, 2000))
console.log(ostap.getInfo())


function foo(selector, verb) {
   document.querySelector(selector).innerHTML += verb
}
foo('.home9', setInterval(generateBlocks, 5000))

document.body.addEventListener("keydown", replaceAll)

divButton.forEach((el, ind) => {
   el.addEventListener("click", () =>
      elementReproduction(audios[ind], ind)
   )
})
getPlanets()

up.addEventListener('click', () => {
   let question = document.querySelector('.h1')
   question.style.fontSize = `${idGenerator.next("up").value}px`
}
)
down.addEventListener('click', () => {
   let question = document.querySelector('.h1')
   question.style.fontSize = `${idGenerator.next("down").value}px`
}
)
const img = document.createElement('img')
img.setAttribute('src', Image)

