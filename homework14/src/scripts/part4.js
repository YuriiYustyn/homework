export async function getRandomChinese(lenght = 6) {
   let acc = ''
   let quanity = lenght
   let chineseSing = () => String.fromCharCode(Date.now().toString().slice(-5))
   let randomSign = () => new Promise((resolve) =>
      setTimeout(() => resolve(chineseSing()), 50))
   while (quanity > 0) {
      acc += await randomSign()
      quanity--
   }
   return acc
}

export let trPlanets = document.createElement('tr')
export async function getPlanets() {
   let reqest = await fetch(`https://swapi.dev/api/starships/?page=1`)
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

export function* createIdGenerator(startSize) {
   let value = startSize
   while (value) {
      let currentValue = yield value
      currentValue === 'up' ? value = value + 1 : true
      currentValue === 'down' ? value = value - 1 : true
   }
}
export let idGenerator = createIdGenerator(14)

export let up = document.querySelector('.up')
export let down = document.querySelector('.down')
