const axios = require('axios')
const fsPromises = require('fs/promises')

const main = async () => {
  try {
    const text = await axios.get('https://fr.wikipedia.org/wiki/Black_hat')
    await fsPromises.writeFile('black_hat.html', text.data)
  } catch (e) {
    console.log(e.message)
  }
}

main()