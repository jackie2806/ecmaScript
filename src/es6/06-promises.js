const anotherFunction = () => {
    return new Promise ((resolve, reject) => {
        if (true){
            resolve('Hey!!!');
        } else {
            reject('Whoops');
        }
    })
}

anotherFunction()
    .then(response => console.log(response)) //no colocar punto y coma después del .then
   // .then(response => console.log(response)) Se puede colocar más métodos .then()
    .catch(err => console.log(err))
