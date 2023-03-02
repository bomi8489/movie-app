import { useEffect, useState } from 'react';
import Movie from '../components/Movie';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    try{
        const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimun_rating=8.5&sort_by=year`)
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    } catch (err) {
        throw err;
    }
  }
  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div>
      {
      loading ? <h1>Loading...</h1> : 
      <div>
        {movies.map(item =>
          <Movie 
            key={item.id}
            id={item.id}
            medium_cover_image={item.large_cover_image}
            title={item.title}
            summagy={item.summary}
            genres={item.genres}
          />
        )}
      </div>
      }
    </div>
  )
}

export default Home;