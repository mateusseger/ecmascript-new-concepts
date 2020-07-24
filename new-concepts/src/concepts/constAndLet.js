//const
const x = 1
x = 2

const user = { name: 'Mateus' }
user.name = 'Pedro'
console.log(user)

//let
function test() {
  let y = 2
  if (x > 5 ) {
    let y = 4
    console.log(x, y)
  }
}

console.log(y)

test(10)