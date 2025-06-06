"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Task3_1 = require("./Task3");
var owner1 = new Task3_1.Transport.OwnerClass("Сталин", "Анатолий", "Андреевич", new Date(1990, 1, 1), Task3_1.Transport.TypeOfDocument.Passport, "5544", "524520");
var car1 = new Task3_1.Transport.CarImpl("Toyota", "Aboba", 2020, "SGSSE234241", "AFF533", owner1, Task3_1.Transport.BodyType.Sedan, Task3_1.Transport.CarClass.Luxury);
var motorbike1 = new Task3_1.Transport.MotorbikeImpl("Lada", "Granata", 2021, "SHKKGHSOI393", "ZZZ000", owner1, "Sport", true);
var storage = new Task3_1.Transport.VehicleStorageImpl();
storage.addVehicle(car1);
storage.addVehicle(motorbike1);
storage.getAllVehicles().forEach(function (vehicle) { return vehicle.printInfo(); });