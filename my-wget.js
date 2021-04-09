const fsPromises = require('fs/promises')
const axios = require('axios')

const main = async () => {
  try {
    let response = await axios.get('https://fr.wikipedia.org/wiki/Akita_(chien)')

    let size = await fsPromises.stat('index.html')
    console.log(size.size)
    // ou: console.log(response.headers)

    await fsPromises.writeFile('index.html', response.data)

  } catch (e) {
    console.log(e.message)
  }
}

main()