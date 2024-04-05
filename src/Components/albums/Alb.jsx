import React,{useState, useEffect} from 'react'

const Alb = () => {
  const [loading, setLoading] = useState(true); 
  const [albums, setAlbums] = useState([]); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/albums");
        if (!res.ok) {
          throw new Error("Invalid Response from Server");
        }
        const data = await res.json();
        setAlbums(data);
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
        <div className='container'>
          {albums.map(alb =>
           <h6 key={alb.id}> {alb.id} {alb.title}</h6>
          )}
        </div>
      )}
    </>
  );
}

export default Alb