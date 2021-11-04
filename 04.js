function transform(arg1, arg2, arg3) {
    const returnVal1 = arg1.unshift(arg2); 
    const returnVal2 = arg1.push(arg2, arg3); 
    return arg1.slice(returnVal1, returnVal2 - 1);
}













console.log(transform([1, 2, 3, 4], 'hello', 'there'))





// explanation 
function transform1(arg1, arg2, arg3) {
    const returnVal1 = arg1.unshift(arg2); // element added to beginning. new length of array is 5
    const returnVal2 = arg1.push(arg2, arg3); // 2 elements added to end. new length of array is 7
    //  arg1 is now ['hello', 1, 2, 3, 4, 'hello', 'there']
    return arg1.slice(returnVal1, returnVal2 - 1); // slice array from index 5 to 6
}