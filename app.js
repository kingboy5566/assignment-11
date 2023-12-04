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

// var pak = 'pakistani'
// var chek = 'zindaabad'
 
//  var result =pak.concat(' '+ chek);
 
// document.write( result);
