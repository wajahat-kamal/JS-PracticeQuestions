//  Task Manager System


function createTaskManager() {
    let tasks = [];
    let id = 1;
    return {
        addTask: (title) => {
            if (!typeof title === "string") {
                return "Enter valid title"
            }
            tasks.push({
                id: id,
                title,
                completed: false,
                createdAt: new Date()
            })
            id++
            return "Task Added Successfully!"

        },
        completeTask: (id) => {
            const task = tasks.find((task) => task.id === id)
            if (!task) {
                return "Task not found!"
            }
            task.completed = true
            return "Task Completed!"
        },
        removeTask: (id) => {
            const task = tasks.find(task => task.id === id)
            const index = tasks.findIndex(task => task.id === id)
            if (!task) {
                return "Task not found!"
            }
            tasks.splice(index, 1)
            return "Task Deleted Successfully!"
        },
        getAllTasks: () => {
            return [...tasks]
        },
        getCompletedTasks: () => {
            return tasks.filter(task => task.completed === true)
        },
        getPendingTasks: () => {
            return tasks.filter(task => task.completed === false)
        },
        getStatistics: () => {
            return {
                Total: tasks.length,
                Completed: tasks.filter(task => task.completed === true).length,
                Pending: tasks.filter(task => task.completed === false).length
            }
        }
    }
}

const task = createTaskManager()

console.log(task.addTask("This is my first task"))
console.log(task.addTask("This is my second task"))


// console.log(task.completeTask(2));
// console.log(task.removeTask(2));
// console.log(task.getCompletedTasks());
// console.log(task.getPendingTasks());
// console.log(task.getAllTasks());

// console.log(task.getStatistics());





