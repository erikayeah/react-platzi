


const TodoCounter = ({ total, completed }) => {
  return (
    <div>
      {total ? (
        <h1>Has completado {completed} de {total} TODOS</h1>
      ) : (
        <p>Felicidades! Completaste todas las tareas </p>
      )}
    </div>
  );
}

export { TodoCounter };