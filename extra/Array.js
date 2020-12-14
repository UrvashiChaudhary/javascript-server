//Array.from()
console.log(Array.from('urvashi'));

//Array.isArray()
console.log(Array.isArray(['a','b']));
console.log(Array.isArray(['git']));
console.log(Array.isArray([1,2,3]));

//Array.of()
console.log(Array.of(7));
console.log(Array(7));

//Array.prototype.concat()
const array1 = ['u', 'r', 'v'];
const array2 = ['a', 's', 'h','i'];
const array3 = array1.concat(array2);
console.log(array3);

//Array.prototype.copyWithin()
const array4 = ['a', 'b', 'c', 'd', 'e'];
console.log(array4.copyWithin(0, 2, 4));

//Array.prototype.reverse()
const array5 = ['jan', 'feb', 'march'];
console.log('array5:', array5);
const reversed = array5.reverse();
//console.log('reversed:', reversed);
console.log('array5:', array5);

//Array.join()
const elements = ['JAN', 'MAN', 'GAN'];
console.log(elements.join());
console.log(elements.join(''));
console.log(elements.join('-'));

//Array.keys()

const iterator = elements.keys();
for (const key of iterator) {
  console.log(key);
}

//Array.pop()

console.log(elements.pop());

//Array.push()

console.log(elements.push('ADHINAYAK'));
console.log(elements);



