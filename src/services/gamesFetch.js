const fetch = require('node-fetch')

module.exports = {
  gamesFetch: async () => {
    const response = await fetch('http://localhost:3000/game/10');
    const data = response.json();
    return data
  }
}
