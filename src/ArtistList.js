import { Link } from "react-router-dom";

const ArtistList = ({ data }) => {
  return (
    <div className="blog-list">
      <h1>Lista</h1>
      {data.map((dat) => (
        <div className="blog-preview" key={dat.id}>
          <Link to={`/data/${dat.id}`}>
            <h2>Name: {dat.name}</h2>
            <p>He is {dat.age} years old</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ArtistList;
