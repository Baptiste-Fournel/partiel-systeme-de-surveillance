export default class DiscordNotifier {
    constructor(config) {
        this.message = config.message;
    }

    notify(message) {
        console.log(`DiscordNotifier: Sending message to Discord channel with content: "${message}"`);
    }
}