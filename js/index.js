// alert("js starting");
  const validateName = document.querySelector("#TaskName");

    validateName.classList.remove("is-valid");
    validateName.classList.remove("is-invalid");

function validFormFieldInput(data)
{
        const newTaskName = document.querySelector("#TaskName");

        const newTaskNameValue = newTaskName.value.trim();

         console.log("new task name:" + newTaskNameValue);



    


}


const form = document.querySelector("#new-task-form");

form.addEventListener("submit", (event) => {

    let validateNameStr = document.querySelector("#TaskName");
    let validateName = validateNameStr;  //.value.trim();

//   validateName = validateName.trim();
  const validateDescription = document.querySelector("#TaskDescription");
//   const validateAssignedTo = document.querySelector("#new-task-assigned-to");
//   const validateDueDate = document.querySelector("#new-task-due-date");
//   const validateStatus = document.querySelector("#new-task-status");

let validationFail = 0;

  event.preventDefault();
  event.stopPropagation();

  console.log("Task Name:" + validateName.value);

  console.log("Task Description :" + validateDescription.value);

//   console.log("Task Assigned To :" + validateAssignedTo.value.length);
//   console.log("Task Due Date :" + validateDueDate.value);
//   console.log("Task Status:" + validateStatus.value);

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
//   if (validateAssignedTo.value.length > 5) {
//     validateAssignedTo.classList.add("is-valid");
//     validateAssignedTo.classList.remove("is-invalid");
//   } else {
//     validateAssignedTo.classList.add("is-invalid");
//     validateAssignedTo.classList.remove("is-valid");
//     validationFail++;
//   }
//   // Form validation for Due Date Field not empty
//   // try your own validation for a date in the future
//   if (validateDueDate.value) {
//     validateDueDate.classList.add("is-valid");
//     validateDueDate.classList.remove("is-invalid");
//   } else {
//     validateDueDate.classList.add("is-invalid");
//     validateDueDate.classList.remove("is-valid");
//     validationFail++;
//   }
//   // Form validation for Task Status Field not empty
//   if (validateAssignedTo.value) {
//     validateAssignedTo.classList.add("is-valid");
//     validateAssignedTo.classList.remove("is-invalid");
//   } else {
//     validateAssignedTo.classList.add("is-invalid");
//     validateAssignedTo.classList.remove("is-valid");
//     validationFail++;
//   }
  // If validation fails then function will not proceed further and
  // will return. The value of validationFail will also needed to be
  // reset to 0.
  // ----------------------------------------------------------------------------------
  if (validationFail > 0) {
    validationFail = 0;
    return;
  }
});

// alert("js ending");


