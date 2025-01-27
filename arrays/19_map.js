let array = [1,2,3,4,5];
let cal = array.map((num)=>{
    return num*10;
});//Creates a new array with the results of calling a function on every element
console.log(cal);//output:[ 10, 20, 30, 40, 50 ]
console.log(array);//output:[ 1, 2, 3, 4, 5 ]