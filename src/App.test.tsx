import React from 'react';
import App from './App';
import '@testing-library/jest-dom/extend-expect';
import { render, waitFor, getByText, screen, act} from '@testing-library/react';
import { sWAPIdata } from './mockTestData';

import mockedAxios from 'axios';

jest.mock('axios')

describe('app component', () => {

    it('shows a loading screen before returning API data', () => {
      render(<App/>)
      act(() => {
        const element = screen.getByTestId('loading')
        expect(element).toBeVisible()
      })

    })

    // it('gets an error from the api', async () => {
    //      mockedAxios.get.mockRejectedValueOnce({message: 'You would be wise to surrender. An error has occurred:'})
    //      await waitFor(() => {
    //       expect(getByText('You would be wise to surrender. An error has occurred:'));
    //     });
    // })

    // it('calls the get method from axios', async () => {
    //   const data = { sWAPIdata}
    //   mockedAxios.get.mockResolvedValueOnce({data: data});
    //   const { getByText } = render(<App />);
    //   await act(() => {
    //     expect(getByText('You would be wise to surrender. An error has occurred:')).toBeTruthy();
    //   })
    // });
})

