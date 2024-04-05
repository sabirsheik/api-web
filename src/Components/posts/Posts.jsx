import React, { useState, useEffect } from 'react';

const Posts = () => {
  const [loading, setLoading] = useState(true); 
  const [users, setUsers] = useState([]); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
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
            <h1 className='text-center'>Posts</h1>
        <div className='container d-flex flex-wrap justify-content-evenly m-3 gap-3'>
          {users.map(user =>
            <div className="card" key={user.id} style={{ width: "18rem" }}>
              <div className="card-body">
                <h1 className="card-title">{user.userId}</h1>
                <h4 className="card-subtitle mb-2 text-body-secondary">{user.title}</h4>
                <p className="card-text">{user.body}</p>
              </div>
            </div>
          )}
        </div>
        </div>
      )}
    </>
  );
}

export default Posts;
