type InitialMovieData = {
  data: SWAPIData
}

type Movie = {
  title: string;
  votes: number;
  date: string;
}

type VoteClick = (title:string) => void;

type VotesReducer = (acc:number, movieVotes:number) => number

type ApiCall = () => Promise
  
type SWAPIData = {
  count: number,
  next: null,
  previous: null,
  results: Array<Results>
}
  
type Results = {
  characters: Array<string>,
  created: string,
  director: string,
  edited: string,
  edisode_id: number,
  opening_crawl: string,
  planets: Array<string>,
  producer: string,
  release_date: string,
  species: Array<string>,
  starships: Array<string>
  title: string,
  url: string,
  vehicles: Array<string>
}