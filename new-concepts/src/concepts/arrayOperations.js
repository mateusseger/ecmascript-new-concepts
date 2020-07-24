const arr = [1, 3, 4, 5, 8, 9]

//return a new array
const newArr = arr.map(function(item, index) {
  return item + index
})
console.log(newArr)

//returns only one information
const sum = arr.reduce(function(total, next) {
  return total + next
})
console.log(sum)

//filters the values
const filter = arr.filter(function(item) {
  return item % 2 === 0
})
console.log(filter)

//checks for specific information
const find = arr.find(function(item) {
  return item === 4
})
console.log(find)