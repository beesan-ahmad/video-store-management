import { Category } from "./Category.mjs";
import { CategoryService } from "./CategoryService.mjs";
import { Publisher } from "./Publisher.mjs";
import { PublisherService } from "./PublisherService.mjs";
import { Interface } from "./interface.mjs";

const interfaceObj = new Interface();

for (let i = 1; i <= 10; i++) {
    PublisherService.addPublisher(new Publisher(`Publisher ${i}`));
}

// Add 10 categories
for (let i = 1; i <= 10; i++) {
    CategoryService.addCategory(new Category(`Category ${i}`));
}

for (let i = 1; i <= 10; i++) {
    interfaceObj.gameService.addNewGame(
        `Game ${i}`,
        `Description of Game ${i}`,
        new Publisher("amg"),
        new Category("action"),
        50, // Set your desired price here
        'paid', // Set the game state accordingly
        "Requirements for Game ${i}",
        10 // Set the discount percentage here
    );
}
interfaceObj.start();