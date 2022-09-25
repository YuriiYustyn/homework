function randomColor() {
   const quantityColor = 16777216
   return `#${Math.floor(Math.random() * quantityColor).toString(16)}`
}

function generateBlocks() {
   let bigSquare = document.querySelector(".test")  
   bigSquare.classList.add('bigSquare')
   bigSquare.innerHTML=''
   for (let i = 0; i < 25 ; i++) {
      let square = document.createElement("div")
      square.classList.add('smallSquare')
      square.style.background = randomColor()
      bigSquare.append(square)
   }
}
setInterval(generateBlocks,1000)
