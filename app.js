document.write("<h3> Q:-1 </h3>");
var fName = prompt("Enter youer first name ?");
var lName = prompt(" Enter your last name ?");

var fullName= fName+lName;
document.write(fullName);

document.write("<h3> Q:-2 </h3>");

var a= prompt("enter you fav mobile");
document.write(a.length);






document.write("<br>")
document.write("<h3> Q:-3 </h3>");

var pak = 'pakistani'
document.write(typeof(pak)+ ' : ' + pak);
document.write('<br>')
document.write("index of 'n'"+' '+pak.indexOf('n'));


document.write("<br>")
document.write("<h3> Q:-4 </h3>");

var hel = 'Hello world'

document.write(typeof(hel)+ ' : ' + hel);
document.write('<br>')
document.write("last index of 'l' :" +  ' '+hel.lastIndexOf('l'));


document.write("<br>")
document.write("<h3> Q:-5 </h3>");

var pak = 'pakistani'
var chek = '3'
document.write(typeof(pak)+ ' : ' + pak);
document.write('<br>')
document.write("Character at index  "+ chek + ':' + ' '+pak.charAt(3));


document.write("<br>")
document.write("<h3> Q:-6 </h3>");

var fName = prompt("Enter youer first name ?");
var lName = prompt(" Enter your last name ?");

var fullName = fName.concat(" "+lName) 
document.write(fullName);

var pak = 'pakistani'
var chek = 'zindaabad'
 
 var result =pak.concat(' '+ chek);
 
document.write( result);

document.write("<br>")
document.write("<h3> Q:-7 </h3>");


var  str = "Hydarabad";
var a =str.replace("Hydarabad" , " Islamabad");

document.write("<br>"+ "City :"+ str);
document.write("<br> <br>");
document.write("After replacement :" + a);


document.write("<br>")
document.write("<h3> Q:-8 </h3>");

var mes = "Ali and sami are best friends. They play cricket and football together.";

var a = mes.replace(/and/g,'&');

document.write(a);
document.write("<br>");
document.write("<h3> Q:-9 </h3>");


var con = "472";
document.write ("Type :"+typeof( con)+ "<br>"+"value :" + con);
document.write("<br>");

var con = parseInt(con);
document.write("Type :"+typeof(con)+ "<br>"+"value :" + con)

document.write("<br>");
document.write("<h3> Q:-10 </h3>");



var user = prompt("Enter a text");

var a = user.toUpperCase(user);
document.write(a)


document.write("<br>");
document.write("<h3> Q:-11 </h3>");

var user =prompt(" Enter text javascript");
document.write( "user input :" + user + "<br>");
 var a = user.slice(0,1);
 var b = user.slice(1);
 a = a.toUpperCase();
 b = b.toLowerCase();
 var result= a+b;
 document.write("<br>" +"Title case :"+result);


document.write("<br>");
document.write("<h3> Q:-12 </h3>");


var str = "35.36";
document.write("Number :"+" " + str + "<br>");

var a = str.split(".");
document.write("Result :"+a)















