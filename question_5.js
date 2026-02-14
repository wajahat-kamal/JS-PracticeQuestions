// Expense Tracker


function createExpenseTracker() {
    let expense = []
    return {
        addExpense: (name, category, amount) => {
            const newExpense = {
                name,
                category,
                amount
            }
            expense.push(newExpense)
        },
        getTotalExpenses: () => {
            const total = expense.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.amount
            }, 0)
            return total
        }
    }
}

const expenseTracker = createExpenseTracker()

expenseTracker.addExpense("Lunch", "Food", 800)
expenseTracker.addExpense("Lunch", "Food", 800)

console.log(expenseTracker.getTotalExpenses());
