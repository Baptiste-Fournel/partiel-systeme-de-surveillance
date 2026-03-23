import NotificationFactory from "../notifications/NotificationsFactory.js";
import CameraA from "../sensor/CameraA.js";
import ThermalSensorB from "../sensor/ThermalSensorB.js";
import Room from "../room/Room.js";
import TemperatureSensorA from "../sensor/TemperatureSensorA.js";
import ThermalSensorBAdaptater from "../sensor/adaptater/ThermalSensorBAdaptater.js";

const lobbyNotifiers = NotificationFactory.createMany([
    {
        type: "email", email: "onEstLa@tqt.com"
    },
    {
        type: "log", fileName: "lobby.log"
    }
])

const serverRoomNotifiers = NotificationFactory.createMany([
    {
        type: "discord", channel: "ouai ouai"
    }
])

const lobby = new Room("Efficom", lobbyNotifiers)
const serverRoom = new Room("Server Room", serverRoomNotifiers)

lobby.addSensor(new CameraA("Efficom"))
lobby.addSensor(new ThermalSensorBAdaptater(new ThermalSensorB("Salle 305")))
serverRoom.addSensor(new TemperatureSensorA("Efficom", 30))

console.log("Lobby")
lobby.monitor()

console.log("Server Room")
serverRoom.monitor()

const room = new Room("Efficom", lobbyNotifiers)

room.addSensor(new CameraA("Efficom"))
room.addSensor(new ThermalSensorBAdaptater(new ThermalSensorB("Salle 304")))
room.addSensor(new TemperatureSensorA("Efficom", 28))

room.monitor()