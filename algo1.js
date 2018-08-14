
const route1 = [2.1, 3.5, 0.3, 5.2] // a route of different stretches in kilometers

const distance1 = route1[0]               // ? it will take the value of 0 value in array which is 2.1 ...
const distance1InMiles = distance1 / 1.6  // ? it will calculate the distance1InMile and give answer 2.1/1.6 =.1,312

// what does this function do? ...This function converts the arrays to Mile to Kilometer
function kilometerToMile(km) {
  
     return km / 1.6
}


// what does this function do?  This function gives sum of all the array items...
function total(route) {
  let res = 0
  for (let i = 0; i < route.length; i++) { // iterate
    res += route[i]                      // It will give the sum 11,1...
  }
  return res
}

console.log(total(route1))

// what does this function do? ...
function routeInMiles(route) {
  const res = []       // An empty array was initialised
  for (let i = 0; i < route.length; i++) { // iterate whole the route1 array and move it the res with Kilometer 
    const mile = kilometerToMile(route[i]) // ? .As the function kilometer is called here.., ? ...
    res[i] = mile                        // keep
  }
  return res
}

console.log(routeInMiles(route1))

// what does this function do? ...
function longStretches(route) {
  const res = []
  for (let i = 0; i < route.length; i++) { // iterate all the values of the route1
    let stretch = route[i]               // ? ...
    if (stretch > 2) {                   // check
      res.push(stretch)                // And moves only those arrays value which is bigger then 2
    }
  }
  return res
}

console.log(longStretches(route1))

function averageStretch(route) {
    let res =0;
    for (let i=0;i<route.length;i++){

      res += route[i];
    }
   
    return (res/route.length)
  }
  
console.log('average kilometers per stretch:',averageStretch(route1))