//Task 1

let text = prompt("Enter your text.");
let arr = text.split(" ");
console.log(arr.length);


//Task 2

let email = prompt("Enter your email.");
if(email.includes("@") && !email.endsWith("@") && !email.startsWith("@")){
    alert("Email is correct.")
}else alert("Email is incorrect!");

// Task 3

let text = prompt("Enter your text.");
let regEx = /html/ig;
let numOfRepeatedWords = text.match(regEx).length;
console.log(numOfRepeatedWords);

//Task 4

let URLaddress = prompt("Enter url address.");
if(URLaddress.includes("http://")){
    let domain = URLaddress.slice(7);
    console.log(domain);
}else if(URLaddress.includes("https://")){
    let domain = URLaddress.slice(8);
    console.log(domain);
}

//Task 5

let form = [];
let name1 = "";

while(name1.length < 2){
    name1 = prompt("Enter your name.");
    if(name1.length < 2)
        alert("Name is incorrect.");
    else{
        name1.trim;
        document.writeln("Your name - " + name1); 
        form.push(name1);       
    }
}

let password = "";

while(password.length < 5){
    password = prompt("Enter your password.");
    if(password.length < 5){
        alert("Password must contain at least 5 symbols.");
    }else{
        document.writeln("Your password - " + password);
        form.push(password);        
    }
}    

let email = "";

while(true){
    email = prompt("/n Enter your email.");
    if(!email.includes("@") || email.includes(" ")){
        alert("Email is incorrect.");
    }else{
        document.writeln("Your email - " + email);
        form.push(email);
        break; 
    }
}

if(form.length > 0) console.log("true");
