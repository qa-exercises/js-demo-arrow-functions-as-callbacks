function greet(name) {
  console.log(`Hello, ${name}!`)
}

function forEach(array, callbackFunction) {
  for (let element of array) {
    callbackFunction(element)
  }
}

const names = ['Emily', 'Dave', 'Jessica']

forEach(names, greet)
