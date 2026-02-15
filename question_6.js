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
            return "Task Added Successfully!", tasks.find((tsk) => tsk.id === id)

        },
        completeTask: (id) => {
            const task = tasks.find((task) => task.id === id)
            if (!task) {
                return "Task not found!"
            }
            task.completed = true
            return "Task Completed!", task
        },
    }
}

const task = createTaskManager()

console.log(task.addTask("This is my first task", 1))
console.log(task.addTask("This is my second task", 2))

console.log(task.completeTask(2));
