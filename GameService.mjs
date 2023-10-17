import { validationFunction } from "./helper.mjs";
import { Publisher } from './Publisher.mjs'
import { Category } from './Category.mjs'
import { Game } from './Game.mjs'
class GameService {
    gameList;
    constructor() {
        this.gameList = new Array();
    }

    // check game is Exist 
    isExist(game) {
        let isExist;
        if (typeof game === 'string') {

            this.gameList.find((item, index) => {
                if (item.gameName.toLowerCase() === game.toLowerCase()) {
                    isExist = item;
                }
            })
        } else {
            console.log("Please check game name!");
        }
        return isExist;
    }

    addNewGame(gameName, description, publisherCompany, category, price, gameState, requirements, discountPercentage) {
        if (this.isExist(gameName) === undefined) {
            const newGame = new Game(gameName, description, publisherCompany, category, price, gameState, requirements, discountPercentage);
            this.gameList.push(newGame);
            return true;
        } else {
            return false;
        }
    }

    getGameList() {
        return this.gameList;
     } 
}


