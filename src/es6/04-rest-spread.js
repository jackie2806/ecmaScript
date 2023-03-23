//Asignación de desestructuración
//arrays destructuring
const fruit = ['Apple', 'Banana', 'Kiwi'];
const [a,b,k] = fruit;
//console.log(a,fruit[1],k);
const [,,kiwi] = fruit;
//console.log(kiwi)
let rabbit = ['Copito', 'Conejina', 'Copitos'];
let [copito,conejina,copitos] = rabbit;
//console.log(copito);

//Object destructuring

let user = {username:'Oscar', age:34};
let {username, age} = user;
//console.log(username, user.age)

// ANOTHER SUBJECT

//Spread operators (propagador de elementos)
const array = [...'Soy yo']; 
//console.log(array)
const newArr = [...array] // copia del array en un solo nivel de profundidad
//console.log(newArr)
let person = {name:'Jackeline', age:25};
let country = 'MX';
let data = {...person, country};
//console.log(data)
let me = {...person};
//console.log(me);


//Rest parameter (agrupa el residuo de elementos, obtiene los elementos restantes de un array u objeto usando asignación de desestructuración)
//siempre deberá estar en la última posición

const obj = {
    name : 'Jojo',
    age: 23,
    course: 'Js',
}


const {course, ...userPerson} = obj;
//console.log(course)
//console.log(userPerson)

const numbers = [0, 1, 2, 3, 4, 5];

const [zero, ...othersNumbers] = numbers;

console.log(othersNumbers)

function sum (num, ...values){
    console.log(values);
    console.log(num+values[0]);
    return num + values[0]
}

sum(1,1,2,3)


//Diferencias entre el parámetro rest y el operador de propagación
// El parámetro Rest agrupa el residuo de elementos y siempre debe estar en la última posición
//El operador de propagación expande los elementos de un iterable en un array u objeto y no importa en qué lugar estén.

const arrOfNumbers = [1, 2, 3, 4, 5];

function hi (first, second, ...others){
    console.log(first, second);
    console.log(others);
}

hi(...arrOfNumbers, 'final');
