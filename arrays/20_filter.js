let array = [1,2,3,4,5];
const filter = array.filter((num) => num%2 === 0 );
//Creates a new array with elements that pass a test.
console.log(filter);//output:[ 2, 4 ]
console.log(array);//output:[ 1, 2, 3, 4, 5 ]