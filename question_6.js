//  Task Manager System


function createTaskManager() {
    let tasks = []
    return {
        addTask: (title) => {
            tasks.push({
                id: 1,
                title,
                completed: false,
                createdAt: new Date()
            })
        },
    }
}

const task = createTaskManager()

task.addTask("This is my first task")
