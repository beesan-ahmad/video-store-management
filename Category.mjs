export class Category {
    id;
    name;
    constructor(id, name) {
        this.id = id.Math.floor(new Date().valueOf() * Math.random());
        this.name = name;
    }
    addCategory(value) {
        if (!value || !typeof value == "string") {
            let categoryObj = new Category();
            categoryObj.addCategory(value);
        }
    }
}