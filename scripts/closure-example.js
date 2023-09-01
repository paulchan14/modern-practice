export default function createGameCatalog(listOfGames = []) {
	// This variable will not be accessible globally because it is only within the scope of the function
	let gameList = listOfGames;

	// By returning this object of methods, I can access the gameList and adjust accordingly.
	return {
		addGame: function (game) {
			gameList.push(game);
		},

		removeGame: function (gameId) {
			gameList = gameList.filter((game) => game.id !== gameId);
		},

		getGameById: function (gameId) {
			return gameList.find((game) => game.id === gameId);
		},

		getGames: function () {
			return gameList;
		},
	};
}
