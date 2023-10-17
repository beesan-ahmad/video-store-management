export class Game {
    id;
    gameName;
    description;
    publisherCompany;
    category;
    price;
    gameState;
    requirements;
    discountPercentage;
    constructor(gameName, description, publisherCompany, category, price, gameState, requirements, discountPercentage) {
        this.id = Math.floor(new Date().valueOf() * Math.random());
        this.gameName = gameName;
        this.description = description;
        this.publisherCompany = publisherCompany;
        this.category = category;
        this.price = price;
        this.gameState = gameState;
        this.requirements = requirements;
        this.discountPercentage = discountPercentage;
    }

    editGameName(name) {
        this.gameName = name;
    }

    editGameDescription(description) {
        this.description = description;
    }

    editGamePublisherCompany(publisherCompany) {
        this.publisherCompany = publisherCompany;
    }

    editGameCategory(category) {
        this.category = category;
    }

    editGamePrice(price) {
        this.price = price;
    }

    editGameState(gameState) {
        this.gameState = gameState;
    }

    editGameRequirements(requirements) {
        this.requirements = requirements;
    }

    editGameDiscountPercentage(discountPercentage) {
        this.discountPercentage = discountPercentage;
    }

}
