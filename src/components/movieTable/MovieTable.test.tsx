import React from 'react'
import { MovieTable } from './MovieTable'
import { MovieTableProps } from './MovieTable'
import { cleansedData } from '../../mockTestData'
import { render, fireEvent, screen } from '@testing-library/react'

const props:MovieTableProps = {
  movieInfo: cleansedData,
  voteClick: jest.fn()
}

describe('<MovieTable/> component', () => {
 
  it('renders <MovieTable/> component with props and compares to snapshot', () => {
    const wrapper = render(<MovieTable {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
  
  it('renders a vote button for Attack of the Clones', () => {
    render(<MovieTable {...props} />)
    const button = screen.getByTestId('button-Attack of the Clones')
    expect(fireEvent.click(button)).toBeTruthy()
  })

  it('renders a vote button for each of the six movies',  () => {
    render(<MovieTable {...props} />)
    const button = screen.getAllByText("vote")
    expect(button).toHaveLength(6)
  })

})