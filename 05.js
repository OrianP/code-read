function transform(arg1, arg2) {
    const result = [...arg1, ...arg2];
    return result.filter((x, i) => result.indexOf(x) === i);
}














console.log(transform([1, 2, 2, 3, 'hi', 4, 5],['hi', 1, 4, 'there']));