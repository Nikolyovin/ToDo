import { rerenderEntireTree } from "."


let state = {
   tasks: [

   ]
}

export const addTask = (TaskName) => {
   let newTask = {
      id: state.tasks.length + 1,
      nameTask: TaskName,
      isComplete: false,
   }
   state.tasks.push(newTask)
   rerenderEntireTree()
}

export const deleteTask = (taskId) => {
   state.tasks.splice(state.tasks.findIndex(item => item.id === taskId), 1)

}

export const markTask = (taskId) => {
   state.tasks.map(el => {
      if (el.id === taskId) { el.isComplete = !el.isComplete }
   })

}




export default state