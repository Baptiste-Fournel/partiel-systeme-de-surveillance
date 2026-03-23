export default class EmailNotifier {
    constructor(config) {
        this.email = config.email;
    }

    notify(message) {
        console.log(`EmailNotifier: Sending email to ${this.email} with message: "${message}"`);
    }
}