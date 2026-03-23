export default class ThermalSensorBAdaptater {
    constructor(thermalSensorB) {
        this.thermalSensorB = thermalSensorB;
    }

    onDetect(callback) {
        this.thermalSensorB.triggerHeatSignature((payload) => {
            const message = `ThermalSensorBAdaptater onDetect: Detected heat signature at ${payload.sensor} on ${payload.date}`;
            callback(message);
        });
    }
}