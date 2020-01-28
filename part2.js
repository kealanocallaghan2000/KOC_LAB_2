//Array of strings
var myTasksArray = [];
//AddTask function
function AddTask(task) {
    myTasksArray.push(task);
    console.log("Item " + task + " has been added to the Array");
    return myTasksArray.length;
}
function listAllTasks() {
    /*for(let i=o; i<myTasksArray.length; i++)
    {}*/
    console.log("Array contains the following: ");
    myTasksArray.forEach(function (task) {
        console.log(task);
    });
}
function deleteTask(task) {
    var index = myTasksArray.indexOf(task);
    if (index > -1) {
        myTasksArray.splice(index, 1);
        console.log("Item " + task + " deleted from Array.");
    }
    else {
        console.log("Item " + task + " not in Array.");
    }
    return myTasksArray.length;
}
var numberOfTasks = AddTask("Eat breakfast");
console.log("The number of tasks to do today is: " + numberOfTasks);
listAllTasks();
deleteTask("Complete Lab");
