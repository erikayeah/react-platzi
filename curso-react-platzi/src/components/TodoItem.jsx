


const TodoItem =(props)=> {


   return (
     <div>

     <li>
       <span> V {props.completed} </span>
       <p>{props.text}</p>
       <span> X </span>
     </li>

     </div>
   );
 }

 export {TodoItem};