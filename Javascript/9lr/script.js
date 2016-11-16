/* Задания 1
var arrays = [
    a = Math.floor((Math.random()*100)+1),
    b = Math.floor((Math.random()*100)+1),
    c = Math.floor((Math.random()*100)+1),
    d = Math.floor((Math.random()*100)+1),
    e = Math.floor((Math.random()*100)+1),
    f = Math.floor((Math.random()*100)+1)
];

alert("Числа: " + a + "  " + b + "  " + c + "  " + d + "  " + e + "  " + f);
alert("Максимальне число: " + Math.max(a, b, c, d, e, f));
*/

/* Задание 2
var a, F;
a = window.prompt("Введите цифру факториал которого из чисел вы хотите найти(4-9): ","0");
switch (a){
    case "4":
    {
        F = 2*3*4;
        document.writeln("4!= " + F);
        break;
    } 
    case "5":
    {
        F = 2*3*4*5;
        document.writeln("5!= " + F);
        break;
    }
    case "6":
    {
        F = 2*3*4*5*6;
        document.writeln("6!= " + F);
        break;
    }
    case "7":
    {
        F = 2*3*4*5*6*7;
        document.writeln("7!= " + F);
        break;
    }
    case "8":
    {
        F = 2*3*4*5*6*7*8;
        document.writeln("8!= " + F);
        break;
    }
    case "9":
    {
        F = 2*3*4*5*6*7*8*9;
        document.writeln("9!= " + F);
        break;
    }
    default: 
    {
        alert("Число повинно бути від 4-9");
    }
}
*/