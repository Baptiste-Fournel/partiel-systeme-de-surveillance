import NotificationFactory from "../notifications/NotificationsFactory.js";

const notificationConfigs = [
    {
        type: "email",
        email: "onEstLa@tqt.com"
    },
    {
        type: "log",
        fileName: "tqt.log"
    },
    {
        type: "discord",
        channel: "ouai ouai"
    }
]

const notifiers = NotificationFactory.createMany(notificationConfigs)

notifiers.forEach((notifier) => notifier.notify("Test factory"))