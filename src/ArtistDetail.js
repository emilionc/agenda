import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const ArtistDetail = () => {
  const { id } = useParams();

  const { data:musico, error, isPending } = useFetch(
    "       http://localhost:8000/musicos" + id
  );

  return (
    <div className="artist-detail">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {musico && (
        <div>
          <h2>{musico.name}</h2>
          <p>
            Written by {id} {musico.grupo}
          </p>
        </div>
      )}
    </div>
  );
};

export default ArtistDetail;
