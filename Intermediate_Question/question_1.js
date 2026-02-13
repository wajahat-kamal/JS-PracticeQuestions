// Login Attempt Limiter


function loginSystem() {
    const realPassword = "admin123"
    let passwordCount = 0;
    let accountLocked = false

    return function login(password) {
        if (accountLocked) {
            return "Account Locked"
        }
        if (password === realPassword) {
            passwordCount = 0;
            return "Login Successful!"
        } else {
            passwordCount++;
            console.log(passwordCount);
            if (passwordCount >= 3) {
                accountLocked = true
                return "Incorrect Password – Account Locked"
            }
            console.log(accountLocked);
            return "Incorrect Password"
        }
    }

}

const login = loginSystem()
console.log(login("admin13"));
console.log(login("admin134"));
console.log(login("admin135"));
console.log(login("admin123"));

