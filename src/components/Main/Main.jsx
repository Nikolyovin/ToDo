import react, { useState } from "react";

import { rerenderEntireTree } from "../..";
import s from './Main.module.css'
import Task from './Task/Task'

const Main = (props) => {



   let [value, setValue] = useState('')
   const addTask = () => {

      let text = value
      props.addTask(text)
      setValue('')
      rerenderEntireTree()

   }
   const taskElements = props.task.map(el => <Task deleteTask={props.deleteTask} markTask={props.markTask} nameTask={el.nameTask} id={el.id} isComplete={el.isComplete} />)



   return (
      <main className={s.main}>
         <form>
            <input value={value} onChange={e => setValue(e.target.value)}
               className={s.input} placeholder='Новая задача' />
            <button disabled={value.trim().length === 0} onClick={addTask} type='button' className={s.button}>Добавить</button>

         </form>
         {taskElements}
      </main>
   )
}


export default Main