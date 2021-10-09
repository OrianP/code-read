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
// Bonus q: what array method could you use to recreate the same result? 
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
function transform1(arg){
    return arg.split('').reduceRight((acc, val) => acc + val);
}

// console.log(transform1('hello'))