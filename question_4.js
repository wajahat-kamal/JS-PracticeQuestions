// Bank Account System

function createBankAccount(ownerName, initialBalance) {
    let balance = initialBalance;
    let history = [];
    return {
        deposit: (amount) => {
            if (amount <= 0) {
                return "Amount must be more than 0"
            }
            balance += amount
            history.push({
                type: "deposit",
                amount: amount,
                balanceAfter: balance
            })
            return balance

        },
        withdraw: (amount) => {
            if (amount > balance) {
                return "Cannot withdraw more than balance"
            } else if (amount < 0) {
                return "Cannot withdraw negative"
            }
            balance = balance - amount
            history.push({
                type: "withdraw",
                amount: amount,
                balanceAfter: balance
            })
            return balance
        },
        getBalance: () => {
            return balance
        },
        transactionHistory: () => {
            return history
        }
    }
}

const account = createBankAccount("Wajahat", 10000)

console.log(account.deposit(500))
console.log(account.withdraw(200))
console.log(account.getBalance())
console.log(account.transactionHistory())