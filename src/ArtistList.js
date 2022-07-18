import { Link } from "react-router-dom";

const ArtistList = ({ musicos }) => {
  return (
    <div className="blog-list">
      <h1>Lista</h1>
      {musicos.map((musico) => (
        <div className="blog-preview" key={musico.id}>
          <Link to={`/musicos/${musico.id}`}>
            <h2>Name: {musico.name}</h2>
            <p>He is {musico.age} years old</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ArtistList;
