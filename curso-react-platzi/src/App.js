import { TodoCounter } from './components/TodoCounter';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import React from 'react';
import './App.css';

const defaultTodos = [
  {text: 'cortar cebolla', completed :true},
  {text: 'curso react', completed :false},
  {text: 'llorar con la llorona', completed :false},
  {text: 'LALALALA', completed :false},
  {text: 'LOLOLOLO', completed :false},
]

function App() {

  const [todos, setTodos] = React.useState(defaultTodos);

  const [searchValue, setSearchValue] = React.useState(''); //Mediante los estados React sabe que debe renderizar frente a cada cambio.

  const completedTodos = todos.filter(todo => !!todo.completed).length; // El valor sera el nuevo array que me devuelve filter, con los todos que cumplan el requisito de tener .completed como true. Con length, me devuelve el numero de posiciones del array.//La doble !! es para que todo se transforme en booleano, true o false. Es lo mismo tenerlo o no.
  const totalTodos = todos.length;

  const searchedTodos = todos.filter( //El filtro que hago para ver los todos que coincidan con lo que el usuario escribe para buscar.
    (todo) => {
      const todoText = todo.text.toLowerCase(); 
      const searchText = searchValue.toLowerCase(); //ambos lados de la validacion paso a minuscula asi compara sin problema no importa como este escrito
      return todoText.includes(searchText) 
    } 
  )

  return (

    <React.Fragment>
      {/* En vez de poner un div, puedo poner esto */}

      <TodoCounter  
      completed={completedTodos} 
      total ={totalTodos} 
      />

      <TodoSearch 
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
          key= {todo.text} 
          text={todo.text}
          completed={todo.completed}
          />
        ))}
      </TodoList>
        
      
      
      <CreateTodoButton/>

    </React.Fragment>
  );
}



export default App;
