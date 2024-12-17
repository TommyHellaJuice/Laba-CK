enum TypeDocument
{
    Passport = "Паспорт",
    DriverLicense = "Водительское удостоверение",
    IDCard = "Удостоверение личности"
}


interface Owner
{
    lastName: string;
    firstName: string;
    middleName: string;
    birthDate: Date;
    typeDocument: TypeDocument;
    documentSeries: string;
    documentNumber: string;

    printOwnerInfo(): void;
}


interface Vehicle
{
    brand: string;
    model: string;
    year: number;
    vin: string;
    registrationNumber: string;
    owner: Owner;

    printVehicleInfo(): void;
}


class OwnerClass implements Owner
{
    private _lastName: string;
    private _firstName: string;
    private _middleName: string;
    private _birthDate: Date;
    private _typeDocument: TypeDocument;
    private _documentSeries: string;
    private _documentNumber: string;

    
    constructor(
        lastName: string,
        firstName: string,
        middleName: string,
        birthDate: Date,
        typeDocument: TypeDocument,
        documentSeries: string,
        documentNumber: string
    )
    {
        this._lastName = lastName;
        this._firstName = firstName;
        this._middleName = middleName;
        this._birthDate = birthDate;
        this._typeDocument = typeDocument;
        this._documentSeries = documentSeries;
        this._documentNumber = documentNumber;
    }


    get lastName(): string {return this._lastName;}
    set lastName(value: string) {this._lastName = value;}


    get firstName(): string {return this._firstName;}
    set firstName(value: string) {this._firstName = value;}


    get middleName(): string {return this._middleName;}
    set middleName(value: string) {this._middleName = value;}


    get birthDate(): Date {return this._birthDate;}
    set birthDate(value: Date) {this._birthDate = value;}


    get typeDocument(): TypeDocument {return this._typeDocument;}
    set typeDocument(value: TypeDocument) {this._typeDocument = value;}


    get documentSeries(): string {return this._documentSeries;}
    set documentSeries(value: string) {this._documentSeries = value;}


    get documentNumber(): string {return this._documentNumber;}
    set documentNumber(value: string) {this._documentNumber = value;}


    printOwnerInfo(): void
    {
        console.log(`Фамилия: ${this._lastName}`);
        console.log(`Имя: ${this._firstName}`);
        console.log(`Отчество: ${this._middleName}`);
        console.log(`Дата рождения: ${this._birthDate.toLocaleDateString()}`);
        console.log(`Тип документа: ${this._typeDocument}`);
        console.log(`Серия документа: ${this._documentSeries}`);
        console.log(`Номер документа: ${this._documentNumber}`);
    }
}


class VehicleClass implements Vehicle
{
    private _brand: string;
    private _model: string;
    private _year: number;
    private _vin: string;
    private _registrationNumber: string;
    private _owner: Owner;


    constructor(
        brand: string,
        model: string,
        year: number,
        vin: string,
        registrationNumber: string,
        owner: Owner
    )
    {
        this._brand = brand;
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
    }


    get brand(): string {return this._brand;}
    set brand(value: string) {this._brand = value;}


    get model(): string {return this._model;}
    set model(value: string) {this._model = value;}


    get year(): number {return this._year;}
    set year(value: number) {this._year = value;}


    get vin(): string {return this._vin;}
    set vin(value: string) {this._vin = value;}


    get registrationNumber(): string {return this._registrationNumber;}
    set registrationNumber(value: string) {this._registrationNumber = value;}


    get owner(): Owner {return this._owner;}
    set owner(value: Owner) {this._owner = value;}


    printVehicleInfo(): void
    {
        console.log(`Марка: ${this._brand}`);
        console.log(`Модель: ${this._model}`);
        console.log(`Год выпуска: ${this._year}`);
        console.log(`VIN-номер: ${this._vin}`);
        console.log(`Регистрационный номер: ${this._registrationNumber}`);
    }
}





