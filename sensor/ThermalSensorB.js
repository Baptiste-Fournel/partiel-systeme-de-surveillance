export default class ThermalSensorB {
    constructor(position) {
        this.position = position;
    }

    triggerHeatSignature(process) {
        const payload = {
            sensor: this.position,
            detection: "termal",
            date: new Date().toISOString(),
        }

        process(payload);
    }
}