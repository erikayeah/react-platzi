// import { TodoItem } from "./TodoItem";


const TodoList =(props)=> { //React crea, dentro de als aperturas de apertura y cierre, react lo transforma automaticamente en props.children. En este caso, en APP todoList tiene una etiqueta de apertura y otro de cierre.


   return (
     
     <ul>

      {props.children}

     </ul>
    

   );
 }

 export { TodoList};