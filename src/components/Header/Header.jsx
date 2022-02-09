import s from './Header.module.css'



let Header = () => {
   return (
      <header className={s.wrap} >
         <h1 className={s.title} >Список задач</h1>
      </header >
   )
}


export default Header