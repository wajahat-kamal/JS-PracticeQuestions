// Login Attempt Limiter


function loginSystem() {
    const realPassword = "admin123"
    let passwordCount = 0;
    let accountLocked = false

    return function login(password) {
        if (accountLocked){
            return "Account Locked"
        }
        if (password === realPassword) {
            passwordCount = 0;
            return "Login Successfull!"
        } else {
            passwordCount++;
            if (passwordCount >= 3) {
                accountLocked = true
            }
            return "Incorrect Password"
        }
    }

}

const login = loginSystem()
console.log(login("admin13"));
