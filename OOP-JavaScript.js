// its not a practice question. learn object oriented programing in js.

const user = {
    username: "Wajahat",
    age: 16,

    getUserDetail: function () {
        return `Username is ${this.username} and age is ${this.age}`
    }
}

// console.log(user.getUserDetail());


function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new User("Wajahat", 12, true)
const userTwo = new User("Kamal", 9, false)
// console.log(userTwo);
// console.log(userOne);


class Animal {
    constructor(name){
        this.name = name
    }
    eats(){
        console.log("khaa raha ho");
    }
}
const a = new Animal()
a.name = "rabit"
// console.log(a);
