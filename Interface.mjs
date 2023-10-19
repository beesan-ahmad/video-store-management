import { CategoryService } from './CategoryService.mjs';
import { getInput, searchType } from './helper.mjs';
import { GameService } from './GameService.mjs';
import { PublisherService } from './PublisherService.mjs';
import { Publisher } from './Publisher.mjs';
import { Category } from './Category.mjs';

const publisherService = PublisherService;
class Interface {

    gameService = new GameService();
    categoryService = CategoryService;

    publisherService = PublisherService;

    addNewGame() {
        console.log("This function will add a new game");
        const gameName = getInput("Enter game name:");
        const gameObj = {};
        if (gameName && isNaN(gameName) && typeof gameName === 'string') {
            gameObj.gameName = gameName;
        } else {
            console.clear();
            console.log("please enter a valid name \n return the user to add a new game \n***************************");
            this.addNewGame();
        }


        const description = getInput("Enter description:");
        if (description && typeof description === 'string' && isNaN(description)) {
            gameObj.description = description;
        } else {
            console.clear();
            console.log("please enter a valid description \n return the user to add a new game \n***************************");
            this.addNewGame();
        }

        publisherService.publisherList.forEach((company, index) => {
            console.log(`${index + 1}. ${company.publisherName}`);
        });

        if (publisherService.publisherList.length > 0) {
            let newAddedPublisherCompany = getInput("Please choose publisher company number:");

            if (newAddedPublisherCompany && typeof newAddedPublisherCompany === 'string' && newAddedPublisherCompany <= publisherService.publisherList.length) {

                gameObj.company = publisherService.publisherList[newAddedPublisherCompany - 1];

            } else {

                console.clear();
                console.log("please enter a valid publisher company number. \n return the user to add a new game \n***************************");
                this.addNewGame();

            }

        }
        else {
            console.log("Please add publisher.");
        }

        CategoryService.categoryList.forEach((cat, index) => {
            console.log(`${index + 1}. ${cat.categoryName}`);
        });

        if (CategoryService.categoryList.length > 0) {
            let newAddedCategory = getInput("Please choose a category number:");

            if (newAddedCategory && typeof newAddedCategory === 'string' && newAddedCategory <= CategoryService.categoryList.length) {

                gameObj.cat = CategoryService.categoryList[newAddedCategory - 1];
            } else {
                console.clear();
                console.log("please enter a valid category number. \n return the user to add a new game \n***************************");
                this.addNewGame();
            }
        }
        else {
            console.log("Please add category.");
        }

        const price = getInput("Enter price:");
        if (price && typeof price === 'string') {
            gameObj.price = price;
        }
        else {
            console.clear();
            console.log("please enter a valid price. \n return the user to add a new game \n***************************");
            this.addNewGame();
        }

        const gameState = getInput("Enter game state:\n 1- free \n 2-paid\n");
        if (gameState && typeof +gameState === 'number' && +gameState <= 2 && gameState > 0) {
            gameObj.gameState = +gameState === 1 ? "free" : "paid";

        }
        else {
            console.clear();
            console.log("please choose a valid number. \n return the user to add a new game \n***************************");

            this.addNewGame();
        }
        const requirements = getInput("Enter requirements:");
        if (requirements && typeof requirements === 'string' && isNaN(requirements)) {
            gameObj.requirements = requirements;
        } else {
            console.clear();
            console.log("please enter a valid requirements \n return the user to add a new game");
            this.addNewGame();
        }

        const discountPercentage = getInput("Enter discount percentage:");
        if (discountPercentage && typeof discountPercentage === 'string') {
            gameObj.discountPercentage = discountPercentage;
        } else {
            console.clear();
            console.log("please enter a valid discountPercentage \n return the user to add a new game \n***************************");
            this.addNewGame();
        }
        // Call the addNewGame function with the provided parameters
        let checkIfGameAdded = this.gameService.addNewGame(
            gameName,
            description,
            gameObj.company, // Use gameObj.company
            gameObj.cat,
            price,
            gameState,
            requirements,
            discountPercentage
        );
        if (checkIfGameAdded) {
            console.log("The game added successfully");
            console.log(gameObj);
            this.start();
        } else {
            console.log("The game is not added");
        }
        // console.log(gameObj);
    }


    searchBy() {
        console.log("This function will search a game by a specific input:");
        console.log("1- search by game name");
        console.log("2- search by category name");
        console.log("3- publisher company name");
        console.log("4- search by price");
        const gameToSearch = getInput("Choose a number for search to select the type of search :");

        if (gameToSearch == 1) {
            this.gameService.liveSearch(searchType.byGameName);
        } else if (gameToSearch == 2) {
            this.gameService.liveSearch(searchType.byCategory);
        } else if (gameToSearch == 3) {
            this.gameService.liveSearch(searchType.byPublisher);
        } else if (gameToSearch == 4) {
            this.gameService.liveSearch(searchType.byPrice);
        } else {
            console.log("please enter a number between 1-4");
        }

    }
    start() {
        console.log("Enter a number to choose the operation that you want:");
        console.log("1 - Create a new game");
        console.log("2 - Get a list of the games");
        console.log("3 - Edit game");
        console.log("4 - Delete game");
        console.log("5- Add category");
        console.log("6- Add publisher");
        console.log("7- Search by");

        const choice = getInput("Please select an option:");
        if (!choice || typeof +choice !== 'number') {
            console.log("please enter a valid input");
        }

        switch (+choice) {

            case 1:

                this.addNewGame();

                break;
            case 2:
                console.log("This function will git the list of games:");
                console.log(this.gameService.getGameList());
                const map = this.gameService.getGameList().map(((game, index) => {
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

                }));


                this.start();
                break;
            case 3:
                console.log("This function will edit the game according to the user choice:");
                const gameToEdit = getInput("Enter a name of game to edit:");
                if (gameToEdit && isNaN(gameToEdit) && typeof gameToEdit === 'string') {
                    if (this.gameService.editGame(gameToEdit)) {
                        console.log("edit done");
                        this.start();
                    } else {
                        console.log("edit failed");
                    }


                }
                break;


            case 4:
                console.log("This function will delete according to the user choice ");
                const gameToDelete = getInput("Enter a name of game to delete it :");
                if (gameToDelete && isNaN(gameToDelete) && typeof gameToDelete === 'string') {
                    if (this.gameService.deleteGame(gameToDelete)) {
                        console.log("delete done");
                        this.start();
                    } else {
                        console.log("delete failed");
                    }
                }
                break;
            case 5:
                console.log("This function will add a new category:");
                const addNewCategoryName = getInput("Enter a name of category :");
                if (addNewCategoryName && typeof addNewCategoryName === 'string') {
                    let newCategory = new Category(addNewCategoryName);
                    this.categoryService.addCategory(newCategory);
                    console.log("completed adding a category");
                } else {
                    console.log("failed to add a category");
                }
                this.start();
                break;

            case 6:

                console.log("This function will add a new publisher:");
                const addNewPublisherName = getInput("Enter a name of publisher company :");
                if (addNewPublisherName && typeof addNewPublisherName === 'string') {
                    let newPublisher = new Publisher(addNewPublisherName);
                    this.publisherService.addPublisher(newPublisher);
                    console.log("completed adding a publisher ");
                } else {
                    console.log("failed to add a publisher");
                }
                this.start();
                break;

            case 7:
                this.searchBy();

                break;
            default:
                console.log("Invalid choice. Please select a valid option (1-4).");
                break;
        }
    }
}

const interfaceObj = new Interface();

publisherService.addPublisher(new Publisher("amg"));
CategoryService.addCategory(new Category("action"));
interfaceObj.start();