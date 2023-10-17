import { validationFunction , getInput } from "./helper.mjs";
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
    
    editGame(gameName) {
        const game = this.isExist(gameName);
        if (game) {
            console.log(game);
            console.log("-------------------------------------------------------------");
            console.log("1- edit game name");
            console.log("2- edit description");
            console.log("3- edit publisherCompany");
            console.log("4- edit category");
            console.log("5- edit price");
            console.log("6- edit gameState");
            console.log("7- edit requirements");
            console.log("8- edit discountPercentage");
            const option = getInput("please select option:");
            switch (option) {
                case 1:
                    break;
            
                default:
                    break;
            }
        } else {
            console.log("Game not found!");
        }
    }
}
const gameService = new GameService();
const publicherCompany = new Publisher("Apple");
const category = new Category("Action");
gameService.addNewGame("apex", "this game for fun" ,publicherCompany, category, 50, true ,"gpu rtx ",10);
gameService.addNewGame("apex", "this game for fun" ,publicherCompany, category, 50, true ,"gpu rtx ",10);
gameService.editGame("apex");
   //console.log(gameService.getGameList());

