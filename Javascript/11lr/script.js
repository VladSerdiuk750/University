function CheckData()
{
    var ans, number1, number2;
    /*ans = confirm("Ви впевнені, що хочете відправити уведені данні?");
    if(ans) submit;*/
    number1 = document.getElementById("name").value.length;
    number2 = document.getElementById("email").value.length
    if (number1 !=0 && number2 != 0)
    {
        submit;
        alert("Данні були відправлені");
    }
    else
    {
        alert("Введите все поля")
    }
}