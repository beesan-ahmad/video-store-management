import { validationFunction } from "./helper.mjs";
import { Publisher } from './Publisher.mjs'
import { Category } from './Category.mjs'
import { Game } from './Game.mjs'
class GameService {
    gameList;
    constructor() {
        this.gameList = new Array();
    }

    addNewGame(gameName, description, publicherCompany, category, price, gameState, requirments, discountPercentage) {
        if (validationFunction(gameName, 'string', Object.keys({gameName})[0]) && validationFunction(description, 'string', Object.keys({description})[0])
            && validationFunction(publicherCompany, 'object', Object.keys({publicherCompany})[0]) && validationFunction(category, 'object', Object.keys({category})[0])
            && validationFunction(price, 'number', Object.keys({price})[0]) && validationFunction(gameState, 'boolean', Object.keys({gameState})[0])
            && validationFunction(requirments, 'string', Object.keys({requirments})[0]) && validationFunction(discountPercentage, 'number', Object.keys({discountPercentage})[0])
        ) {
            const newGame = new Game(gameName, description, publicherCompany, category, price, gameState, requirments, discountPercentage);
            this.gameList.push(newGame);
        }

    }
}