//          2 задание
enum BodyType
{
    Sedan = "Седан",
    Hatchback = "Хэтчбек",
    SUV = "Внедорожник",
    Coupe = "Купе",
    Convertible = "Кабриолет"
}


enum CarClass
{
    Economy = "Эконом",
    Compact = "Компактный",
    Luxury = "Люкс",
    Sport = "Спортивный"
}


interface Car extends Vehicle
{
    bodyType: BodyType;
    carClass: CarClass;
}


interface Motorbike extends Vehicle
{
    frameType: string;
    isForSport: boolean;
}


class CarClassImpl implements Car
{
    private _brand: string;
    private _model: string;
    private _year: number;
    private _vin: string;
    private _registrationNumber: string;
    private _owner: Owner;
    private _bodyType: BodyType;
    private _carClass: CarClass;

    constructor(
        brand: string,
        model: string,
        year: number,
        vin: string,
        registrationNumber: string,
        owner: Owner,
        bodyType: BodyType,
        carClass: CarClass
    )
    {
        this._brand = brand;
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
        this._bodyType = bodyType;
        this._carClass = carClass;
    }


    get brand(): string {return this._brand;}
    set brand(value: string) {this._brand = value;}


    get model(): string {return this._model;}
    set model(value: string) {this._model = value;}


    get year(): number {return this._year;}
    set year(value: number) {this._year = value;}


    get vin(): string {return this._vin;}
    set vin(value: string) {this._vin = value;}


    get registrationNumber(): string {return this._registrationNumber;}
    set registrationNumber(value: string) {this._registrationNumber = value;}


    get owner(): Owner {return this._owner;}
    set owner(value: Owner) {this._owner = value;}


    get bodyType(): BodyType {return this._bodyType;}
    set bodyType(value: BodyType) {this._bodyType = value;}


    get carClass(): CarClass {return this._carClass;}
    set carClass(value: CarClass) {this._carClass = value;}


    printVehicleInfo(): void
    {
        console.log(`Марка: ${this._brand}`);
        console.log(`Модель: ${this._model}`);
        console.log(`Год выпуска: ${this._year}`);
        console.log(`VIN-номер: ${this._vin}`);
        console.log(`Регистрационный номер: ${this._registrationNumber}`);
        console.log(`Тип кузова: ${this._bodyType}`);
        console.log(`Класс автомобиля: ${this._carClass}`);
    }
}


class MotorbikeClassImpl implements Motorbike
{
    private _brand: string;
    private _model: string;
    private _year: number;
    private _vin: string;
    private _registrationNumber: string;
    private _owner: Owner;
    private _frameType: string;
    private _isForSport: boolean;

    constructor(
        brand: string,
        model: string,
        year: number,
        vin: string,
        registrationNumber: string,
        owner: Owner,
        frameType: string,
        isForSport: boolean
    )
    {
        this._brand = brand;
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
        this._frameType = frameType;
        this._isForSport = isForSport;
    }


    get brand(): string {return this._brand;}
    set brand(value: string) {this._brand = value;}


    get model(): string {return this._model;}
    set model(value: string) {this._model = value;}


    get year(): number {return this._year;}
    set year(value: number) {this._year = value;}


    get vin(): string {return this._vin;}
    set vin(value: string) {this._vin = value;}


    get registrationNumber(): string {return this._registrationNumber;}
    set registrationNumber(value: string) {this._registrationNumber = value;}


    get owner(): Owner {return this._owner;}
    set owner(value: Owner) {this._owner = value;}


    get frameType(): string {return this._frameType;}
    set frameType(value: string) {this._frameType = value;}


    get isForSport(): boolean {return this._isForSport;}
    set isForSport(value: boolean) {this._isForSport = value;}


    printVehicleInfo(): void
    {
        console.log(`Марка: ${this._brand}`);
        console.log(`Модель: ${this._model}`);
        console.log(`Год выпуска: ${this._year}`);
        console.log(`VIN-номер: ${this._vin}`);
        console.log(`Регистрационный номер: ${this._registrationNumber}`);
        console.log(`Тип рамы: ${this._frameType}`);
        console.log(`Для спорта: ${this._isForSport ? "Да" : "Нет"}`);
    }
}





