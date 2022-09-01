//string

let text: string = 'hello world';
console.log(text);

//number
let number: number = 5;
console.log(number);

//boolean
let boolean: boolean = true;
console.log(boolean);

//any
let cualquier: any = 'haaa';
cualquier = 123;
cualquier = false;
console.log(cualquier);

//array
let idType: Array<string> = ['cc', 'ti'];
console.log(idType);

let bisiesto: number[] = [2012, 2016, 2020];
console.log(bisiesto);

// both type
let ambos: string | number = 'texto';
ambos = 5;
console.log(ambos);

// Create personality type
type alfanumerico = string | number;
let alfa: alfanumerico = 'prueba';
alfa = 1111;
console.log(alfa);

// let vs var
var num1 = 10;
var num2 = 15;

if (num1 == 10) {
  let num1 = 20;
  var num2 = 50;
  console.log('in if: ' + num1 + num2);
}
console.log('out if: ' + num1 + num2);
