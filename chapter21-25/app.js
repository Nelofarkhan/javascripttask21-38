//Task No:1
var firstname=prompt("Enter Your first Name");
var lastname=prompt("Enter Your last Name");
alert("Hello"+" "+firstname+lastname)

//Task No:2

var favphone="Samsung Galaxy s6 Edge plus";
var length=favphone.length; 

document.write("My favourite phone is:"+favphone +"<br>")

document.write("Length Of string:"+ length +"<br>"+"<br>") 

//Task No:3

var text="pakistani";
var hhh="Hello world";
var indxNum=text.indexOf("n");

document.write("String:"+hhh +"<br>") 
document.write("index of n is: "+indxNum+"<br>") 


//Task No:4


var hhh="Hello world";
var lastindx=hhh.lastIndexOf("l");

document.write("String :"+" "+hhh+"<br>") ;
document.write("Last index of 'l' is: "+ lastindx +"<br>") ;

//Task No:5

var country="Pakistani";
document.write("String :"+" "+country+"<br>") ;
document.write("character at index 3:"+country.charAt(3))

//Task No:6

 var firstname=prompt("Enter Your first Name");
 var lastname=prompt("Enter Your last Name");
 var fullName=firstname.concat(lastname);
 document.write("Hello"+" "+fullName);

// //Task No:7
 var city="hyderabad";
 var nn =city.replace("hyder","islam");
 document.write("city:"+" " +city+"<br>") ;
 document.write("After Replacement:"+" "+nn+"<br>") ;


// //Task No:8
 var message="Ali and sami are best friends.They play cricket  and football together .";
 var Replacement =message.replace(/and/g,"&&");
 document.write("Before Replacement:"+" " +message+"<br>") ;
document.write("After Replacement:"+" "+Replacement+"<br>") ;

//Task No:9
  
 var conver="472";
 var conv=parseInt(conver);
 document.write("Value:"+" " +conver+"<br>") ;
 document.write("Type:String"+"<br>") ;
 document.write("Value:"+" " +conv+"<br>") ;
 document.write("Type:Number" +"<br>") 

//Task No:10

 var userinput=prompt("Enter Input");
 document.write("User Input" +" "+userinput+"<br>"); 
 document.write("Upper case:"+ userinput.toUpperCase() +"<br>") ;

// //Task No:11
 var userinput=prompt("Enter your input");
 var firstword=userinput.slice(0,1);
 var lastword=userinput.slice(1);
 var firstword=firstword.toUpperCase();
 var titleCase=firstword+lastword;
 document.write("User Input:"+ " "+userinput+"<br>");
 document.write("Title case:" + " "+ titleCase );


//Task No:12

 var num = 35.36;
 document.write("Number:" + " "+ num+"<br>" );
 var convr=num.toString();
 convr=convr.replace(".",'');
 document.write("Result:"+convr+ "<br>");

//Task No:13

var username=prompt("enter your name");
var result;
for ( i=0; i<username.length;  i++){
  if(username.slice(i,i+1)=='!'|| username.slice(i,i+1)=='.'|| username.slice(i,i+1)== ','|| username.slice(i,i+1) =='@' )
  {
    alert("enter valid user name ");
      break;
  }
}
document.write("check by entering symbol in username prompts to see working or not"+ "<br>"+ "<br>")


//Task No:14



var A=["cake","apple pie","cookie","chips","patties"]

var userInput=prompt("Enter your item to search");

userInput=userInput.toLowerCase();

var found=false;

for(i=0;i<A.length;i++)
{
     if(A[i]===userInput)
     {
          found=true;
          document.write(userInput + " " + "is available at index " + " " + i + "in our bakery " )
          break;
     }
     
}

if(found!==true)
{
     document.write("we are sorry " + " "+ userInput + " " + " is not available in our bakery "+ "<br>"+ "<br>" );
}


//Task No:15

var pass=prompt("enter your password");
var letterNumber= /^[0-9a-zA-Z]+$/;

document.write("Entered Password:" + " " + pass + " <br>");
if(!(pass.match(letterNumber)))
{
     document.write("Password should be alphanumeric" + "<br>"+ "<br>")

     val=false
}
 else if(pass.length>6)
{
    document.write("Password should not be more than 6 digits" + " <br>")
      var val=false
}
else if(pass.charAt(0)>=48 ||pass.charAt(0)<=57)
{
      document.write("Password should not be started with a number" + "<br>"+ "<br>");
      val=false
}
else{


     document.write("Password is valid")
}

if(val===false)
{
      document.write("please enter a valid password"+ "<br>"+ "<br>");
}



//Task No:16



var university="University of Karachi";

var Res=university.split('');



for(i=0;i<Res.length;i++)
{
     document.write(Res[i]+ "<br>"+ "<br>");
}


//Task No:17






var userInput=prompt("Enter your string");
var res;

for(i=0;i<userInput.length;i++)
{
   res=userInput.slice(i,i+1);
}

document.write("User input:" + " " + userInput + "<br>");

document.write("last char of input:" + " " + res+ "<br>"+ "<br>");

//Task No:18



var text="The quick brown fox jumps over the lazy dog ";
document.write("Text" + " "+ text + "<br>");

text=text.toLowerCase();

var counter=0;

for(i=0;i<text.length;i++)
{
     if(text.slice(i,i+3)==="the")
     {
          counter++;
     }
}

document.write("There are" + " " + counter + " " + "occurenc(s) if the word 'the '")


