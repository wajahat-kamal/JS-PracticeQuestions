//  Task Manager System


function createTaskManager() {
    let tasks = []
    return {
        addTask: (title, id) => {
            tasks.push({
                id: id,
                title,
                completed: false,
                createdAt: new Date()
            })
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
            const task = tasks.find((task) => task.id === id)
            const index = tasks.findIndex((task) => task.id === id)
            if (!task) {
                return "Task not found!"
            }
            tasks.splice(index, 1)
            return "Task Deleted Successfully!"
        },
    }
}

const task = createTaskManager()

console.log(task.addTask("This is my first task", 1))
console.log(task.addTask("This is my second task", 2))

console.log(task.completeTask(2));
console.log(task.removeTask(2));

