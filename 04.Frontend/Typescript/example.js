"use strict";
class User {
    constructor() {
        this.name = "";
    }
    method() {
        const type = "Deneme1";
    }
}
function myFunction() {
    const age = 10;
}
//any => tüm tipleri kapsar
//boolean => true / false
//number => 10.50 10 50000 -3131321  //99999999999999
//string => metinsel değerler
//date => tarih formatı için kullanılır
//biginit => number'dan daha büyük değerler için kullanılıyor
//symbol => global uniqe identityfier için kullanılıyor
//object => objectler için kullanılır
//type => type yapısı için kullanılır
//Explicit => Açık yöntem
let firstName = "Taner Saydam";
//Implicit => Önerme
let firstName2 = "Taner Saydam";
//firstName2 = 10;
let number;
let number2;
number = true;
number2 = number;
number = 0;
number2 = number;
number = "Value";
number2 = number;
let number3;
let number4;
number3 = 0;
if (typeof number3 === "number") {
    number4 = number3;
}
number3 = "";
number3 = true;
const names = ["Taner", "Merve", "Ersin"];
names.push("Taner");
for (let n of names)
    console.log(n);
const names2 = ["Taner", "Merve", "Ersin"];
//names2.push("Taner");
//infer => anlam çıkartmak
const numbers = [1, 2, 3, 4];
numbers.push(5);
//numbers.push("Taner");
//Tuples 
let ourTuple;
ourTuple = [5, true, ""];
ourTuple.push("asdasdasd");
ourTuple.push(0);
ourTuple.push(1);
ourTuple.push(2);
ourTuple.push(true);
//ourTuple.push(new Date());
//console.log(ourTuple);
let ourTuple2;
//Object
const car = {
    type: "Toyota",
    model: "Coralla",
    year: 2009
};
//car["newType"] = "asdasd";
class CarModel {
    constructor(type, model, year) {
        this.type = type;
        this.model = model;
        this.year = year;
    }
}
const car2 = {
    type: "Toyora",
    model: "Coralla",
    year: 2009
};
//CarModel carModel = new CarModel();
//index Signatures
const nameAgeMap = {};
nameAgeMap.Taner = 25;
nameAgeMap.Ahmet = 30;
//console.log(nameAgeMap);
//enum
var Card;
(function (Card) {
    Card["Most"] = "Most Popular";
    Card["Popular"] = "Popular";
    Card["Best"] = "Best";
})(Card || (Card = {}));
let card = Card.Popular;
//console.log(card);
