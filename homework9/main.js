function randomColor() {
   const quantityColor = 16777216
   return `#${Math.floor(Math.random() * quantityColor).toString(16)}`
}

function generateBlocks() {
   let bigSquare = document.querySelector(".test")
   const bigSquareSize = 50
   const heightWidth = 5
   bigSquare.style.width = `${bigSquareSize * heightWidth}px`
   bigSquare.style.height = `${bigSquareSize * heightWidth}px`
   bigSquare.style.display = `flex`
   bigSquare.style.flexWrap = 'wrap'
   bigSquare.innerHTML=''
   for (let i = 0; i < heightWidth * heightWidth ; i++) {
      let square = document.createElement("div")
      square.style.width = `${bigSquareSize}px`
      square.style.height = `${bigSquareSize}px`
      square.style.background = `${randomColor()}`
      square.style.borderRadius = '3px'
      bigSquare.append(square)
   }
}
setInterval(generateBlocks,1000)
