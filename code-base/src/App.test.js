import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';


describe('<App />', () => {
  it('renders without crashing', () => {
      render(<App />)
  })

  it('renders header with correct text', ()=> {
    const {getByTestId} = render(<App/>);
    const headerCon = getByTestId("header")
    expect(headerCon.textContent).toBe("Conway's Game Of Life")
  })

})
