// Expense Tracker


function createExpenseTracker() {
    let expenses = []
    return {
        addExpense: (name, category, amount) => {
            const newExpense = {
                name,
                category,
                amount
            }
            expenses.push(newExpense)
            return `Expense added: ${name} - ${category} - $${amount}`;
        },
        getTotalExpenses: () => {
            return expenses.reduce((sum, item) => {
                return sum + item.amount
            }, 0)
        },
        getCategoryTotal: (category) => {
            return expenses
                .filter((item) => item.category === category)
                .reduce((sum, item) => sum + item.amount, 0)
        },
        getExpenses: () => {
            return [...expenses]
        }
    }
}

const tracker = createExpenseTracker()

tracker.addExpense("Lunch", "Food", 800)
tracker.addExpense("Lunch", "Food", 800)
tracker.addExpense("T Shirt", "Shopping", 1000)

console.log(tracker.getTotalExpenses());
console.log(tracker.getCategoryTotal("Food"));
console.log(tracker.getExpenses()); 
