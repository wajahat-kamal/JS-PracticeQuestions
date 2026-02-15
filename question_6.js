//  Task Manager System


function createTaskManager() {
    let tasks = []
    return {
        addTask: (title) => {
            let id = Math.random()
            tasks.push({
                id: id,
                title,
                completed: false,
                createdAt: new Date()
            })
            console.log("Task Added Successfully!", tasks);
        },
        completeTask: (id) => {
            const task = tasks.find((task) => task.id === id)
            if (!task) {
                return "Task not found!"
            }
            task.completed = true
            console.log(tasks);
            return "Task Completed!"
        },
    }
}

const task = createTaskManager()

task.addTask("This is my first task")
task.addTask("This is my second task")

console.log(task.completeTask(0.44794367138786206));
