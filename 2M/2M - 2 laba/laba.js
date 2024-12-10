var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1. Одномерные массивы:
function maxNegative(arr) {
    var negatives = arr.filter(function (num) { return num < 0; });
    return negatives.length > 0 ? Math.max.apply(Math, negatives) : null;
}
var array = [3, -1, -7, 4, -5];
console.log("Max negative:", maxNegative(array));
// 1. Двумерные массивы: 
function booleanToMatrix(matrix) {
    return matrix.map(function (row) { return row.map(function (value) { return (value ? 1 : 0); }); });
}
var boolMatrix = [
    [true, false, true],
    [false, true, false]
];
console.log("Boolean to Matrix:", booleanToMatrix(boolMatrix));
function formatTuple(tuple) {
    var num = tuple[0], str0 = tuple[1], str1 = tuple[2];
    return "".concat(str1, ": ").concat(str0);
}
var myTuple = [42, "Hello", "World"];
console.log("Formatted Tuple:", formatTuple(myTuple));
// 3. Перечисление для аминокислот
var AminoAcid;
(function (AminoAcid) {
    AminoAcid["Glycine"] = "Glycine";
    AminoAcid["Glutamine"] = "Glutamine";
    AminoAcid["Alanine"] = "Alanine";
})(AminoAcid || (AminoAcid = {}));
console.log("Amino Acid:", AminoAcid.Glycine);
// 4. Дженерики
var Pet = /** @class */ (function () {
    function Pet() {
        this.name = "Some pet";
        this.age = -1;
    }
    Pet.prototype.speak = function () {
        return "No speak. I am fish!";
    };
    return Pet;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = "AngryHunter";
        _this.age = 8;
        return _this;
    }
    Dog.prototype.speak = function () {
        return "Yaw-Gaw!";
    };
    return Dog;
}(Pet));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Barsik";
        _this.age = 2;
        return _this;
    }
    Cat.prototype.speak = function () {
        return "Miyau!";
    };
    return Cat;
}(Pet));
function printPetInfo(pet) {
    console.log({
        name: pet.name,
        age: pet.age,
        speech: pet.speak(),
        additionalInfo: pet instanceof Dog ? pet.label : null
    });
}
var myCat = new Cat();
var myDog = new Dog();
printPetInfo(myCat);
printPetInfo(myDog);
var glycine = {
    type: AminoAcid.Glycine,
    molecularWeight: 75.07,
    abbreviation: "Gly"
};
console.log("Amino Acid Info:", JSON.stringify(glycine, null, 2));
