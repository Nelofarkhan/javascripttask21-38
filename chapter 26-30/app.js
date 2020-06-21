
//Task 1

var integer=+prompt("Enter your number");
document.write("Number:" + " "+ integer+"<br>");
document.write("Round off value:"+" " + Math.round(integer) + "<br>");
document.write("Floor value:"+" " + Math.floor(integer) + "<br>");
document.write("Ceil value:"+" " + Math.ceil(integer) + "<br>" + "<br>");


//Task 2


var floating=parseFloat(prompt("Enter negative value of floating point"));
document.write("Number:" + " "+ floating+"<br>");
document.write("Round off value:"+" " + Math.round(floating) + "<br>");
document.write("Floor value:"+" " + Math.floor(floating) + "<br>");
document.write("Ceil value:"+" " + Math.ceil(floating) + "<br>" + "<br>");

//Task 3



var num=-4;
document.write("The absolute value of " + " " + num+ " " + "is " + Math.abs(num) + "<br>");
var num=5;
document.write("The absolute value of " + " " + num+ " " + "is " + Math.abs(num) + "<br>" + "<br>");

//Task 4



var dice= Math.floor( Math.random() * 6 ) +1;

for(var i=1;i<=2;i++);
{
       document.write("random dice value:" + " " +  dice + " <br>" + "<br>"); 
}

//Task 5



var toss=Math.floor(Math.random()*2) +1;



if(toss===2)
{
       document.write(toss + "<br>");
       document.write("random coin value : Heads");
} else
{
      document.write(toss + "<br>");
      document.write("random coin value : tails" + "<br>");
}

//Task 6

var rndm=Math.floor(Math.random()*100) +1;
document.write("Random number between 1 and 100:" + " "+ rndm + "<br>");


//Task 7



var weight=prompt("Enter weight in kilo grams");
weight=weight.toLowerCase();
var unitFound;

for(var i=0;i<weight.length;i++)
{
       if(weight.slice(i,i+3)==="kgs"|| weight.slice(i,i+9)==="kilograms")
       {
              
              unitFound=true;
              break;
              
       }
       
}
if(unitFound!==true)
{
       alert("plz enter with unit kgs and kilograms");
}

if(weight.slice(i,i+3)==="kgs")
{
document.write("The weight of user it  :" + parseFloat(weight) + "kgs" + "<br>");
}
else if(weight.slice(i,i+9)==="kilograms")
{
       document.write("The weight of user is :" + parseFloat(weight)+ "kilograms" + "<br>" + "<br>");
}


//Task 8



var guess=Math.floor(Math.random()*6)+1;

guess=guess.toString();

var userInput=prompt("Enter your input between 1 to 10 to guess");

if(guess===userInput)
{
      
       alert("you guess the right");
       
}

else{
       alert("try again" );
}