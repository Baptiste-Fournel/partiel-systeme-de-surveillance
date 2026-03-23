export default class LogNotifier {
    constructor(config) {
        this.file = config.file;
    }

    notify(message) {
        console.log(`LogNotifier: Writing to log file ${this.file} with message: "${message}"`);
    }
}