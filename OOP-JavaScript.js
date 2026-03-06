// its not a practice question. learn object oriented programing in js.

const user = {
    username: "Wajahat",
    age: 16,

    getUserDetail: function (){
        // console.log(this);
        return `Username is ${this.username} and age is ${this.age}`
    }
}

console.log(user.username);
console.log(user.getUserDetail());
// console.log(this);
