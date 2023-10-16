export class Publisher {
    id;
    publisherName;
    constructor (publisherName) {
        this.id = Math.floor(new Date().valueOf() * Math.random());
        this.publisherName = publisherName;
    }
}