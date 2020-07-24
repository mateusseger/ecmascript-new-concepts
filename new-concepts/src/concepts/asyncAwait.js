const myPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => { 
    resolve('OK')
  }, 2000)
})

// myPromise()
//   .then(response => {
//     console.log(response)
//   })
//   .catch(err => {

//   })

// async function executePromise() {
//   console.log(await myPromise())
//   console.log(await myPromise())
//   console.log(await myPromise())
// }

const executePromise = async () => {
  console.log(await myPromise())
  console.log(await myPromise())
  console.log(await myPromise())
}

executePromise()

//async/await with axios
import axios from 'axios'

class Api {
  static async getUserInfo(username) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`)
      console.log(response)
    } catch (err) {
      console.warn('Erro na API')
    }
  }
}

Api.getUserInfo('mateusseger')