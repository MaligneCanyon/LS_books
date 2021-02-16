function oddLengths(arr) {
  return arr.reduce((accum, elem) => {
    return (elem.length % 2) ? accum.concat(elem.length) : accum; // could use 'accum.push(elem.length)'
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]