const arr = [1, 3, 4, 5, 8, 9]

// const newArr = arr.map(function(item) {
//   return item * 2
// })
const newArr = arr.map(item => item * 2)
console.log(newArr)

const test = () => ({ nome: 'Mateus' })
console.log(test())