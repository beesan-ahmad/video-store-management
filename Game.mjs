class Game {
    id;
    gameName;
    description;
    publicherCompany;
    category;
    price;
    gameState;
    requirments;
    discountPercentage;
    constructor(gameName, description, publicherCompany, category, price, gameState, requirments, discountPercentage) {
        this.gameName = gameName;
        this.description = description;
        this.publicherCompany = publicherCompany;
        this.category = category;
        this.price = price;
        this.gameState = gameState;
        this.requirments = requirments;
        this.discountPercentage=discountPercentage;
    }
}