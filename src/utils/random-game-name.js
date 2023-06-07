import games from '../data-structures/games';

const getRandomGameName = () => {
  const gamesCopy = [...games];
  const gameNames = [];

  for (let game of gamesCopy) {
    gameNames.push(game.name);
  }

  const randomIdx = Math.floor(Math.random() * gamesCopy.length);

  return gameNames[randomIdx];
};

export default getRandomGameName;
