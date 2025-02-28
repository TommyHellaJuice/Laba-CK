import { Transport } from "./Task3";

const owner1 = new Transport.OwnerClass("Сталин", "Анатолий", "Андреевич", new Date(1990, 1, 1), Transport.TypeOfDocument.Passport, "5544", "524520");
const car1 = new Transport.CarImpl("Toyota", "Aboba", 2020, "SGSSE234241", "AFF533", owner1, Transport.BodyType.Sedan, Transport.CarClass.Luxury);
const motorbike1 = new Transport.MotorbikeImpl("Lada", "Granata", 2021, "SHKKGHSOI393", "ZZZ000", owner1, "Sport", true);

const storage = new Transport.VehicleStorageImpl<Transport.Vehicle>();
storage.addVehicle(car1);
storage.addVehicle(motorbike1);

storage.getAllVehicles().forEach(vehicle => vehicle.printInfo());