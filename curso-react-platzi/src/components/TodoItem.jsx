


const TodoItem =(props)=> {


   return (
     <div>

     <li>
       <span
       onClick = {props.onComplete}
       > V {props.completed} </span>
       <p>{props.text}</p>
       <span
       onClick = {props.onDelete}> X </span>
     </li>

     </div>
   );
 }

 export {TodoItem};