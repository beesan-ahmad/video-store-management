import { CategoryService } from './CategoryService.mjs';
import { getInput } from './helper.mjs';
import { GameService } from './GameService.mjs';
import { PublisherService } from './PublisherService.mjs';
import { Publisher } from './Publisher.mjs';
import { Category } from './Category.mjs';

const publisherService = PublisherService;
class Interface {

    gameService = new GameService();


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
        console.log(choice);
        console.log(+choice);
        switch (+choice) {

            case 1:
                const gameName = getInput("Enter game name:");
                const gameObj = {};
                if (!gameName && typeof gameName === 'string') {
                    gameObj.gameName = gameName;
                }
                const description = getInput("Enter description:");
                if (!description && typeof description === 'string') {
                    gameObj.description = description;
                }

                publisherService.publisherList.forEach((company, index) => {
                    console.log(`${index + 1}. ${company.publisherName}`);
                });

                if (publisherService.publisherList.length > 0) {
                    let newAddedPublisherCompany = getInput("Please choose publisher company number:");

                    if (newAddedPublisherCompany && typeof +newAddedPublisherCompany === 'string' && newAddedPublisherCompany <= publisherService.publisherList.length) {

                        gameObj.company = publisherService.publisherList[newAddedPublisherCompany - 1];
                        console.log(gameObj);
                    }// else {
                    //     console.log("Please enter valid publisher company number.");
                    // }

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

                    if (newAddedCategory && typeof +newAddedCategory === 'string' && newAddedCategory <= CategoryService.categoryList.length) {

                        gameObj.cat = CategoryService.categoryList[newAddedCategory - 1];
                    } //else {
                    //     console.log("Please enter valid category number.");

                    // }
                }
                else {
                    console.log("Please add category.");
                }
                // this.start();
                const price = getInput("Enter price:");
                if (!price && typeof price === 'string') {
                    gameObj.price = price;
                }
                const gameState = getInput("Enter game state:");
                if (!gameState && typeof gameState === 'string') {
                    gameObj.gameState = gameState;
                }
                const requirements = getInput("Enter requirements:");
                if (!requirements && typeof requirements === 'string') {
                    gameObj.requirements = requirements;
                }
                const discountPercentage = getInput("Enter discount percentage:");
                if (!discountPercentage && typeof discountPercentage === 'string') {
                    gameObj.discountPercentage = discountPercentage;
                }
                // Call the addNewGame function with the provided parameters
                this.gameService.addNewGame(
                    gameName,
                    description,
                    gameObj.company, // Use gameObj.company
                    gameObj.cat,
                    price,
                    gameState,
                    requirements,
                    discountPercentage
                );

                break;

            case 2:
                // Handle getting a game here
                // Implement code to get a game
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