import React from 'react'
import Grid from './Grid';
import { render, fireEvent } from '@testing-library/react';


describe('<Grid />', () => {
    it('renders without crashing', () => {
        render(<Grid />)
    })
    it('Generation is at 0 by default', () => {
        const { getByTestId } = render(<Grid />)
        const genNumber = getByTestId("generation-number")
        expect(genNumber.textContent).toBe("0")
    })
    it('Updates generation', () => {
        const { getByTestId } = render(<Grid />)
        const toggle = getByTestId("toggle-btn")
        const generation = getByTestId("generation-number")
        fireEvent.click(toggle)
        fireEvent.click(toggle)
        expect(generation.textContent).toBe("1")

    })
    it('Toggle updates', () => {
        const { getByTestId } = render(<Grid />)
        const toggle = getByTestId("toggle-btn")
        fireEvent.click(toggle)
        expect(toggle.textContent).toBe("Stop")
        fireEvent.click(toggle)
        expect(toggle.textContent).toBe("Start")
    })

})