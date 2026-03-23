import NotificationFactory from "../notifications/NotificationsFactory.js";
import CameraA from "../sensor/CameraA.js";
import ThermalSensorB from "../sensor/ThermalSensorB.js";
import Room from "../room/Room.js";
import TemperatureSensorA from "../sensor/TemperatureSensorA.js";
import ThermalSensorBAdaptater from "../sensor/adaptater/ThermalSensorBAdaptater.js";

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

const room = new Room("Efficom", NotificationFactory.createMany(notificationConfigs))

room.addSensor(new CameraA("Efficom"))
room.addSensor(new ThermalSensorBAdaptater(new ThermalSensorB("Salle 304")))
room.addSensor(new TemperatureSensorA("Efficom", 28))

room.monitor()