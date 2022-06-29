import React, { useState } from "react";
import ArtistList from "./ArtistList";

const Home = () => {
  const [artist, setArtist] = useState([
    { name: "John Lennon", age: 27, grupo: "beatles", id: 1 },
    { name: "Paul Maccartney", age: 26, grupo: "beatles", id: 2 },
    { name: "Mick Jagger", age: 28, grupo: "stones", id: 3}
  ]);
const handleDelete = (id) => {
const newList = artist.filter(art => art.id !== id  )
setArtist(newList);

}
  return (
    <div>
      <ArtistList artist={artist} title= "Lista de musicos" handleDelete={handleDelete} />
      <ArtistList artist={artist.filter((lista)=> lista.grupo === "beatles")} title= "beatles" />
    </div>
  )
};

export default Home;
