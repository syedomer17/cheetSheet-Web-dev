let array = [1,2,3,4,5];
array.copyWithin(0,3);
// it will copy the other half
//synatx:array.copyWithin(start,end);
console.log(array);//output:[ 4, 5, 3, 4, 5 ]