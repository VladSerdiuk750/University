document.write("<tr><td>&nbsp;</td>");
for (i=1;i<10;i++) document.write("<td>"+i+"&nbsp;</td>");
document.write("</tr>");
for (i=1;i<10;i++)
{
    document.write("<tr><td>" + i + "&nbsp;</td>");
    for (j=1;j<10;j++)
    {
        document.write("<td    bgcolor='#00ffa0'>"  +  (i*j)  +  "&nbsp;</td>");
    }
    document.write("</tr>");
}

var a,b;
var c = " папуг";
prompt(a);
prompt(b);

alert("a+b="); alert(a+b);
alert("a+c="); alert(a+c);
alert("c+a="); alert (c+a);
alert("a+b+c="); alert(a+b+c);
alert("c+a+b="); alert(c+a+b);