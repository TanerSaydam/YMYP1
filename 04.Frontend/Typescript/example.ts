class User{
    name: string = "";
    method(){
        const type: Test = "Deneme1"
    }
}

type Test = "Deneme1" | "Deneme"

type toastrIcon = "warning" | "error" | "success" | "info"

function myFunction(){
    const age: number = 10;    
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
let firstName: string = "Taner Saydam";

//Implicit => Önerme
let firstName2 = "Taner Saydam";
//firstName2 = 10;

let number:any;
let number2: any;

number = true;
number2 = number;

number = 0;
number2 = number;

number = "Value";
number2 = number;

let number3:unknown;
let number4: number;

number3 = 0;
if(typeof number3 === "number"){
    number4 = number3;
}

number3 = "";
number3 = true;

const names: string[] = ["Taner","Merve","Ersin"]
names.push("Taner");
// for(let n of names)
//     console.log(n);

const names2: readonly string[] = ["Taner","Merve","Ersin"]
//names2.push("Taner");

//infer => anlam çıkartmak
const numbers = [1,2,3,4];
numbers.push(5);
//numbers.push("Taner");


//Tuples 
let ourTuple: [number,boolean, string];
ourTuple = [5,true,""];
ourTuple.push("asdasdasd");
ourTuple.push(0);
ourTuple.push(1);
ourTuple.push(2);
ourTuple.push(true);
//ourTuple.push(new Date());
//console.log(ourTuple);


let ourTuple2: readonly [number,boolean, string];


//Object
const car: {type: string, model: string, year:number} = {
    type: "Toyota",
    model: "Coralla",
    year: 2009
};

//car["newType"] = "asdasd";
class CarModel{
    constructor(type:string,model:string,year: number){
        this.type = type;
        this.model = model;
        this.year = year;
    }

    type: string;
    model: string;
    year: number;
}

const car2: CarModel = {
    type: "Toyora",
    model: "Coralla",
    year: 2009
}

//CarModel carModel = new CarModel();

//index Signatures
const nameAgeMap: { [index: string]: number} = {};

nameAgeMap.Taner = 25;
nameAgeMap.Ahmet = 30;

//console.log(nameAgeMap);

//enum
enum Card{
    Most = "Most Popular",
    Popular = "Popular",
    Best = "Best"
}

let card = Card.Popular;

//console.log(card);

//Type Aliases
type CarYear = number;
type CarType = string;
type NewCarModel = string;
type NewCar = {
    year: CarYear,
    type: CarType,
    model: NewCarModel
}

const carYear: CarYear = 2001;
const carType: CarType = "Toyota";
const carModel: NewCarModel = "Corolla";
const newCar: NewCar = {
    year: carYear,
    type: carType,
    model: carModel
}

type Menu = "Menu1" | "Menu2" | "Menu3"
const menu: Menu = "Menu3";

//Interface
interface Reactangle{
    height: number,
    width: number
}


interface ColorReactangle extends Reactangle{
    color: string
}

const reactangle: Reactangle = {
    height: 20,
    width: 10
}

const colorReactangle: ColorReactangle = {
    height: 100,
    color: "red",
    width: 200
}

//Union | (OR)
let newVariable: string | undefined | number | boolean;
const newVariable2: (string | undefined) = "undefined";

function getTime(): number{
    return new Date().getTime();
}

function printHello(): void{
    console.log("İşem Tamamlandı")
}

function multiply(a: number,b: number, c: number = 10, d?: number): number{
    return a * b;
}

multiply(1,2);

type User2 = (value: number) => number;

const userFunction:  User2 = (value) => value * -1;

let x: unknown = "Hello World";
console.log((x as string).length);