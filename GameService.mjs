import { validationFunction , getInput } from "./helper.mjs";
import { Publisher } from './Publisher.mjs'
import { Category } from './Category.mjs'
import { Game } from './Game.mjs'
import { CategoryService } from "./CategoryService.mjs";
import { PublisherService } from "./PublisherService.mjs"
export class GameService {
    gameList;
    constructor() {
        this.gameList = new Array();
    }

    editGameProperties =  (game) => {
        console.log(game);
        console.log("-------------------------------------------------------------");
        console.log("1- edit game name");
        console.log("2- edit category");
        console.log("3- edit description");
        console.log("4- edit publisherCompany");
        console.log("5- edit price");
        console.log("6- edit gameState");
        console.log("7- edit requirements");
        console.log("8- edit discountPercentage");
        const option =  getInput("Please select option:");
        switch (+option) {
            case 1:
                let newName =  getInput("Please enter new name:");
    
                if (newName && typeof newName === 'string') {
                    game.editGameName(newName);
                } else {
                    console.log("Please enter valid new name:");
                    this.editGame(game.gameName);
                }
                break;
            case 2:
                const categoryService = CategoryService;
                categoryService.categoryList.forEach((category, index) => {
                    console.log(`${index + 1}. ${category.categoryName}`);
                });
    
                if (categoryService.categoryList.length > 0) {
                    let newCatgore =  getInput("Please enter choose category number:");
    
                    if (newCatgore && typeof +newCatgore === 'number' && newCatgore <= categoryService.categoryList.length) {
                        game.editGameCategory(categoryService.categoryList[newCatgore - 1]);
                        console.log(game);
                    } else {
                        console.log("Please enter valid category number.");
                        this.editGame(game.gameName);
                    }
                } else {
                    console.log("Please add category before edit.");
                }
                break;
            case 3:
                let newDescription =  getInput("Please enter new description:");
    
                if (newDescription && typeof newDescription === 'string') {
                    game.editGameDescription(newDescription);
                    console.log(game);
                } else {
                    console.log("Please enter valid new description.");
                    this.editGame(game.gameName);
                }
                break;
            case 4:
                const publicherService = PublisherService;
                publicherService.publisherList.forEach((category, index) => {
                    console.log(`${index + 1}. ${category.categoryName}`);
                });
    
                if (publicherService.publisherList.length > 0) {
                    let newCatgore =  getInput("Please enter choose publisher company number:");
    
                    if (newCatgore && typeof +newCatgore === 'number' && newCatgore <= publicherService.publisherList.length) {
                        game.editGamePublisherCompany(publicherService.publisherList[newCatgore - 1]);
                        console.log(game);
                    } else {
                        console.log("Please enter valid publisher company number.");
                        this.editGame(game.gameName);
                    }
                } else {
                    console.log("Please add publisher company before edit.");
                }
                break;
            case 5:
                let newPrice =  getInput("Please enter new price:");
    
                if (newPrice && typeof +newPrice === 'number' && +newPrice >= 0) {
                    game.editGamePrice(newPrice);
                } else {
                    console.log("Please enter valid new price.");
                    this.editGame(game.gameName);
                }
                break;
            case 6:
                console.log("game state 1-paid  2-free ");
                let newGameState =  getInput("Please choose state:");
    
                if (newGameState && typeof +newGameState === 'number' && +newGameState > 0 && +newGameState <= 2) {
                    game.editGameState(+newGameState === 1 ? true : false);
                    console.log(game);
                } else {
                    console.log("Please enter valid state:");
                    this.editGame(game.gameName);
                }
                break;
            case 7:
                let newRequirements =  getInput("Please enter new requirements:");
    
                if (newRequirements && typeof newRequirements === 'string') {
                    game.editGameRequirements(newRequirements);
                } else {
                    console.log("Please enter valid new requirements:");
                    this.editGame(game.gameName);
                }
                break;
            case 8:
                let newDiscountPercentage =  getInput("Please enter new discount percentage:");
    
                if (newDiscountPercentage && typeof +newDiscountPercentage === 'number' && +newDiscountPercentage > 0) {
                    game.editGameDiscountPercentage(newDiscountPercentage);
                } else {
                    console.log("Please enter valid new discount percentage:");
                    this.editGame(game.gameName);
                }
                break;
            default:
                console.log("Please enter valid option!!");
                this.editGame(game.gameName);
                break;
        }
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
            this.editGameProperties(game);
        } else {
            console.log("Game not found!");
        }
    }
}


