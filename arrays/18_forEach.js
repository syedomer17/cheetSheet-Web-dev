let array = [1,2,3,4,5];
//Executes a function for each array element.
//syntax:array.forEach((element,index)=> console.log(`index and array`));
array.forEach((element,index)=>{
    console.log(`${index}.${element}`); 
});//output:
// 0.1
// 1.2
// 2.3
// 3.4
// 4.5