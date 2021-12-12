function fun1(){
    var sel=document.getElementById('mySelect').selectedIndex;
    var options=document.getElementById('mySelect').options;
    alert('you have chouse ' + options[sel].text);
}