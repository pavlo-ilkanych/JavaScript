//Task 1

let grade = 0;

let question1 = +prompt("2+2?");
if( question1 == 4){
    grade++;
} 

let question2 = +prompt("2*2?");
if( question2 == 4){
    grade++;
} 

let question3 = +prompt("2+2*2?");
if( question3 == 6){
    grade++;
} 

let question4 = +prompt("(2+2)*2?");
if( question4 == 8){
    grade++;
} 

let question5 = +prompt("2*2/2?");
if( question5 == 2){
    grade++;
} 

let question6 = +prompt("2+2/2?");
if( question6 == 3){
    grade++;
}

alert("Your result: " + grade + " points.");

//Task 2/2.1

let login = prompt("Enter your name.");

if(login == "name"){
    let password = prompt("Enter password.")

    if(password == "Logos"){
        alert("Welcome!")

    }else if(password == null){
        alert("Login canceled.")

    } else alert("Wrong password!!!")

} else if(login == null){
    alert("Login canceled.")

} else alert("I do not know you.")

//Task 3

let number = +prompt("Enter your number.");


if(number == 12 && number <= 2) alert("Winter");
else if(number >= 3 && number <= 5) alert("Spring");
else if(number >= 6 && number <= 8) alert("Summer");
else if(number >= 9 && number <= 11) alert("Autumn");
else alert("Wrong number!");

// Або так

switch(number){
    case 1:
    case 2:    
    case 12:
        alert("Winter");
        break;
    
    case 3:
    case 4:    
    case 5:
        alert("Spring");
         break;  
         
    case 6:
    case 7:    
    case 8:
        alert("Summer");
        break;

    case 9:
    case 10:    
    case 11:
        alert("Autumn");
        break;

    default: break;    
}