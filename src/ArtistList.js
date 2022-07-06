import { Link } from "react-router-dom";

const ArtistList = ({  title, data, age}) => {
  

  
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {data.map((dat) => (
        <div className="blog-preview" key={dat.id}>
        <Link to={`/data/${data.id}`}>
        <h2>Name: {dat.name}</h2>
          <p>He is {dat.age} years old</p>
        </Link>
          
        </div>
      ))}
    </div>
  );
};

export default ArtistList;
