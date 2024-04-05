import React,{useState, useEffect} from 'react'

const Todos = () => {
  const [loading, setLoading] = useState(true); 
  const [todos, setTodos] = useState([]); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        if (!res.ok) {
          throw new Error("Invalid Response from Server");
        }
        const data = await res.json();
        setTodos(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="container-spiner">
          <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        </div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div className='container d-flex justify-content-center  gap-3 m-4 flex-wrap'>
          <ul>
          {todos.map(todo =>
         <li key={todo.id}>{todo.title}</li>
          )}
          </ul>
        </div>
      )}
    </>
  );
}

export default Todos