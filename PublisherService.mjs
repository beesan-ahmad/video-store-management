export class PublisherService {
    publisherList;

    constructor () {
        this.publisherList = new Array();
    }

    // check publisher is Exist 
    isExist(publisher) {
        let isExist = - 1;
        if (typeof publisher === 'object' ) {

            this.publisherList.find((item, index) => {
                if(item.publisherName.toLowerCase() === publisher.publisherName.toLowerCase()) {
                    isExist = index;
                }
            })
        } else {
            console.log("Please check publisher object!");
        }
        return isExist;
    }

    //  Add a new publisher to list 
    addPublisher(publisher) {
        if (publisher && typeof publisher === 'object') {
            if (this.isExist(publisher) === -1) {
                this.publisherList.push(publisher);
                console.log("Publisher added successfuly.");
            }
            else {
                console.log("Publisher alreadey added.");
            }
        } else {
            console.log("Please check name is not valid!");
        }
    }
}