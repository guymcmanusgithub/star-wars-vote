import React from 'react';
import App from './App';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, cleanup, findByText, fireEvent,} from '@testing-library/react';
import { sWAPIdata } from './mockTestData';
import axios from 'axios';

jest.mock('axios')

beforeEach(() => {
  jest.clearAllMocks();
})

afterEach(cleanup)
  
describe('<App/> component shows three possible components', () => {

  it('shows a loading screen before returning API data', () => {
      render(<App/>)
        const element = screen.getByTestId('loading')
        expect(element).toMatchSnapshot()
        expect(element).toBeVisible()
    })

  it('shows an error screen when erroring', async() => {
    jest.spyOn(axios, 'get').mockRejectedValue({
      error: "There has been an error"
    })
      
    const { findByTestId} = render(<App/>)
    const element =  await findByTestId('api-error')
    expect(element).toMatchSnapshot()
    const errorMessage =  await findByText(element, 'You would be wise to surrender. An error has occurred:')
    expect(errorMessage).toBeTruthy()
  })

  it('calls the get method from axios', async () => {
    jest.spyOn(axios, 'get').mockResolvedValue(
      sWAPIdata
    )
      
    const {findByTestId} = render(<App/>)
    const container =  await findByTestId('app-container')
    expect(container).toMatchSnapshot()
    const voteWars =  await findByText(container, 'Vote Wars')
    expect(voteWars).toBeTruthy()
  })
       
})

describe('<App/> functions', () => {
  it('adds a vote when the vote button is clicked', async () => {
    jest.spyOn(axios, 'get').mockResolvedValue(
      sWAPIdata
    )
      
    const {findByTestId} = render(<App/>)
    await findByTestId('app-container')

    const initialVotes = screen.getByTestId('votes-Return of the Jedi')
    expect(initialVotes).toHaveTextContent('0')

    const button = screen.getByTestId('button-Return of the Jedi')
    expect(fireEvent.click(button)).toBeTruthy()

    const updatedVotes = screen.getByTestId('votes-Return of the Jedi')
    expect(updatedVotes).toHaveTextContent('1')
    expect(updatedVotes).not.toHaveTextContent('3')
  })
})

