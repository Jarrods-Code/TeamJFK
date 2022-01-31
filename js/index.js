// const validateName = document.querySelector("#TaskName");
// validateName.classList.remove("is-valid");
// validateName.classList.remove("is-invalid");

function validFormFieldInput(data) {
  const newTaskName = document.querySelector("#TaskName");

  const newTaskNameValue = newTaskName.value.trim();

  console.log("new task name:" + newTaskNameValue);

  let test = data;
}

function displayTodayDate() {
  const dateElement = document.querySelector("#DateElement");

  const today = new Date();
  console.log("today date object", today);

  const dateFormat = { year: "numeric", month: "long", day: "numeric" };

  // const Dayparts = {
  //   year: today.getFullYear(),
  //   month: today.getMonth() + 1,
  //   day: today.getDate(),
  // };

  // dateElement.innerHTML =
  //   Dayparts.day + "/" + Dayparts.month + "/" + Dayparts.year + "";

  dateElement.innerHTML = today.toLocaleDateString("en-AU", dateFormat);
}

// class Task {

//   constructor(
//     taskId,
//     taskName,
//     taskDescription,
//     taskStatus,
//     taskOwner,
//     taskDueDate
//   ) {
//     this.Id = taskId;
//     this.taskName = taskName;
//     this.taskDescription = taskDescription;
//     this.taskStatus = taskStatus;
//     this.taskOwner = taskOwner;

//     const dateFormat = { year: "numeric", month: "long", day: "numeric" };
//     const dueDate = new Date(taskDueDate);
//     const formattedDate = dueDate.toLocaleDateString("en-AU", dateFormat);
//     this.taskDueDate = formattedDate;
//   }

//   // setTaskID(id) {
//   //   this.Id = id;
//   // }

//   // function addTask
// }

// class taskManager {
//   //   static currentID = 0;

//   constructor(currentId = 0) {
//     this.currentID = currentId;

//     //initialize array to save new tasks
//     this.taskList = [];

//     console.log(
//       "value of task array when task Manager is initialized: ",
//       this.taskList
//     );

//     console.log("initialize task manager, tasks init state: ", this.taskList);
//   }

//   validFormFieldInput(
//     taskName,
//     taskDescription,
//     taskOwner,
//     dueDate,
//     taskStatus
//   ) {}

//   //add new task
//   addTask(taskName, taskDescription, taskStatus, taskOwner, taskDueDate) {
//     this.currentID += 1;

//     //create task object using task class
//     const task = new Task(
//       this.currentID,
//       taskName,
//       taskDescription,
//       taskStatus,
//       taskOwner,
//       taskDueDate
//     );

//     this.taskList.push(task);

//     console.log("new task added to taskList array: ", task);
//   }

//   createTaskHtml(task) {
//     let taskStr = `<ul class="list-group" id="tasksList">

//                         <li class="list-group-item">
//                             <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
//                                 <h5>${task.taskName}</h5>
//                                 <span class="badge badge-progress">${task.taskStatus}</span>
//                             </div>
//                             <div class="d-flex w-100 mb-3 justify-content-between">
//                                 <small>Assigned To: ${task.taskOwner}</small>
//                                 <small>Due: ${task.taskDueDate}</small>
//                             </div>
//                             <p>${task.taskDescription}</p>
//                             <p><button class="edit btn btn-info btn-sm" name="edit"><a
//                                         style="text-decoration: none; color:white" href="EditTask.html">EDIT</a></button>
//                                 <button class="delete btn btn-info btn-sm" name="delete">DELETE</button>
//                             </p>
//                         </li>
//                     </ul>`;

//     return taskStr;
//   }

//   render() {
//     let tasksHtmlList = [];
//     let newTasks = document.getElementById("taskManager");
//     let taskHTML = "";

//     for (let i = 0; i < this.taskList.length; i++) {
//       let currentTask = this.taskList[i];

//       taskHTML = this.createTaskHtml(currentTask);
//       console.log(taskHTML);

