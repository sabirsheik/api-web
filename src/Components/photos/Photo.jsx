import React,{useState, useEffect} from 'react'

const Photo = () => {
  const [loading, setLoading] = useState(true); 
  const [photos, setPhotos] = useState([]); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/photos");
        if (!res.ok) {
          throw new Error("Invalid Response from Server");
        }
        const data = await res.json();
        setPhotos(data);
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
         <h1 className='text-center'>Photos</h1>
         <div className='container d-flex justify-content-center  gap-3 m-4 flex-wrap'>
          {photos.map(photo =>
          <div className="card" style={{width:"300px"}} key={photo.id}>
          <img src={photo.url} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">{photo.title}</p>
          </div>
        </div>
          )}
        </div>
       </div>
      )}
    </>
  );
}

export default Photo