import {tasksInterface} from "./interface";

class Todos implements tasksInterface{
    myTasksArray: Array<string> = [];

    addTask(task: string): number{
        this.myTasksArray.push(task);
        console.log("Item " + task + " has been added to the Array");
        return this.myTasksArray.length;
    }

    listAllTasks(): void {
        /*for(let i=o; i<myTasksArray.length; i++)
        {}*/
    
        console.log("Array contains the following: ");
    
        this.myTasksArray.forEach(function (task) {
            console.log(task);
        })
    
    }

    deleteTask(task: string): number {
        let index: number = this.myTasksArray.indexOf(task);
        if (index > -1) {
            this.myTasksArray.splice(index, 1);
            console.log("Item " + task + " deleted from Array.");
        }
        else {
            console.log("Item " + task + " not in Array.");
        }
        return this.myTasksArray.length;
    }

}

let todo = new Todos();
todo.addTask("Complete Lab");

todo.listAllTasks();
todo.deleteTask("Complete Lab");
