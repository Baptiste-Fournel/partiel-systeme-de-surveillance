export default class CameraA {
    constructor(location) {
        this.location = location;
    }

    onDetect(callback) {
        const message = `CameraA at ${this.location} detected movement.`;
        callback(message);
    }
}