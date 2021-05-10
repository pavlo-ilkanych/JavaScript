//Task 1

function maxNum(){
    let max = 0;
    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i];
        }
    }
    return max;
}

//Task 2

//З використанням формули знаходження суми геометричної прогресії
function sumOfNumOfGeometricProgression(number, denominator){
    
    return 1 * ((Math.pow(denominator, number) - 1)/(denominator - 1));
}

//З використанням циклу
function sumOfNumOfGeometricProgression1(number, denominator){
    let sum = 0;
    let startNumber = 1;
    for(let i = 1; i < number; i++){
        startNumber *= denominator;
        sum += startNumber;
    }
    return sum;
}

//Task 3

function outputPrimeNum(num1,num2){

    for(let i = num1; i <= num2; i++){
        let n = 0;
        for(let j = 2; j<i; j++){
            if(i % j == 0) n++;
        }
        if(n==0) console.log(i);    
    }
}
