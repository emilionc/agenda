import ArtistList from "./ArtistList";
import useFetch from "./useFetch";
const Home = () => {
  const {
    error,
    isPending,
     data: musicos,
  } = useFetch("        http://localhost:8000/musicos");

  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}

      {musicos && <ArtistList musicos={musicos} title="Lista de musicos" />}
    </div>
  );
};

export default Home;
