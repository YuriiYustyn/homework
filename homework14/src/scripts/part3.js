export function randomColor() {
   const quantityColor = 16777216
   return `#${Math.floor(Math.random() * quantityColor).toString(16)}`
}

export function generateBlocks() {
   let bigSquare = document.querySelector(".test")
   bigSquare.classList.add('bigSquare')
   bigSquare.innerHTML = ''
   for (let i = 0; i < 25; i++) {
      let square = document.createElement("div")
      square.classList.add('smallSquare')
      square.style.background = randomColor()
      bigSquare.append(square)
   }
}

export const audios = document.querySelectorAll('audio')
export const divButton = document.querySelectorAll('.el')

document.body.addEventListener("keydown", replaceAll)
export  function replaceAll(e) {
   let keyCodeEvent = e.keyCode
   audios.forEach((el, ind) => {
      if (el.id == keyCodeEvent) {
         elementReproduction(el, ind)
      }
   })
}

export function elementReproduction(item, i) {
   item.currentTime = 0
   item.play()
   divButton[i].classList.toggle("elDown")
   setTimeout(() => divButton[i].classList.toggle('elDown'), 300)
}

divButton.forEach((el, ind) => {
   el.addEventListener("click", () =>
      elementReproduction(audios[ind], ind)
   )
})

