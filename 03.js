function transform(arg1, arg2){
    let result = [];
    for (let el of arg1) {
        if (arg2(el)) {
            result.push(el);
        }
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
// 
// 
// 
// 
// 
// 
// 
console.log(transform([1, 2, 3, 4], x => x > 1));
// bonus q: what array method could you use to implement the same functionality? 
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
function transform1(arg1, arg2){
    return arg1.filter(arg2);
}
// console.log(transform1([1, 2, 3, 4], x => x > 1));