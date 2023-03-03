import { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import {
    Container, 
    Loader,
    Movies,
} from "../Presenter/HomePresenter"

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const json = await (
        await fetch(`https://yts.mx/api/v2/list_movies.json?minimun_rating=8.5&sort_by=year`)
        ).json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(() => {
    getMovies()
  }, [])

  return (
    <Container>
      {
      loading ? <Loader>Loading...</Loader> : 
      <Movies>
        {movies.map(item =>
          <Movie 
            key={item.id}
            id={item.id}
            medium_cover_image={item.medium_cover_image}
            title={item.title}
            year={item.year}
            summary={item.summary}
            genres={item.genres}
          />
        )}
      </Movies>
      }
    </Container>
  )
}

export default Home;