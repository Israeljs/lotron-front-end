// const fetch = require('node-fetch')
// const response = require('node-fetch').response

module.exports = {
  gamesFetch: () => {
    const result = fetch('http://localhost:3000/game/2')
    .then((res) => res.json())
    .then((res) => res)

    return result
  }
}
// }module.exports = {
//   gamesFetch: async () => {
//     const response = await fetch('http://localhost:3000/game/2');
//     const data = response;
//     return data
//   }
// }
