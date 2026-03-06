// its not a practice question. learn object oriented programing in js.

const user = {
    username: "Wajahat",
    age: 16,

    getUserDetail: function (){
        return `Username is ${this.username} and age is ${this.age}`
    }
}

// console.log(user.getUserDetail());


function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}