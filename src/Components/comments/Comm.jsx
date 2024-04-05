import React, {useState, useEffect} from 'react'
const Comm = () => {
  const [loading, setLoading] = useState(true); 
  const [comments, setComments] = useState([]); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/comments");
        if (!res.ok) {
          throw new Error("Invalid Response from Server");
        }
        const data = await res.json();
        setComments(data);
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
        <div className='box-comm d-flex justify-content-center flex-wrap mt-5 gap-5'>
          {comments.map(comm =>
            <div className="card" style={{width: "20rem"}}  key={comm.id}>
            <div className="card-body">
              <h5 className="card-title">{comm.name}</h5>
              <p className="card-text">{comm.body}</p>
              <a href="#" className="btn btn-primary">{comm.email}</a>
            </div>
          </div>
          )}
        </div>
      )}
    </>
  );
}

export default Comm