let divHTML = document.querySelector('.div-HTML')
let indexFilm = document.querySelector('#film')
let language = document.querySelector('.select-language')
console.log(language.value);

async function getUsers(number) {
   divHTML.innerHTML = ''
   let reqest = await fetch(`https://swapi.dev/api/films/${number}/`)
   let response = await reqest.json()

   for (let i = 0; i < response.characters.length; i++) {
      let referencesHaracter = await fetch(`${response.characters[i] + language.value}`)
      let haracter = await referencesHaracter.json()
      console.log(haracter);
      let newRaw = document.createElement('tr')
      newRaw.classList = 'tr'

      let foto = document.createElement('img')
      foto.src = obj[haracter.name || haracter.whrascwo] || `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0gJc_0giiMNjbm-kvWcnCjXTJXTM_lCmE7Q&usqp=CAU`
      foto.classList = 'td-foto'

      let tdName = document.createElement('td')
      tdName.innerHTML = haracter.whrascwo || haracter.name
      tdName.classList = 'td'

      let tdBirds = document.createElement('td')
      tdBirds.innerHTML = haracter.birth_year || haracter.rhahrcaoac_roworarc
      tdBirds.classList = 'td'

      let tdGender = document.createElement('td')
      if (haracter.gender === "n/a" || haracter.gender === "none" || haracter.gender === "hermaphrodite") {
         tdGender.innerHTML = `<img src="img/trans.png" height="50px">`;
      }
      else if (haracter.rrwowhwaworc) {
         tdGender.innerHTML = haracter.rrwowhwaworc
      }
      else {
         tdGender.innerHTML = `<img src="img/${haracter.gender}.png" height="50px">`
      }
      tdGender.classList = 'td'
      newRaw.append(foto)
      newRaw.append(tdName)
      newRaw.append(tdBirds)
      newRaw.append(tdGender)
      divHTML.appendChild(newRaw)
   }
   console.log(language.value)
}

let divButton = document.querySelector('.div-button')
divButton.addEventListener('click', () => {
   let numberFilm = indexFilm.value
   getUsers(numberFilm)
})

let numberPage = 1
async function getPlanets() {
   let reqest = await fetch(`https://swapi.dev/api/starships/?page=${numberPage}`)
   let response = await reqest.json()
   let planets = await response.results
   let planetsHTML = document.querySelector('.planetsHTML')

   for (let i = 0; i < planets.length; i++) {
      let tdPlanet = document.createElement('td')
      tdPlanet.classList = 'tdPlanets'
      tdPlanet.textContent = planets[i].name
      trPlanets.append(tdPlanet)
   }
   planetsHTML.append(trPlanets)
}
getPlanets()

let trPlanets = document.createElement('tr')
let buttonPrew = document.querySelector('.prew')
buttonPrew.addEventListener('click', () => {
   if (numberPage > 1) {
      numberPage--
      trPlanets.innerHTML = ''
      getPlanets()
   }
}
)

let buttonNext = document.querySelector('.next')
buttonNext.addEventListener('click', () => {
   if (numberPage < 4) {
      numberPage++
      trPlanets.innerHTML = '',
         getPlanets()
   } else {
      return true
   }
}
)


let obj = {
   'Luke Skywalker': 'https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-luke-skywalker-16x9-xl.jpg.adapt.crop1x1.320w.jpg',
   'Lhuorwo Sorroohraanorworc': 'https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-luke-skywalker-16x9-xl.jpg.adapt.crop1x1.320w.jpg',
   'C-3PO': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8tz3TvsRgm24I6L4bV9T9L7mxL9NV6IFLA&usqp=CAU',
   'R2-D2': 'https://resize.cdn.otakumode.com/full/shop/product/dfa236950c884dc6a2a7d7d3f9b275b1.jpg',
   'Darth Vader': 'https://i.pinimg.com/736x/3f/80/bb/3f80bb41847ae380ee21d797ddfc0823.jpg',
   'Drarcaoac Vrawaworc': 'https://i.pinimg.com/736x/3f/80/bb/3f80bb41847ae380ee21d797ddfc0823.jpg',
   'Leia Organa': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJM4B1a4goXamSXcpPI42yiZVeTkJyKqzbNg&usqp=CAU',
   'Lwoahra Orcrrrawhra': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJM4B1a4goXamSXcpPI42yiZVeTkJyKqzbNg&usqp=CAU',
   'Owen Lars': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVv_N-FVcTEEyp2bqv1KAY61glC-SJ29j22g&usqp=CAU',
   'Oohwowh Lrarcc': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVv_N-FVcTEEyp2bqv1KAY61glC-SJ29j22g&usqp=CAU',
   'Beru Whitesun lars': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWvtDp0hAddzkuMUk9pVoYwj2bj-UlznK_6w&usqp=CAU',
   'Bworchu Wacahaowochuwh anrarcc': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWvtDp0hAddzkuMUk9pVoYwj2bj-UlznK_6w&usqp=CAU',
   'R5-D4': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROVlzMmw-NSyeCjcEMUhctIZjIWiMcl32wBQ&usqp=CAU',
   'Biggs Darklighter': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSvl1RzS_5Rf5R6ZlqXR73l2zUsGRtelQh_w&usqp=CAU',
   'Bahrrrrc Drarcoranahrracaoworc': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSvl1RzS_5Rf5R6ZlqXR73l2zUsGRtelQh_w&usqp=CAU',
   'Obi-Wan Kenobi': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFMNyRAF6D6YgSGviGbv5VSWzyrAsL67MhSQ&usqp=CAU',
   'Orhah-Wrawh Kwowhoorhah': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFMNyRAF6D6YgSGviGbv5VSWzyrAsL67MhSQ&usqp=CAU',
   'Wilhuff Tarkin': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3H1BBYEv46Ler50CKjr0aOJdWQZaz4LvTTw&usqp=CAU',
   'Wahanachuwwww Trarcorahwh': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3H1BBYEv46Ler50CKjr0aOJdWQZaz4LvTTw&usqp=CAU',
   'Chewbacca': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYAENujKWgYOuyzM1ktqByxVus00C0RsJH_A&usqp=CAU',
   'Han Solo': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdZ3JjBARu5SbZKmeLvQX0QCaKnfV_NacrcA&usqp=CAU',
   'Greedo': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzvTVjZDzpxI1xRxrKU86l23eDyRl3pMyXZQ&usqp=CAU',
   'Jabba Desilijic Tiure': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkMIFCYaOQt-ayR3o8Ftq-eP3_0VmiIve7fg&usqp=CAU',
   'Wedge Antilles': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBoSBWaVDn0wdXtaQ3rGZJkPoJKppziqKdFNyQcBiquYgio6AoMkYpouVQC0kDMjmRPao&usqp=CAU',
   'Jek Tono Porkins': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpwhAw7RgAiIVCUgSIh25JHf8mG4vSSOrUW6UKDGFuczw2gKpfgt3Iq0aXtL5AeqeEj8A&usqp=CAU',
   'Raymus Antilles': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjyyjt2P5Y8yjzdNaj4FjJ_YiGLeRpSJ2a0w&usqp=CAU'
}

