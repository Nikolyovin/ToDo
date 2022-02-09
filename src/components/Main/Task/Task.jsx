import { rerenderEntireTree } from '../../..'
import s from './Task.module.css'
import react from "react";
import './Task.css'



const Task = (props) => {

   const markTask = () => {
      props.markTask(props.id)
      rerenderEntireTree()
   }

   const deleteTask = () => {
      props.deleteTask(props.id)
      rerenderEntireTree()
   }

   return (
      <div className={props.isComplete ? 'active' : 'noActive'}>
         <span className={s.task_name}>{props.nameTask}</span>
         <div className={s.wrap_button}>
            <div onClick={markTask} className={props.isComplete ? 'mark-active' : 'mark'} >V</div>
            <div onClick={deleteTask} className={s.delete}>X</div>
         </div>
      </div>
   )
}


export default Task