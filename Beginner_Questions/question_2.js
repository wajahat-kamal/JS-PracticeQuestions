// Login Attempt Limiter


function login(password) {
    const realPassword = "admin123"
    let passwordCount = 0;
    let accountStatus = "Unlocked"

    if (password !== realPassword) {
        passwordCount++;
        return "Incorrect password"
    }
    if (passwordCount >= 3) {
        accountStatus = "Locked"
        throw new Error("Your account is locked")
    }

}
let password = "admin"
console.log(login(password));
