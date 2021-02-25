import React from 'react'
import { Table, Caption, THead, TBody,Tr,Th, Td, Button } from './MovieTable.style'

export interface MovieTableProps {
  movieInfo: Array<Movie>;
  voteClick: VoteClick;
}

export const MovieTable:React.FC<MovieTableProps> = ({movieInfo, voteClick}) => {
 
  return (
      <Table>
        <Caption>Vote for your favorite Star Wars movie:</Caption>
          <THead>
          <Tr>
            <Th id="movie-title">Movie Title</Th>
            <Th id="vote">Vote</Th>
            <Th id="total-votes">Total Votes</Th>
          </Tr>
          </THead>
        <TBody>
            {
              movieInfo.map((movie:Movie) => {
                return (
                  <Tr key={movie.title}>
                    <Td headers="movie-title">{movie.title}</Td>
                    <Td headers="vote">
                      <Button 
                        onClick={() => voteClick(movie.title)} 
                        data-testid={`button-${movie.title}`} 
                        aria-label="vote-button"
                      >
                        vote
                      </Button>
                    </Td>
                    <Td headers="total-votes" data-testid={`votes-${movie.title}`} >{movie.votes}</Td>
                  </Tr>
                )
              })
            }
        </TBody>
      </Table>
  )
}