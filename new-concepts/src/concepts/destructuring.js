const user = {
  name: 'Mateus',
  age: 21,
  address: {
    city: 'Santa Maria do Herval',
    state: 'RS'
  }
}

const { name, age, address: { city } } = user

console.log(name)
console.log(age)
console.log(city)

function showName({ name, age }) {
  console.log(name, age)
}
showName(user)