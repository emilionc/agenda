import ArtistList from "./ArtistList";
import useFetch from "./useFetch";
const Home = () => {
  const {
    error,
    isPending,
     data,
  } = useFetch("  http://localhost:4000/data");

  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}

      {data && <ArtistList data={data} title="Lista de musicos" />}
    </div>
  );
};

export default Home;
