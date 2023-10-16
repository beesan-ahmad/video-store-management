
export class CategoryService {
    categoryList;
    constructor() {
        this.categoryList = new Array();
    }
    // check if the category is exist 
    isExist(category) {
        let isExist = - 1;
        if (typeof category === 'object') {

            this.categoryList.find((item, index) => {
                if (item.categoryName.toLowerCase() === category.categoryName.toLowerCase()) {
                    isExist = index;
                }
            })
        } else {
            console.log("Please check category object!");
        }
        return isExist;
    }
    //  Add a new category to list 
    addCategory(category) {
        if (category && typeof category === 'object') {
            if (this.isExist(category) === -1) {
                this.categoryList.push(category);
                console.log("category added successfully.");
            }
            else {
                console.log("category already added.");
            }
        } else {
            console.log("Please check name is not valid!");
        }
    }
}

