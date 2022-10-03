const audios = document.querySelectorAll('audio')
const divButton = document.querySelectorAll('.el')

document.body.addEventListener("keydown", replaceAll)
function replaceAll(e) {
   let keyCodeEvent = e.keyCode
   audios.forEach((el, ind) => {
      if (el.id == keyCodeEvent) {
         elementReproduction(el, ind)
      }
   })
}

function elementReproduction(item, i) {
   item.currentTime = 0
   item.play()
   divButton[i].classList.toggle("elDown")
   setTimeout(() => divButton[i].classList.toggle('elDown'),300)
}

divButton.forEach((el, ind) => {
   el.addEventListener("click", () => 
      elementReproduction(audios[ind], ind)
   )
})
