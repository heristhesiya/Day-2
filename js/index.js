console.log('Day - 2')
console.log('Functions')

// according to syntex

var x = myFunction(4, 3)
document.getElementById('demo').innerHTML = x

function myFunction(a, b) {
  return a * b
}

// in cansole
var name1 = 'Karan'
var name2 = 'Heris'
function greet(name, thank) {
  console.log(`happy birthday ${name} i wish ${thank}`)
}

greet(name2, 'thanks a lot')
greet(name1, 'thanks a lot')

// another way with anonymous function

let Hello = function () {
  console.log('congo for buy a new car')
  console.log('congo heris')
}
Hello()

// with params
let Hello1 = function (name) {
  console.log(`congo for buy a new car ${name}`)
}
Hello1('heris')

// another example
function sum(a, b, c) {
  let d = a + b + c
  return d
}
let result = sum(1, 2, 3)
console.log(result)
