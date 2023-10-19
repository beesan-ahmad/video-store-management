import { validationFunction, searchType, getInput } from "./helper.mjs";
import { Publisher } from './Publisher.mjs'
import { Category } from './Category.mjs'
import { Game } from './Game.mjs'
import { CategoryService } from "./CategoryService.mjs";
import { PublisherService } from "./PublisherService.mjs"
import readlineSync from 'readline-sync';
export class GameService {
    gameList;
    constructor() {
        this.gameList = new Array();
    }

    editGameProperties = (game) => {
        console.log(`
Game Information:
----------------
ID: ${game.id}
Game Name: ${game.gameName}
Description: ${game.description}
Publisher: ${game.publisherCompany.publisherName} (ID: ${game.publisherCompany.id})
Category: ${game.category.categoryName} (ID: ${game.category.id})
Price: $${game.price}
Game State: ${game.gameState}
Requirements: ${game.requirements}
Discount Percentage: ${game.discountPercentage}%
                        `);
        console.log("-------------------------------------------------------------");
        console.log("1- edit game name");
        console.log("2- edit category");
        console.log("3- edit description");
        console.log("4- edit publisherCompany");
        console.log("5- edit price");
        console.log("6- edit gameState");
        console.log("7- edit requirements");
        console.log("8- edit discountPercentage");
        console.log("9- go back");
        const option = getInput("Please select option:");
        switch (+option) {
            case 1:
                let newName = getInput("Please enter new name:");
    
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
                    let catgoreNumber = getInput("Please enter choose category number:");
    
                    if (catgoreNumber && typeof +catgoreNumber === 'number' && catgoreNumber <= categoryService.categoryList.length && catgoreNumber > 0) {
                        game.editGameCategory(categoryService.categoryList[catgoreNumber - 1]);
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
                let newDescription = getInput("Please enter new description:");
    
                if (newDescription && typeof newDescription === 'string') {
                    game.editGameDescription(newDescription);
                    console.log(game);
                } else {
                    console.log("Please enter valid new description.");
                    this.editGame(game.gameName);
                }
                break;
            case 4:
                const publisherService = PublisherService;
                publisherService.publisherList.forEach((publisher, index) => {
                    console.log(`${index + 1}. ${publisher.publisherName}`);
                });
    
                if (publisherService.publisherList.length > 0) {
                    let publisherNumber = getInput("Please enter choose publisher company number:");
    
                    if (publisherNumber && typeof +publisherNumber === 'number' && publisherNumber <= publisherService.publisherList.length && publisherNumber > 0) {
                        game.editGamePublisherCompany(publisherService.publisherList[publisherNumber - 1]);
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
                let newPrice = getInput("Please enter new price:");
    
                if (newPrice && typeof +newPrice === 'number' && +newPrice >= 0) {
                    game.editGamePrice(newPrice);
                } else {
                    console.log("Please enter valid new price.");
                    this.editGame(game.gameName);
                }
                break;
            case 6:
                console.log("game state 1- paid  2- free ");
                let newGameState = getInput("Please choose state:");
    
                if (newGameState && typeof +newGameState === 'number' && +newGameState > 0 && +newGameState <= 2) {
                    game.editGameState(+newGameState === 1 ? 'paid' : 'free');
                    console.log(game);
                } else {
                    console.log("Please enter valid state:");
                    this.editGame(game.gameName);
                }
                break;
            case 7:
                let newRequirements = getInput("Please enter new requirements:");
    
                if (newRequirements && typeof newRequirements === 'string') {
                    game.editGameRequirements(newRequirements);
                } else {
                    console.log("Please enter valid new requirements:");
                    this.editGame(game.gameName);
                }
                break;
            case 8:
                let newDiscountPercentage = getInput("Please enter new discount percentage:");
    
                if (newDiscountPercentage && typeof +newDiscountPercentage === 'number' && +newDiscountPercentage > 0) {
                    game.editGameDiscountPercentage(newDiscountPercentage);
                } else {
                    console.log("Please enter valid new discount percentage:");
                    this.editGame(game.gameName);
                }
                break;
                case 9:
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
            return true;
        } else {
            console.log("Game not found!");
            return false;
        }
    }

    deleteGame(gameName) {
        const game = this.isExist(gameName);
        if (game) {
            this.gameList.splice(this.gameList.indexOf(game),1);
            return true;
        } else {
            console.log("Game not found!");
            return false;
        }
    }

    async liveSearch(by) {
        let filteredData;

        console.log('Type your search query and press Enter to search. Type "0" and press Enter to stop search.');
        const searchQuery = readlineSync.question(`Search by ${by}: `);

        if (searchQuery === "0") {
            console.log("search stop.");
            return;
        } else {
            if (by === 'game name') {
                filteredData = this.gameList.filter(item => item.gameName?.toLowerCase().includes(searchQuery?.toLowerCase()));
            } else if (by === 'category name') {
                filteredData = this.gameList.filter(item => item.category.categoryName?.toLowerCase().includes(searchQuery?.toLowerCase()));
            } else if (by === 'publisher company name') {
                filteredData = this.gameList.filter(item => item.publisherCompany.publisherName?.toLowerCase().includes(searchQuery?.toLowerCase()));
            } else {
                filteredData = this.gameList.filter(item => item.price <= +searchQuery);
            }

            if (filteredData.length > 0) {
                console.log('Results:');
              await  filteredData.forEach((game, index) => {
                    console.log(`
Game ${index + 1} Information:
----------------
ID: ${game.id}
Game Name: ${game.gameName}
Description: ${game.description}
Publisher: ${game.publisherCompany.publisherName} (ID: ${game.publisherCompany.id})
Category: ${game.category.categoryName} (ID: ${game.category.id})
Price: $${game.price}
Game State: ${game.gameState}
Requirements: ${game.requirements}
Discount Percentage: ${game.discountPercentage}%
                        `);
                });
    console.log(`To perform an operation on a specific game,
   - To modify it, Type "1" and press Enter.
   - To delete, Type "2" and press Enter 
   - To stop the search, Type "0" and press Enter`);
                let option = getInput("Please choose option:");
               
                if (+option === 1) {
                    let gameNumber = getInput("Please Enter game number want modify:");

                    if (+gameNumber <= filteredData.length && +gameNumber > 0) {
                        this.editGame(filteredData[gameNumber - 1]?.gameName);
                    } else {
                        console.log("Please enter valid game number!");
                    }
                } else if (+option === 2) {
                    let gameNumber = getInput("Please Enter game number want delete:");

                    if (+gameNumber <= filteredData.length && +gameNumber > 0) {
                        this.deleteGame(filteredData[gameNumber - 1]?.gameName);
                    } else {
                        console.log("Please enter valid game number!");
                    }
                } else {
                    return;
                }
                
            } else {
                console.log('No results found.');
            }
            this.liveSearch(by);
        }
    }
}

// const gameService = new GameService();
//     const publicherCompany = new Publisher("Apple");
//     const category = new Category("Action");
//     const categoryService = CategoryService;
//     categoryService.addCategory(category);
//     gameService.addNewGame("apex", "this game for fun" ,publicherCompany, category, 50, true ,"gpu rtx ",10);
//     gameService.addNewGame("apex2", "this game for fun" ,publicherCompany, category, 50, true ,"gpu rtx ",10);
//     //gameService.deleteGame("apex");
//    // gameService.editGame("apex");
//        //console.log(gameService.getGameList());
//     gameService.liveSearch(searchType.byPrice);
