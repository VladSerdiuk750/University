/* Пример
var first, second;
first = window.prompt("Уведіть перше число", "0");
second = window.prompt("Уведіть друге число", "0");
alert("Результати порівняння");
if (first==second)
alert(first + " == " + second);
if (first != second)
alert(first + " != " + second);
if (first < second) 
alert(first + " < " + second);
if (first > second) 
alert(first + " > " + second);
if (first <= second) 
alert(first + " <= " + second);
if (first >= second) 
alert(first + " >= " + second);
*/

/* Задание 1
var N, hour, minutes;
N = window.prompt("Уведіть кількість секунд", "0");
hour = N / 3600;
alert("В заданій кількості секунд " + Math.floor(hour) + " годин");
*/

/* Задание 2
var x1, x2, y1, y2;
x1 = window.prompt("Уведіть координати першої точки по х","0");
y1 = window.prompt("Уведіть координати першої точки по у","0");
x2 = window.prompt("Уведіть координати другої точки по х","0");
y2 = window.prompt("Уведіть координати другої точки по у","0");

if (x1>x2)
{
    alert("Друга точка знаходиться ближче до початку координат");
    alert("Її координати " + x2 + ";" + y2);
}
else 
{
    if (x1=x2)
    {
        alert("Точки рівновіддалені");
        alert("Координати точки " + x1 + ";" + y1);
    } 
    else
    {
        if(x1<x2)
        {
            alert("Перша точка знаходиться ближче до початку координат");
            alert("Координати точки " + x1 + ";" + y1);
        }
    }
}
*/

/* Задание 3
var a, b, c, S1, S2, S3;
a = window.prompt("Уведіть значення першої сторони","0");
b = window.prompt("Уведіть значення другої сторони","0");
c = window.prompt("Уведіть значення третьої сторони","0");
S1 = a+b;
S2 = a+c;
S3 = b+c;
if (c>S1)
{
    if (b>S2)
    {
        if (a>S3)
        {
            alert("Трикутник може існувати");
        }
        else
        {
            alert("Трикутник не може існувати");
        }
    }
    else
    {
        alert("Трикутник не може існувати");
    }
}
else
{
    alert("Трикутник не може існувати");
}
*/