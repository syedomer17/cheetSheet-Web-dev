let array = [1,2,3,4,5];
const sum = array.reduce((acc,num)=>acc+num,0)
//Reduces the array to a single value by applying a function.
console.log(sum);//output:15
console.log(array);//output:[ 1, 2, 3, 4, 5 ]
