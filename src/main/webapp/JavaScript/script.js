function startTime()
{
var today=new Date();
var month = today.getMonth();
var day = today.getDay();
var y=today.getFullYear();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=month + "/" +day +"/"+y+" </br> "+h+":"+m+":"+s;
t=setTimeout(function(){startTime();},500);
}

