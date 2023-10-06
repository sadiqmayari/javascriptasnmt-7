// city intro
var city = prompt('Which city is called "CITY OF LIGTHS" ? "(use first letter Capital)"');

if(city === "Karachi"){
    alert("Correct! Welcome To City Of Lights.");
}
else(alert("No That's Not the right answer."));


// gender verification
var gender = prompt("Enter your Gender:");

if(gender === "male"){
    alert("Welcome Sir!");
}else if(gender === "female"){
    alert("Welcome Madam!");
}else { 
alert("janab apna ilaaj kerwayen.....");};


// traffic signal

var lighColour = prompt("Hey! What is the Colout of Signal Light right now?");

if(lighColour === "red"){
    alert("MUST STOP")
}
else if (lighColour === "yellow"){
    alert("Ready To Move")
}
else if(lighColour === "green"){
    alert("Move Now")
}
else{alert("Rukay raho humay kiya")};


//fuel calculation

var currentFuel = +prompt("How Much Fuel is remaining in your tank from (0.1 to 0.100)?");

if (currentFuel < 0.25){
    alert("Bhai petrol Bharwa lo latak jao gay");
}
else{alert("janay do pohonch jao gay")};


// mark sheet

var obtainedMarks1 = +prompt("Your marks in subject1 ?");
var obtainedMarks2 = +prompt("Your marks in subject2 ?");
var obtainedMarks3 = +prompt("Your marks in subject3 ?");
var totalMarks = 300;
var marksObtained = obtainedMarks1+obtainedMarks2+obtainedMarks3;
var percentage = (marksObtained/totalMarks)*100;
// var aOne = percentage>=80;
// var a=percentage>=70;
// var b=percentage>=60;
// var fail=percentage<60;


document.write("<h1>Mark Sheet</h1>");
document.write("<br><br><br><br>");
document.write("<h2>Total Marks : "+totalMarks+ "</h2>");
document.write("<h2>Marks Obtained : "+marksObtained+ "</h2>");
document.write("<h2>Percentage : "+percentage+ " % </h2>");


if(percentage >= 80){
    document.write("<h2>Grade : A-One" + "</h2>")
    document.write("<h2>Remarks : Excellent </h2>")
}
else if(percentage >=70){
    document.write("<h2>Grade : A" + "</h2>")
    document.write("<h2>Remarks : Good </h2>")
}
else if(percentage >=60){
    document.write("<h2>Grade : B" + "</h2>")
    document.write("<h2>Remarks : You need to improve </h2>")
}
else if(percentage < 60){
    document.write("<h2>Grade : Fail" + "</h2>")
    document.write("<h2>Remarks : Sharam ker Nikhatoo </h2>")
}
else{"Wrong Entry"};

document.write("<br><br><br><br><br>");

//guess game

var secretNumber = 3;
var userInput = +prompt("Guess The Secret Number..!")

if (userInput == secretNumber){
    alert("Bingo! You got it right.")
}
else if(userInput == secretNumber+1){
    alert("Oooooo..! So Close")
}
else{alert("Na Tum sa na ho paye ga.")};

//divisible by 3

var userNumber = +prompt("Enter the Number :");

if (userNumber%3 == 0 ){
    alert("Your Entered number is Divisible by 3")
}
else{alert("Your Number is not divisible by 3")}

//even and odd number

var userInput = +prompt("Enter Any Number to check even or odd");

if(userInput%2 == 0){
    alert("Your entered number is Even")
}
else{alert("Your entered number is ODD")};


// tempereture alert

var t=+prompt("what is the tempratur today?");

if(t>40){alert("Bhai Mar jaye ga A/C Khol le jaan se ziyada ni he pesa")

}
else if(t>30){alert("Paani Piyo ziyada Thora thik rahe ga")

}

else if(t>20){alert("Mosam Acha he aaj jaaani")

}
else if(t>10){
    alert("bahi lunda per jacket saste mil jayen gay le lo")
}
else{alert("wrong entrt")}