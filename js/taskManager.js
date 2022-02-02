


// task class
class Task {
  constructor(
    taskId,
    taskName,
    taskDescription,
    taskStatus,
    taskOwner,
    taskDueDate
  ) {
    this.Id = taskId;
    this.taskName = taskName;
    this.taskDescription = taskDescription;
    this.taskStatus = taskStatus;
    this.taskOwner = taskOwner;

    const dateFormat = { year: "numeric", month: "long", day: "numeric" };
    const dueDate = new Date(taskDueDate);
    const formattedDate = dueDate.toLocaleDateString("en-AU", dateFormat);
    this.taskDueDate = formattedDate;
  }

  
}


//task manager class


class taskManager {
  //   static currentID = 0;

  constructor(currentId = 0) {
    this.currentID = currentId;

    //initialize array to save new tasks
    this.taskList = [];

    console.log(
      "value of task array when task Manager is initialized: ",
      this.taskList
    );

    console.log("initialize task manager, tasks init state: ", this.taskList);
  }

  validFormFieldInput(
    taskName,
    taskDescription,
    taskOwner,
    dueDate,
    taskStatus
  ) {}

  //add new task
  addTask(taskName, taskDescription, taskStatus, taskOwner, taskDueDate) {
    this.currentID += 1;

    //create task object using task class
    const task = new Task(
      this.currentID,
      taskName,
      taskDescription,
      taskStatus,
      taskOwner,
      taskDueDate
    );

    this.taskList.push(task);

    console.log("new task added to taskList array: ", task);
  }

  createTaskHtml(task) {
    let taskStr = `<ul class="list-group" id="tasksList">

                        <li class="list-group-item">
                            <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
                                <h5>${task.taskName}</h5>
                                <span class="badge badge-progress">${task.taskStatus}</span>
                            </div>
                            <div class="d-flex w-100 mb-3 justify-content-between">
                                <small>Assigned To: ${task.taskOwner}</small>
                                <small>Due: ${task.taskDueDate}</small>
                            </div>
                            <p>${task.taskDescription}</p>
                            <p><button class="edit btn btn-secondary btn-sm" name="edit"><a
                                        style="text-decoration: none; color:white" href="EditTask.html">EDIT</a></button>
                                <button class="delete btn btn-secondary btn-sm" name="delete">DELETE</button>
                            </p>
                        </li>
                    </ul>`;

    return taskStr;
  }

  render() {
    let tasksHtmlList = [];
    let newTasks = document.getElementById("taskManager");
    let taskHTML = "";

    for (let i = 0; i < this.taskList.length; i++) {
      let currentTask = this.taskList[i];

      taskHTML = this.createTaskHtml(currentTask);
      console.log(taskHTML);

      tasksHtmlList.push(taskHTML);
    }

    taskHTML = tasksHtmlList.join("\n");

    newTasks.innerHTML = taskHTML;
  }
}
