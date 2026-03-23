export default class Room {
    constructor(name, notifiers, sensors) {
        this.name = name;
        this.notifiers = notifiers;
        this.sensors = []
    }

    addSensor(sensor) {
        this.sensors.push(sensor);
    }

    monitor() {
        this.sensors.forEach(sensor => {
            sensor.onDetect((message) => {
                this.notifyAll(`[${this.name}] ${message}`);
            })
        })
    }

    notifyAll(message) {
        this.notifiers.forEach((notifier) => notifier.notify(message))
    }
}