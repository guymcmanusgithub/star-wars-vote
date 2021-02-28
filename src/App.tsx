import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios'
import { MovieTable } from './components/movieTable/MovieTable';
import { Container, H1, P, Span } from './App.style'

export const swapiApi:string = 'https://swapi.dev/api/films/';
 
export const fetchData:ApiCall = async () => {
  const url = `${swapiApi}`;
  return await axios.get(url);
};

function App() {
  const [movieInfo, setMovieInfo] = useState<Array<Movie>>([])
  const [totalVotes, setTotalVotes] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)
  const [apiError, setApiError] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  useEffect(() => {
    return fetchData()
    .then((data:AxiosResponse<SWAPIData>) => { 
      const {data:{results}} = data
      
      const newMovieArray:Array<Movie> = results.map((movie:Results) => (
        {
          title: movie.title,
          votes: 0,
          date: movie.release_date
        }
      ))
      // The data from SWAPI already comes back sorted by date, so the below function is simply a failsafe if the api decides to return the data not sorted by date in the future.
      newMovieArray.sort((a:Movie, b:Movie) => {
        return (a.date < b.date) ? -1 : ((a.date > b.date) ? 1 : 0);
      });
      setMovieInfo(newMovieArray)
      setLoading(false)
      setApiError(false)
    })
    .catch((err: any) => { 
      setLoading(false)
      setApiError(true)
      setErrorMessage(err.message)
    });
  },[])

  const votesReducer:number = movieInfo.reduce((acc:number, movie:Movie) => acc + movie.votes, 1)

  const voteClick:VoteClick = (title) => {
    const newMovies:React.SetStateAction<Movie[]> = movieInfo.map(movie => {
      let {votes} = movie
      if(movie.title === title) {
        return {...movie, votes: (votes + 1)}
      } 
      return movie 
    })
    setMovieInfo(newMovies);
    setTotalVotes(votesReducer);
  }

  if (loading){
    return <P data-testid="loading">I find your lack of faith disturbing.  The app is <strong>Loading...</strong></P>
  }

  if (apiError && !loading) {
    return <P data-testid="api-error">You would be wise to surrender. An error has occurred: {errorMessage}</P>
  }

  return (
    <Container data-testid="app-container">
      {!loading && !apiError &&
        <> 
          <H1>Vote Wars</H1>
          <MovieTable movieInfo={movieInfo} voteClick={voteClick}/>
          <P>Total Votes: <Span>{totalVotes}</Span></P>
        </>
      }
    </Container>
  );
}

export default App;