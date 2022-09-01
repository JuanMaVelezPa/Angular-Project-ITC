//string
var text = 'hello world';
console.log(text);
//number
var number = 5;
console.log(number);
//boolean
var boolean = true;
console.log(boolean);
//any
var cualquier = 'haaa';
cualquier = 123;
cualquier = false;
console.log(cualquier);
//array
var idType = ['cc', 'ti'];
console.log(idType);
var bisiesto = [2012, 2016, 2020];
console.log(bisiesto);
// both type
var ambos = 'texto';
ambos = 5;
console.log(ambos);
var alfa = 'prueba';
alfa = 1111;
console.log(alfa);
// let vs var
var num1 = 10;
var num2 = 15;
if (num1 == 10) {
    var num1_1 = 20;
    var num2 = 50;
    console.log('in if: ' + num1_1 + num2);
}
console.log('out if: ' + num1 + num2);
