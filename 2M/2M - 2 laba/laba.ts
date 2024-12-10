// 1. Одномерные массивы:
function maxNegative(arr: number[]): number | null {
    const negatives = arr.filter(num => num < 0);
    return negatives.length > 0 ? Math.max(...negatives) : null;
}

const array = [3, -1, -7, 4, -5];
console.log("Max negative:", maxNegative(array));

// 1. Двумерные массивы: 
function booleanToMatrix(matrix: boolean[][]): number[][] {
    return matrix.map(row => row.map(value => (value ? 1 : 0)));
}

const boolMatrix = [
    [true, false, true],
    [false, true, false]
];
console.log("Boolean to Matrix:", booleanToMatrix(boolMatrix));

// 2. Кортеж: Метод для форматирования строк
type MyTuple = [number, string, string];

function formatTuple(tuple: MyTuple): string {
    const [num, str0, str1] = tuple;
    return `${str1}: ${str0}`;
}

const myTuple: MyTuple = [42, "Hello", "World"];
console.log("Formatted Tuple:", formatTuple(myTuple));

// 3. Перечисление для аминокислот
enum AminoAcid {
    Glycine = "Glycine",
    Glutamine = "Glutamine",
    Alanine = "Alanine"
}

console.log("Amino Acid:", AminoAcid.Glycine);

// 4. Дженерики
class Pet {
    name: string = "Some pet";
    age: number = -1;
    speak() {
        return "No speak. I am fish!";
    }
}

class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
        return "Yaw-Gaw!";
    }
}

class Cat extends Pet {
    name = "Barsik";
    age = 2;
    speak() {
        return "Miyau!";
    }
}

function printPetInfo<T extends Pet>(pet: T): void {
    console.log({
        name: pet.name,
        age: pet.age,
        speech: pet.speak(),
        additionalInfo: pet instanceof Dog ? pet.label : null
    });
}

const myCat = new Cat();
const myDog = new Dog();
printPetInfo(myCat); 
printPetInfo(myDog); 

// 5. Тип с использованием перечисления
type AminoAcidInfo = {
    type: AminoAcid;
    molecularWeight: number; 
    abbreviation: string;
};

const glycine: AminoAcidInfo = {
    type: AminoAcid.Glycine,
    molecularWeight: 75.07,
    abbreviation: "Gly"
};

console.log("Amino Acid Info:", JSON.stringify(glycine, null, 2));