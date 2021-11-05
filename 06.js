function transform(arg1) {
    const substring = arg1.substring(arg1.length, arg1.length - 6);
    const sliced = arg1.slice(arg1.length, arg1.length - 6);
    return [substring, sliced];
}
















console.log(transform('Founders and Coders'));


// Just a function to demonstrate this 'quirk' when substring is given an indexStart that is greater than the indexEnd, the two are swapped. Slice, on the other hand, returns an empty string.