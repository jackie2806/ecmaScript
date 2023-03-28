// enhanced object literals

function newUser(user, age, country, uId){
    return {
        user,
        age,
        country,
        uId
    }
}

console.log(newUser('Jackie', 25, "AL", 2))