//arrays destructuring
const fruit = ['Apple', 'Banana', 'Kiwi'];
const [a,b,k] = fruit;
console.log(a,fruit[1],k);

//Object destructuring

let user = {username:'Oscar', age:34};
let {username, age} = user;
console.log(username, user.age)
