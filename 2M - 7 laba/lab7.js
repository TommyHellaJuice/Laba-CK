var Transport = /** @class */ (function () {
    function Transport() {
        this.trans = [];
    }
    Transport.prototype.addTransport = function (vehicle) {
        this.trans.push(vehicle);
    };
    Transport.prototype.sortReverse = function () {
        return this.trans.sort(function (a, b) {
            if (a.model < b.model)
                return 1;
            if (a.model > b.model)
                return -1;
            return 0;
        });
    };
    Transport.prototype.getModel = function (model) {
        return this.trans.filter(function (trans) { return trans.model === model; });
    };
    return Transport;
}());
var cars = new Transport();
cars.addTransport({ model: 'Lada', year: 2006 });
cars.addTransport({ model: 'Nissan', year: 1998 });
cars.addTransport({ model: 'BMW', year: 2002 });
var sorted = cars.sortReverse();
console.log(sorted);
//Задание 2
var model = cars.getModel('Tesla');
console.log(model);
//Задание 3
var Car = /** @class */ (function () {
    function Car(model, year, klass, kuzov) {
        this.model = model;
        this.year = year;
        this.klass = klass;
        this.kuzov = kuzov;
        this.Model = model;
        this.Year = year;
        this.Class = klass;
        this.Kuzov = kuzov;
    }
    Car.prototype.getYearAndClass = function () {
        return "Year: ".concat(this.year, ", Class: ").concat(this.klass);
    };
    return Car;
}());
var car = new Car('Lada', 2006, 'econom', 'liftback');
console.log(car.getYearAndClass());