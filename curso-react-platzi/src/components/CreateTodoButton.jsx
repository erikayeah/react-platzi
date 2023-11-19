


const CreateTodoButton =()=> {


   return (

     <button
     onClick={(event) => console.log(event.target)} 
     //todo lo que empieza con on en React, es un evento, onAlgo, con camelCase
     >+</button>

   );
 }

 export { CreateTodoButton};