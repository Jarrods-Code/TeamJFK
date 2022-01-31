  const validateName = document.querySelector("#TaskName");
    validateName.classList.remove("is-valid");
    validateName.classList.remove("is-invalid");

function validFormFieldInput(data)
{
        const newTaskName = document.querySelector("#TaskName");

        const newTaskNameValue = newTaskName.value.trim();

         console.log("new task name:" + newTaskNameValue);

         let test = data;




        
}

function displayTodayDate()
{
    const  dateElement = document.querySelector("#DateElement");

    const today = new Date();

    const Dayparts = {
      year: today.getFullYear(),
      month: today.getMonth() + 1,
      day: today.getDate(),
    };

    dateElement.innerHTML = Dayparts.day + '/' + Dayparts.month + '/' + Dayparts.year + '';
}



class Task {
  // constructor(taskName, taskDescription, taskStatus, taskOwner, taskDueDate)
  // {
  //     taskName;
  //     taskDescription;
  //     taskStatus;
  //     taskOwner;
  //     taskDueDate;
  // }

 

  //to do: add other properties
 
  constructor(taskName, taskDescription) {
    this.taskName = taskName;
    this.taskDescription = taskDescription;
  }

  setTaskID(id)
  {
      this.Id = id;
  }

  // function saveTask
}

class taskManager {
//   static currentID = 0;

  constructor(id=0) {
    this.currentID =id;  //currentID is to keep track where is the current latest ID so you know what is  the next id to assign to the next taask
    console.log(this.currentID);
 
    //array to save new tasks    
    this.taskList = [];

    console.log("initialize task manager, tasks init state: ", this.taskList);

    // let t1 = new Task("name", "description");
    //   this.taskList.push(t1);
  }

  

  //add new task
  saveTask(task) {
      this.currentID += 1;
      task.setTaskID(this.currentID);
      this.taskList.push(task);

  }


        displayInvididualTask(task) {

            let taskStr = `<ul class="list-group" id="tasksList">

                        <li class="list-group-item">
                            <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
                                <h5>${task.taskName}</h5>
                                <span class="badge badge-progress">In Progress</span>
                            </div>
                            <div class="d-flex w-100 mb-3 justify-content-between">
                                <small>Assigned To: Jarrod</small>
                                <small>Due: 12/12/2021</small>
                            </div>
                            <p>${task.taskDescription}</p>
                            <p><button class="edit btn btn-info btn-sm" name="edit"><a
                                        style="text-decoration: none; color:white" href="EditTask.html">EDIT</a></button>
                                <button class="delete btn btn-info btn-sm" name="delete">DELETE</button>
                            </p>
                        </li>
                    </ul>`
            
            return taskStr;
        }
        

  displayTaskList() {

    let newTasks = document.getElementById("taskManager"); 
    let newTasksString="";

    
    for (let i = 0; i < this.taskList.length; i++) {

        // console.log("id: " + tsk.Id, tsk.taskName, tsk.taskDescription);
        
             newTasksString +=  this.displayInvididualTask(this.taskList[i]);
    }


    newTasks.innerHTML = newTasksString;

   

    
 
  }
}

//create task manager 
let taskMgr = new taskManager();

displayTodayDate();

const form = document.querySelector("#new-task-form");

form.addEventListener("submit", (event) => {


    
    let validateName = document.querySelector("#TaskName");

//   validateName = validateName.trim();
    const validateDescription = document.querySelector("#TaskDescription");
    const validateAssignedTo = document.querySelector("#Assigned");
    const validateDueDate = document.querySelector("#datepicker");
    const validateStatus = document.querySelector("#Status");

let validationFail = 0;

  event.preventDefault();
  event.stopPropagation();

  console.log("Task Name:" + validateName.value);

  console.log("Task Description :" + validateDescription.value);

  console.log("Task Assigned To :" + validateAssignedTo.value.length);
  console.log("Task Due Date :" + validateDueDate.value);
  console.log("Task Status:" + validateStatus.value);

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
//   // try your own validation for a date in the future
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
  }
  else // task details validated so can add to news task details to  do list
  {
      console.log("start");

      let newTask = new Task(validateName.value, validateDescription.value);
      
      taskMgr.saveTask(newTask);

      taskMgr.displayTaskList();

        validateName.value = "";

        validateDescription.value = "";

        validateAssignedTo.value = "";

        validateDueDate.value = "";

        validateStatus.value = "";
        

      console.log("end");



  }
});

// alert("js ending");


