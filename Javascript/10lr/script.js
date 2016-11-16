/* Задание 1
var a, y, x, i, R;

R = 1/15;
x = 0;
document.writeln
(
    "<table border = '1'><tr><th>Число виконань</th><th>Значення Х</th><th>Значення Y</th></tr>"
)
for (i=0; i<16; i++)
{
    a = 2;
    y =  (Math.sqrt((a+Math.sin(x)))/Math.pow((4+Math.cos(x)),1/3));    
    document.writeln("<tr><td>" + i + "</td><td>" + x + "</td><td>" + y + "</td></tr>");
    x = x+R;  
}
document.writeln("</table>");
*/

/* Задание 2
var s, t = [], b = [], c = [], l = [], g = [];
for (s=0; s<20; s++)
{
    t[s] = Math.floor((Math.random()*100)+1);
    b[s] = Math.floor((Math.random()*100)+1);
    c[s] = Math.floor((Math.random()*100)+1);
}
for (s=0; s<20; s++)
{
    l[s] = Math.max (t[19-s]+1, b[s]);
    g[s] = Math.max (b[19-s]+1, c[s]);
}
alert(g);
alert(l);
*/