import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const ArtistDetail = () => {
  const { id } = useParams();

  const {
    data: dat,
    error,
    isPending,
  } = useFetch("  http://localhost:4000/data" + id);

  return (
    <div className="artist-detail">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {dat && (
        <div>
          <h2>{dat.title}</h2>
          <p>Written by {dat.age}</p>
        </div>
      )}
    </div>
  );
};

export default ArtistDetail;
