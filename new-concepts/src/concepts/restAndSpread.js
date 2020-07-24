//REST: take the rest of the properties

const user = {
  name: 'Mateus',
  age: 21,
  company: 'saberTI'
}
const { name, ...rest } = user
console.log(name)
console.log(rest)

function sum(a, b, ...params) {
  return params
}
console.log(sum(1, 2, 3, 4, 5))

//SPREAD: propagates an object's data

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3 = [ ...arr1, ...arr2 ]
console.log(arr3)

const user1 = {
  name: 'Mateus',
  age: 21,
  company: 'saberTI'
}

const user2 = { ...user1, name: 'Gabriel' }
console.log(user2)