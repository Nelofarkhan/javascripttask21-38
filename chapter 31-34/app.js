function taskno(tasknumber)
{
     document.write("<h1>" + tasknumber+ "</h1>" + " <br>");
}


//Task 1



var date= new Date();
document.write(date);



//Task 2

var months=["january","februrary","march","april","may","june","july","august","september","october","november","december"];

var currentMonth=date.getMonth();

alert("Current Month:" + " "+ months[currentMonth])



//Task 3


var currentDay=date.toString();
 
alert("Today is:" + " " + currentDay.slice(0,3));

//Task 4

var funDay=date.getDay();


if(funDay===0||funDay===6)
{
     document.write("Its funday ");
  
}
else{
     document.write("It is not funday ");
}


//Task 5

var dateCheck=date.getDate();
if(dateCheck<=15)
{
     document.write("First fifteen days of the month");
}

else{
     document.write("last days of the month ");
}


//Task 6

document.write("Current date:"+ " " + date + "<br>");

var DateSince1970=date.getTime();
document.write("Elapsed milliseconds since January 1,1970:"+ " " + DateSince1970 + "<br>");
document.write("Elapsed minutes since January 1,1970:"+ " "+ (DateSince1970/(1000*60)));


//Task 7

var noon=date.getHours();

if(noon<12)
{
     alert("It is A.M")

}
else if( noon>=12)
{
     alert("It is P.M");
}


//Task 8

var lastDay= new Date("December 31,2020");

document.write("Later Date:" + " "+ lastDay);


//Task 9

var today=new Date();
var pastday=new Date("April 25,2020");
var today1=today.getTime();
var pastday1=pastday.getTime();
var diff=today1-pastday1;
 diff=diff/(1000*60*60*24);
 diff=Math.floor(diff);
document.write(diff+ " " + "days have passed since 1st ramzan ,2020");

//Task 10

var MiliSince2015=new Date("January 1,2015");
var Since2015=MiliSince2015.getTime();

var refDate=new Date("December 5,2015 22:50:16");
var ref=refDate.getTime();

var diff=ref-Since2015;
var diff=diff/(1000*60);

document.write("On reference date" + " " + refDate + "<br>");
document.write(Math.floor(diff)+ " " + "seconds had passed since beginning  of 2015 ");


//Task 11

var d=new Date();
document.write("Current date:" + " "+ d + "<br>");
var dateExt=d.getHours();
d.setHours(dateExt-1);
document.write("1 hour ago it was" + " "+ d);


//Task 12

var d=new Date();
var currentYear=d.getFullYear();

document.write("Current date:" + " "+ d + "<br>");

d.setFullYear(currentYear-100);
document.write("100 years back , it was" + " "+ d);


//Task 13

var userAge=+prompt("Enter your age");
document.write("Your age is : "+ " "+ userAge +"<br>");

var d= new Date();
var currenYear=d.getFullYear();
userAge=currentYear-userAge;

document.write("your birth year is "+" "+ userAge);

//Task 14

var customerName,units,chargePerunit=16,netAmount,latePaymentSurcharge=350,grossAmount;

var months=["january","februrary","march","april","may","june","july","august","september","october","november","december"];




var d=new Date();
var currentMonth=d.getMonth();
currentMonth=months[currentMonth];


document.write("<h1>" +"K-Electric bill" +"</h1>" + "<br>");

customerName=prompt("Enter your name");
units=+prompt("Enter units");
netAmount=units*chargePerunit;
grossAmount=netAmount+latePaymentSurcharge;

document.write("Customer Name:" + " " + "<b>" + customerName  + "</b>" + "<br>");
document.write("Month:" + " " + "<b>" + currentMonth + "</b>" + "<br>");
document.write("Number of units:" + " " +"<b>"+ units + "</b>" +"<br>");
document.write("Charges per unit:" + " " + "<b>" + chargePerunit +"</b>" +"<br>");
document.write("<br>" + "<br>" + "<br>");
document.write("Net Amount Payable (within Due Date):" + " " + "<b>" + netAmount+ "</b>" + "<br>");
document.write("Late payment surcharge:" + " " +"<b>" + latePaymentSurcharge+ "</b>" + "<br>");
document.write("Gross amount payable (after Due Date):" + "<b>" + grossAmount+"</b>" + "<br>");
