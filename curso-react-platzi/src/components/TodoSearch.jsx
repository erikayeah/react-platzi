import React from "react";


const TodoSearch =({searchValue, setSearchValue})=> {

  


   return (
      <div>

         <input placeholder="cortar cebolla" 
         value = {searchValue} 
         //   value es la propiedad que se conecta con el estado. PERO si value ya vale por si mismo, porque lo conectamos con el estado
         //   Al hacer esto, mi value del input solamente se omdifica en la medida que se modifique mi estado, si no, es siempre un '' como lo iniciamos.
         onChange = {(event) => setSearchValue(event.target.value)}
         //   Y con esto, cierro el bucle de q el value sea el estado, y el estado sea el value del input. Aca destrabo el hecho de q no podia escribir, y asi le voy mandando al estado lo que los usuarios vayan escribiendo.
         />

     
     </div>
   );
 }

 export { TodoSearch };