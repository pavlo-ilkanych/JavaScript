//Task 1

let attempts = 5;

while(attempts > 0){
    let request = prompt("Enter password.");
    if(request === "admin"){
        alert("Welcome to the site!");
        attempts = 0;
    }else{
        attempts --;
        alert ("Incorrect. " + (attempts) + " attempts left.");
        if(attempts == 0){
            alert("Try again later!");
        } 
    }
}

