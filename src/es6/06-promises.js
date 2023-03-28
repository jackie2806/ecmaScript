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

    /* *.then() ** es un método de la promesa que retorna anotherFunction(),
     no es “algo llamado then” y si bien es una ‘palabra reservada'. 
     Es un método, y por ser un método se “llama” o “ejecuta” y recibe parámetros, en este caso un callback (na función como argumento) */