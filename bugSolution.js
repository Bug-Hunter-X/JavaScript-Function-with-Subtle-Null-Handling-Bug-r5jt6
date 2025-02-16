function foo(a, b) {
  // Handle null values by defaulting to 0
  a = a === null ? 0 : a;
  b = b === null ? 0 : b;
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null)); // Output: 0

//Alternative solution: throw an error if either input is null
function foo2(a, b) {
  if (a === null || b === null) {
    throw new Error('Inputs cannot be null');
  }
  return a + b;
}
