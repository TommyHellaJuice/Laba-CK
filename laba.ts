// 1. Реализация стрелочной функции
const subtract = (a, b) => a - b;

console.log("Разность чисел 10 и 5:", subtract(10, 5)); // 5
console.log("Разность чисел 20 и 7:", subtract(20, 7)); // 13

// 3. Создание объектов с использованием const и let
const constantString = "Hello, World!";
const constantNumber = 42;
const constantBoolean = true;
const constantObject = { name: "Alice", age: 30 };

let variableString = "Initial Value";
let variableNumber = 100; 
let variableBoolean = false; 
let variableArray = [1, 2, 3];

console.log("const переменные:", constantString, constantNumber, constantBoolean, constantObject);
console.log("let переменные:", variableString, variableNumber, variableBoolean, variableArray);

// 4. Преобразование объекта в JSON-строку
interface Entity {
    id: number;
}

interface ToJsonStringify extends Entity {
    e1: number;
    e2: number;
}

const data: ToJsonStringify = {
    id: 5,
    e1: 12345,
    e2: 999,
};

const jsonString = JSON.stringify(data);

console.log("JSON-строка:", jsonString);