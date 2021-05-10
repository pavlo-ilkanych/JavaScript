//Task 1

let arr = [2,3,5,10];
let result = arr.reduce((sum, current) => sum + current);
alert(result);

//Task 2    

let arr = [2,3,4,5,10,11,12,13];
let addArrAfterPos = arr.splice(4,0,6,7,8,9);
alert(arr);

//Task 3

let elem = +prompt("Enter element for check.") 
let arr = [1,2,3,4,5,6];
if(arr.includes(elem)){
    let position = arr.indexOf(elem);
    alert(position);
}else alert("No such element.");

//Task 4

let num = +prompt("Enter number.");
let arr = [1,2,3,4,5,6,7,8,9];
let filteredArr = arr.filter(item => item > num);
alert(filteredArr);

//Task 5

let arr = [1,2,3,4,5,6,1,2,3];
let uniqueArr = arr.filter((item, pos) => arr.indexOf(item) == pos);
alert(uniq);




