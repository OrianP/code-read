function transform(arg1){
    const data = arg1.split(",");
    let obj = {};
    for (let item of data) {
        if(obj[item]) {
            obj[item]++
        } else {
            obj[item] = 1;
        } 
    }
    return obj;
}








console.log(transform("apples,cookies,apples,oranges,bananas,cookies,apples,donuts"));
