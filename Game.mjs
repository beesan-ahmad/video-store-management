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
}
