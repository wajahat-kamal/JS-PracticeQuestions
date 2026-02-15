//  Task Manager System


function createTaskManager() {
    let task = {
        id: number,
        title: string,
        completed: false,
        createdAt: timestamp
    }
    return {
        addTask: (title) => {
            task.title = title
            console.log(task);

        }
    }
}

const task = createTaskManager()

task.addTask("This is my first task")