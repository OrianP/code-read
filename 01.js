function transform(arg) {
    let result = '';
    for (let i = arg.length - 1; i >= 0; i--){
        result += arg[i];
    }
    return result; 
}
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
console.log(transform('hello'));