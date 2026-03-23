import EmailNotifier from "./EmailNotifier.js";
import LogNotifier from "./LogNotifier.js";
import DiscordNotifier from "./DiscordNotifier.js";

export default class Notifications {
    static create(notificationConfig) {
        const creators = {
            email: () => new EmailNotifier(notificationConfig),
            log: () => new LogNotifier(notificationConfig),
            discord: () => new DiscordNotifier(notificationConfig)
        }

        const creator = creators[notificationConfig.type];
        if (!creator) {
            throw new Error(`Unsupported notification type: ${notificationConfig.type}`);
        }

        return creator();
    }

    static createMany(notificationConfig) {
        return notificationConfig.map(config => Notifications.create(config));
    }
}