//       tasksHtmlList.push(taskHTML);
//     }

//     taskHTML = tasksHtmlList.join("\n");

//     newTasks.innerHTML = taskHTML;
//   }
// }

// display today date
displayTodayDate();

//create task manager
let taskMgr = new taskManager();

const form = document.querySelector("#new-task-form");

//add handler to submit event
form.addEventListener("submit", (event) => {
  //prevent default action of the form

  event.preventDefault();
  event.stopPropagation();

  const validateName = document.querySelector("#TaskName");
  const validateDescription = document.querySelector("#TaskDescription");
  const validateAssignedTo = document.querySelector("#Assigned");
  const validateDueDate = document.querySelector("#datepicker");
  const validateStatus = document.querySelector("#Status");

  let validationFail = 0;

  //log user input
  console.log("Task Name:" + validateName.value);
  console.log("Task Description :" + validateDescription.value);
  console.log("Task Assigned To :" + validateAssignedTo.value);
  console.log("Task Due Date :" + validateDueDate.value);
  console.log("Task Status:" + validateStatus.value);

  // console.log("Task Name:" + validateName);
  // console.log("Task Description :" + validateDescription);
  // console.log("Task Assigned To :" + validateAssignedTo.value);
  // console.log("Task Due Date :" + validateDueDate);
  // console.log("Task Status:" + validateStatus);

  // Form validation for Task Name Field min length 5
  if (validateName.value.length > 5) {
    validateName.classList.add("is-valid");
    validateName.classList.remove("is-invalid");
  } else {
    validateName.classList.add("is-invalid");
    validateName.classList.remove("is-valid");
    validationFail++;
  }

  // Form validation for Task Description Field min length 5
  if (validateDescription.value.length > 5) {
    validateDescription.classList.add("is-valid");
    validateDescription.classList.remove("is-invalid");
  } else {
    validateDescription.classList.add("is-invalid");
    validateDescription.classList.remove("is-valid");
    validationFail++;
  }

  //   // Form validation for Task Assigned Field min length 5
  if (validateAssignedTo.value.length > 5) {
    validateAssignedTo.classList.add("is-valid");
    validateAssignedTo.classList.remove("is-invalid");
  } else {
    validateAssignedTo.classList.add("is-invalid");
    validateAssignedTo.classList.remove("is-valid");
    validationFail++;
  }

  //   // Form validation for Due Date Field not empty
  if (validateDueDate.value) {
    validateDueDate.classList.add("is-valid");
    validateDueDate.classList.remove("is-invalid");
  } else {
    validateDueDate.classList.add("is-invalid");
    validateDueDate.classList.remove("is-valid");

    validationFail++;
  }

  //   // Form validation for Task Status Field not empty
  if (validateStatus.value) {
    validateStatus.classList.add("is-valid");
    validateStatus.classList.remove("is-invalid");
  } else {
    validateStatus.classList.add("is-invalid");
    validateStatus.classList.remove("is-valid");

    validationFail++;
  }
  // If validation fails then function will not proceed further and
  // will return. The value of validationFail will also needed to be
  // reset to 0.
  // ----------------------------------------------------------------------------------
  if (validationFail > 0) {
    validationFail = 0;
    return;
  } // task details validated so can add to news task details to  do list
  else {
    //all the fields passed validation, so can add task
    taskMgr.addTask(
      validateName.value,
      validateDescription.value,
      validateStatus.value,
      validateAssignedTo.value,
      validateDueDate.value
    );

    taskMgr.render();

    //clear form ready for next new task
    validateName.value = "";

    validateDescription.value = "";

    validateAssignedTo.value = "";

    validateDueDate.value = "";

    validateStatus.value = "";

    validateName.classList.remove("is-valid");

    validateAssignedTo.classList.remove("is-valid");

    validateDueDate.classList.remove("is-valid");

    validateStatus.classList.remove("is-valid");

    validateDescription.classList.remove("is-valid");
  }
});

// alert("js ending");
