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
            if (passwordCount >= 3) {
                accountLocked = true
                return "Incorrect Password – Account Locked"
            }
            return "Incorrect Password"
        }
    }

}

const login = loginSystem()
console.log(login("admin13"));
console.log(login("admin134"));
console.log(login("admin135"));

