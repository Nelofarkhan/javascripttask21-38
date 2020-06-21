function taskno(tasknumber)
{
     document.write("<h1>" + tasknumber + "</h1>" + "<br>" + "<br>");
}



//Task 1

function currentDate()
{
     var d=new Date();
     document.write(d)+ "<br>";
}

currentDate()+ "<br>";



//Task 2

function greetUser(firstname,lastname)
{
     document.write("Hello" + " " + firstname + " " + lastname + ""+ "<br>"); 
}

greetUser("Nelofar","khan"+"<br>"+ "<br>");

//Task 3

function add()
{
      var num1=+prompt("Enter number 1");
     var num2=+prompt("Enter number 2"+ "<br>");

     return num1+num2;

}

 document.write( "Sum  of two number is " + " " + add()+"<br>");



//Task 4

function calc(num1,operator,num2){

    var total;
            
    if(operator==="+")
    {
         total=num1+num2;
         return total;
    }
    else if( operator==="-")
    {

    total=num1-num2;
         return total;

 } 

    else if(operator==="*")
 {
    total=num1*num2;
    return total;

 }
 else if(operator==="/")
 {
    total=num1/num2;
    return total;
 }

}


var result=calc(12,"+",2);

document.write("Result is " + " "+ result+"<br>"+ "<br>");



//Task 5

function itsSquare(arg)
{
     return arg*arg;
}


 document.write( "Sqaure of num is" + " " +itsSquare(8)+ "<br>");


//Task 6

function factorial(num){
    var answer = 1;
   if (num == 0 || num == 1){
     return answer;
   }else{
     for(var i = num; i >= 1; i--){
       answer = answer * i;
     }
     return answer;
   }  
 }
 

 var num=3;
 var factAns=document.write("Factorial of " + num + " " + "is " + factorial(num)+"<br>"+ "<br>");


//Task 7


  function startEnd(start,end)
  {
      var i;

      for(i=start;i<=end;i++)
      {
          document.write(i + " " + "<br>"+"<br>");
      }
  }

  startEnd(1,15);


//Task 8

function hypo(base,perpendicular)
{
     function square (sq)
     {
         return sq*sq;
     }

     return Math.sqrt(square(base) + square(perpendicular))
}

var a=hypo(2,8);

document.write("hypotenus is " + " " + a+"<br>");


//Task 9

function area(width,height)
{
     return width*height;
}

 document.write(" Argument as value : " + " " + area(2,3) + "<br>" );

 var width=2;
 var height=2;

  var total =document.write("Argument as variable : " + " "+ area(width,height)+"<br>");

  //Task 10

  
// var word="civic";
var check="";



function palindrome(word)
{
     
     for(var i=word.length-1;i>=0;i--)
     {
              check+=word[i];
     }
     if(word===check)
     {
        document.write("Word is palindrome");
     }

     else{
          document.write("word is not palindrome")
          
     }
}

palindrome("civic"+"<br>");

  //Task 11

  
function capital(word) 
{
    word = word.split(" ");

    for (var i = 0, x = word.length; i < x; i++) {
        word[i] = word[i][0].toUpperCase() + word[i].substr(1);
    }

    return word.join(" ");
}


document.write( capital("my name is nelofar khursheed"+"<br>"));

  //Task 12

  function findlongest(word)
{
  var array1 = word.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
document.write(findlongest("Web development tutorial"+"<br>"));



  //Task 13

  function charcount(str, letter) 
{
 var Count = 0;
 for (var i = 0; i < str.length; i++) 
 {
    if (str.charAt(i) == letter) 
      {
      Count += 1;
      }
  }
  return Count;
}

document.write(charcount("jsresources.com","o"+"<br>"));

  //Task 14

  function calcCircumference(radius)
{
     return 2*(3.142)*radius
}

var radius =3;

var answer=calcCircumference(radius)
document.write("The circumference is :" + " " + answer + "<br>");


function calcArea(radius)
{
     return 3.142*(radius*radius);
}

answer=calcArea(radius);
document.write("The ares is " + " "+ answer+"<br>");



