const audios = document.querySelectorAll('audio')
const divButton = document.querySelectorAll('.el')

document.body.addEventListener("keydown", replaceAll)
function replaceAll(e) {
   let keyCodeEvent = e.keyCode
   for (let i = 0; i < audios.length; i++) {
      if (audios[i].id == keyCodeEvent) {
         audios[i].currentTime = 0
         audios[i].play()
         divButton[i].className = "elDown"
         setTimeout(function(){ divButton[i].className = 'el' }, 300)
      }
   }
}

for (let i = 0; i < divButton.length; i++) {
   divButton[i].addEventListener("click", function (e) {
      audios[i].currentTime = 0
      audios[i].play()
      divButton[i].className = "elDown"
      setTimeout(function () { divButton[i].className = 'el' }, 300)
   })
}
