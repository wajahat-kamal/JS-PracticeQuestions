// Login Attempt Limiter


function login(password) {
    const realPassword = "admin123"
    let passwordCount = 0;
    let accountStatus = "Unlocked"
    
    if (password !== realPassword) {
        passwordCount++;
        console.log(passwordCount);
        return "Incorrect password"
    }
    if (passwordCount >= 3) {
        accountStatus = "Locked"
        return "Account Locked"
    }
  
    return "Login Successfull!"

}
let password = "admin"
console.log(login(password));
