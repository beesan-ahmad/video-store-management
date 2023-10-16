export class Category {
    id;
    categoryName;
    constructor(categoryName) {
        this.id = Math.floor(new Date().valueOf() * Math.random());
        this.categoryName = categoryName;
    }

}