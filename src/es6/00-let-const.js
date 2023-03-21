var lastName = 'David';
lastName = 'Oscar';

let fruit = 'Apple';
fruit = 'Kiwi';

const animal = 'dog';


const fruits = () => {
    if(true){
        var fruit1 = 'Apple'; // function scope
        let fruit2 = 'Kiwi'; // block scope
        const fruit3 = 'Banana'; // block scope

    }

    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}