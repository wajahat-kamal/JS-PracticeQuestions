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
        },
        getCategoryTotal: (category) => {
            let total = 0;
            expense.filter((item ) => {
                if(item.category === category){
                    total += item.amount
                }
            })
            return total
        }
    }
}

const tracker = createExpenseTracker()

tracker.addExpense("Lunch", "Food", 800)
tracker.addExpense("Lunch", "Food", 800)
tracker.addExpense("T Shirt", "Shopping", 1000)

console.log(tracker.getTotalExpenses());
console.log(tracker.getCategoryTotal("Food"));
