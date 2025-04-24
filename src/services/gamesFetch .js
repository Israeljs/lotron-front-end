module.exports = {
  gamesFetch: async () => {
    const response = await fetch('http://localhost:3000/game/10');
    const data = await response.json();
    return data
  }
}
