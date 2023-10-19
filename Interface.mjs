import { CategoryService } from './CategoryService.mjs';
import { getInput } from './helper.mjs';
import { GameService } from './GameService.mjs';
import { PublisherService } from './PublisherService.mjs';
import { Publisher } from './Publisher.mjs';
import { Category } from './Category.mjs';

const publisherService = PublisherService;
class Interface {

    gameService = new GameService();
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
        //************************ */

        publisherService.publisherList.forEach((company, index) => {
            console.log(`${index + 1}. ${company.publisherName}`);
        });

        if (publisherService.publisherList.length > 0) {
            let newAddedPublisherCompany = getInput("Please choose publisher company number:");

            if (newAddedPublisherCompany && typeof newAddedPublisherCompany === 'string' && newAddedPublisherCompany <= publisherService.publisherList.length) {

                gameObj.company = publisherService.publisherList[newAddedPublisherCompany - 1];

            } else {

                // setTimeout(()=>{console.clear();this.addNewGame()}, 1000);

                console.clear();
                console.log("please enter a valid publisher company number. \n return the user to add a new game \n***************************");
                this.addNewGame();

            }

        }
        else {
            console.log("Please add publisher.");
        }
        //this.start();

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
        // this.start();
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

    // gameManagement() {
    //   console.log("game operations");
    // }

    // categoryManagement() {
    //   console.log("categories operations");
    // }

    // publisherManagement() {
    //   console.log("publisher operations");
    // }

    start() {
        console.log("Enter a number to choose a CRUD operation:");
        console.log("1 - Create a new game");
        console.log("2 - Get the game");
        console.log("3 - Edit game");
        console.log("4 - Delete game");
        const choice = getInput("Please select an option:");
        if (!choice || typeof +choice !== 'number') {
            console.log("please enter a valid input");
        }
        console.log(choice);
        console.log(+choice);
        console.log(parseInt(choice));
        switch (+choice) {

            case 1:

                this.addNewGame();

                break;

            case 2:
                //         const editGame = getInput("Enter :");
                // if (requirements && typeof requirements === 'string' && isNaN(requirements)) {
                //     gameObj.requirements = requirements;
                // } else {
                //     console.clear();
                //     console.log("please enter a valid requirements \n return the user to add a new game");
                //     this.addNewGame();
                // }

                //          this.gameService.editGame("ff");
                break;

            case 3:
                // Handle editing a game here
                // Implement code to edit a game
                break;

            case 4:
                // Handle deleting a game here
                // Implement code to delete a game
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