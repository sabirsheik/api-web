import React,{useState, useEffect} from 'react'

const Users = () => {
  const [loading, setLoading] = useState(true); 
  const [users, setUsers] = useState([]); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) {
          throw new Error("Invalid Response from Server");
        }
        const data = await res.json();
        setUsers(data);
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
        <div className="container">
          <h1 className='text-center'>Users</h1>
          <div className='container d-flex justify-content-center  gap-3 m-4 flex-wrap'>
          {users.map(user =>
            <ul className="list-group" key={user.id}>
            <li className="list-group-item"><h5>{user.name}</h5></li>
            <li className="list-group-item">{user.username}</li>
            <li className="list-group-item">{user.email}</li>
            <li className="list-group-item">{user.address.street}</li>
            <li className="list-group-item">{user.address.suite}</li>
            <li className="list-group-item">{user.address.city}</li>
            <li className="list-group-item">{user.address.zipcode}</li>
            <li className="list-group-item"><h5>{user.address.geo.lat}</h5></li>
            <li className="list-group-item"><h5>{user.address.geo.lng}</h5></li>
          </ul>
          )}
         
        </div>
        </div>
      )}
    </>
  );
}

export default Users