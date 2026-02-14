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
        },
        getTotalExpenses: () => {
            const total = expenses.reduce((sum, item) => {
                return sum + item.amount
            }, 0)
            return total
        },
        getCategoryTotal: (category) => {
            let total = 0;
            expenses.filter((item ) => {
                if(item.category === category){
                    total += item.amount
                }
            })
            return total
        },
        getExpenses: () => {
            const item = expenses.map((item) => {
                return item
            })
            return item
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
