function flatMyArray(data) {
    let result = [];
    data.map((item) => {
    if(Array.isArray(item)) {
    result = result.concat(flatMyArray(item));
    } else {
    result.push(item);
    }
    });
    return result;
    }
console.log(flatMyArray([1,[2,[3,4,[5,6]]]]));