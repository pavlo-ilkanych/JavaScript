//Task 1

let n = +prompt("Enter number.")
let result = 1;
while(n){
    result *= n--;
}
alert(result);

//Task 2

for(let i = 1000; i < 9999; i += 3){
    document.writeln(i);
}

//Task 3

for(let i = 0, j = 1; i < 56; j += 2, i++){
    document.writeln(j);
}

//Task 4

for(let i = 90; i > 0; i -=5){
    document.writeln(i);
}

//Task 5

for(let i = 0, j = 2; i < 21; j *= 2, i++){
    document.writeln(j);
}

//Task 6

for(let a = 2; a < 10000; a = 2*a-1){
    document.writeln(a);
}

//Task 7

for(let a = -166; a < 100; a = 2*a + 200){
    if (a > -100 & (a < -9 || a > 9)) document.writeln(a);
}

//Task 8

let value = +prompt('Value');
let degree = +prompt('degree');

let result=0;
if(degree === 0) {
  alert(++result);
} else {
  let myDegree = degree > 0 ? degree : -degree;
  let sum = 1;

  for(let i=0; i<myDegree; i++) {
    sum = sum * value;
  }

  result = degree > 0 ? sum : 1 / sum;
  alert(result);
}
