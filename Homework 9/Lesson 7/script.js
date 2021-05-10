//Task 1

// Функція Math.pow чудово підносить до степеня і від"ємні числа і нуль.
function elevToDegree(base, exponent){

    let pow = Math.pow(base,exponent);

    return pow;
}

//Якщо без Math.pow
function elevToDegree1(base, exponent){

    if(base > 0 ){
        return base * exponent;
    } else if(base == 0){
        return 1;
    }else{
        return 1/(base * exponent);
    }
}

//Task 2
function ageCheck(){
    let age = +prompt("How old are you?");
    if(age > 18) alert("Access allowed!");
    else{
        let parentCheck = prompt("Parents allowed?");
        if(parentCheck == "Yes"){
            alert("Access allowed!");
        }else alert("Access denied!");
    }
}

//Task 3
function primeNumCheck(num){
    if (num < 2) {
        return false;
      } else if (num === 2) {
        return true;
      }
    
      let i = 2;
      const limit = Math.sqrt(num);
      while (i <= limit) {
        if (num % i === 0) {
          return false;
        }
        i +=1;
      }
      
      return true;
}
