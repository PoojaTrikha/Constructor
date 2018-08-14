
const route1 = [2.1, 3.5, 0.3, 5.2]

function kilometerToMile(km) {
  return km / 1.6
}


function routeInMiles(route) {
  // rewrite ...
  const res = []
  for (let i = 0; i < route.length; i++) { // iterate
    const mile = kilometerToMile(route[i]) // ? ..., ? ...
    res[i] = mile                        // keep
  }
  return res
}

function routeInMiles(route) {
    // rewrite ...
    const res = route.map( km => km/1.6)
    return res
  }

console.log('Using Map function',routeInMiles(route1))

// test
console.log(JSON.stringify(routeInMiles(route1)))

function longStretches(route) {
    const res = route.filter(route => route >2)
    return res
  }

console.log('Using Filter function',longStretches(route1))

// test
console.log(JSON.stringify(longStretches(route1)))

function total(route) {
    let res = (accumulator, currentValue) => accumulator + currentValue;
    return (route.reduce(res))
  }

console.log('Using reduce function',total(route1))

// test
console.log(total(route1) === 11.1)