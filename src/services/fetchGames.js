// module.exports = {
//  fetchGames: async () => {
//   const response = await fetch('http://localhost:3000/game/5')
//   const games = await response.json();
//   return games;
// }
// }

async function fetchGames() {
  const response = await fetch('http://localhost:3000/game/5')
  const games = await response.json();
  return games;
}

module.export = fetchGames
