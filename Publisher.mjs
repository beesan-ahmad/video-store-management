export class Publisher {
    id;
    publisherName;
    constructor () {
        this.id = Math.floor(new Date().valueOf() * Math.random());
    }

    addPublisher(publisherName) {
        if (publisherName && typeof publisherName === 'string') {
            this.publisherName = publisherName;
            console.log("add done.");
        } else {
            console.log("please check name is not valid!");
        }
    }
}