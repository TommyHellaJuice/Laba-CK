//Задание 1
interface Iterf {
    model: string;
    year: number;
}
class Transport {
    private trans: Iterf[];

    constructor() {
        this.trans = [];
    }
    addTransport(vehicle: Iterf): void {
        this.trans.push(vehicle);
    }
    sortReverse(): Iterf[] {
        return this.trans.sort((a, b) => {
            if (a.model < b.model) return 1;
            if (a.model > b.model) return -1;
            return 0;
        });
    }
    getModel(model: string): Iterf[] {
        return this.trans.filter(trans => trans.model === model);
    }
}
const cars = new Transport();
cars.addTransport({ model: 'Lada', year: 2006});
cars.addTransport({ model: 'Nissan', year: 1998});
cars.addTransport({ model: 'BMW', year: 2002});
const sorted = cars.sortReverse();
console.log(sorted);

//Задание 2
const model = cars.getModel('Tesla');
console.log(model);

//Задание 3
class Car{
    private Model: string;
    private Year : number;
    private Class : string;
    private Kuzov : string;
    constructor(public model: string, public year: number, public klass: string,public kuzov: string) {
        this.Model = model;
        this.Year = year;
        this.Class = klass;
        this.Kuzov = kuzov;
    }
    getYearAndClass(): string {
        return `Year: ${this.year}, Class: ${this.klass}`;
    }
}

const car = new Car('Lada', 2006, 'econom', 'liftback');
console.log(car.getYearAndClass());