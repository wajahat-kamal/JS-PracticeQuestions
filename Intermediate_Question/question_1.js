// Login Attempt Limiter


function loginSystem() {
    const realPassword = "admin123"
    let passwordCount = 0;
    let accountLocked = false

    return function login(password) {
        if (accountLocked){
            return "Account Locked"
        }
    }

}

