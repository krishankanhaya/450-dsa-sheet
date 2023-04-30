// 1. By reverse method

let array1 = [1,2,3,4,5,6];
console.log('old array: ')
console.log(array1)

array1.reverse();

console.log('new array: ')
console.log(array1);


// 2. By For loop ->  extra spaces required

let array1 = [];

for(let i = array1.length -1; i >= 0; i++ ){
    new_array.push(num_array[i]);
}

console.log('new array: ');
console.log(new_array);

// 3. By unshift method -> it takes a callback and last element inside it and add it ot  beginning of array by overriding and forEach method
new_array = [];
num_array.forEach((element) => {
    new_array.unshift(element);
})
console.log(new_array);


// 4. By using reduce method -> it takes a callback

new_array = num_array.reduce((acc, key) => [item].concat(acc), []);
console.log(new_array);