//          3 задание
interface VehicleStorage<T extends Vehicle>
{
    creationDate: Date;
    vehicles: T[];

    getAllVehicles(): T[];
}


class VehicleStorageImpl<T extends Vehicle> implements VehicleStorage<T>
{
    private _creationDate: Date;
    private _vehicles: T[];


    constructor(creationDate: Date, vehicles: T[])
    {
        this._creationDate = creationDate;
        this._vehicles = vehicles;
    }


    get creationDate(): Date {return this._creationDate;}
    set creationDate(value: Date) {this._creationDate = value;}


    get vehicles(): T[] {return this._vehicles;}
    set vehicles(value: T[]) {this._vehicles = value;}


    getAllVehicles(): T[]
    {
        return this._vehicles;
    }
}


//          1
const ownerVehicle = new OwnerClass(
    "Иванов",
    "Иван",
    "Иванович",
    new Date(1980, 5, 15),
    TypeDocument.Passport,
    "1234",
    "567890"
);

const vehicle = new VehicleClass(
    "Toyota",
    "Camry",
    2020,
    "1HGCM82633A123456",
    "A123BC",
    ownerVehicle
);

ownerVehicle.printOwnerInfo();
console.log();
vehicle.printVehicleInfo();
console.log();
console.log();



//          2
const ownerVehicles = new OwnerClass(
    "Иванов",
    "Иван",
    "Иванович",
    new Date(1980, 5, 15),
    TypeDocument.Passport,
    "1234",
    "567890"
);

const car = new CarClassImpl(
    "Toyota",
    "Camry",
    2020,
    "1HGCM82633A123456",
    "A123BC",
    ownerVehicles,
    BodyType.Sedan,
    CarClass.Luxury
);

const motorbike = new MotorbikeClassImpl(
    "Honda",
    "CBR600RR",
    2019,
    "JH2SC4513KK123456",
    "M123AB",
    ownerVehicles,
    "Треугольная",
    true
);

car.printVehicleInfo();
console.log();
motorbike.printVehicleInfo();
console.log();
console.log();



//          3
const ownerAllVehicles = new OwnerClass(
    "Иванов",
    "Иван",
    "Иванович",
    new Date(1980, 5, 15),
    TypeDocument.Passport,
    "1234",
    "567890"
);

const car1 = new CarClassImpl(
    "Toyota",
    "Camry",
    2020,
    "1HGCM82633A123456",
    "A123BC",
    ownerAllVehicles,
    BodyType.Sedan,
    CarClass.Luxury
);

const car2 = new CarClassImpl(
    "Honda",
    "Accord",
    2018,
    "1HGCM82633A654321",
    "B456CD",
    ownerAllVehicles,
    BodyType.Hatchback,
    CarClass.Economy
);

const motorbike1 = new MotorbikeClassImpl(
    "Honda",
    "CBR600RR",
    2019,
    "JH2SC4513KK123456",
    "M123AB",
    ownerAllVehicles,
    "Треугольная",
    true
);

const motorbike2 = new MotorbikeClassImpl(
    "Yamaha",
    "YZF-R1",
    2021,
    "JY1MS4513KK654321",
    "M789EF",
    ownerAllVehicles,
    "Монокок",
    false
);

const carStorage = new VehicleStorageImpl<Car>(new Date(), [car1, car2]);
const motorbikeStorage = new VehicleStorageImpl<Motorbike>(new Date(), [motorbike1, motorbike2]);

console.log("Автомобили в хранилище:");
carStorage.getAllVehicles().forEach((car) => car.printVehicleInfo());
console.log();
console.log("Мотоциклы в хранилище:");
motorbikeStorage.getAllVehicles().forEach((motorbike) => motorbike.printVehicleInfo());