import React from "react";

const ArtistList = ({ artist, title, grupo, handleDelete }) => {
  // const artist = props.artist;
  // const  title = props.title;
  return (
    <div>
      <h1>{title}</h1>
      {artist.map((lista) => (
        <div className="lista-musicos" key={artist.id}>
          <h2>Name: {lista.name}</h2>
          <p>He is {lista.age} years old</p>
          <p>{lista.grupo}</p>
          <button onClick={() => handleDelete(lista.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default ArtistList;
