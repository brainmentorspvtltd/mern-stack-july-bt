// It contains the logic of CRUD
// var obj = {key:value, key:value}
const todoOperations = {
    // addTask : function(){

    // }
    tasks:[], 
    getTotal(){
        return this.tasks.length;
    },
    addTask(task){
        this.tasks.push(task);
    },
    removeTask(){

    },
    searchTask(){

    },
    updateTask(){

    },
    sortTask(){

    }
}
export default todoOperations;
