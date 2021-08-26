import React from 'react';
import Controls from './Controls'
import { render } from '@testing-library/react';


describe('<Controls />', () => {
    it('renders without crashing', () => {
        render(<Controls />)
    })
    it('Toggle button renders with Start text', ()=> {
        const {getByTestId} = render(<Controls/>)
        const toggleBtn = getByTestId("toggle-btn")
        expect(toggleBtn.textContent).toBe("Start")
    })
    it('Random button renders with correct text', ()=> {
        const {getByTestId} = render(<Controls/>)
        const randomBtn = getByTestId("random-btn")
        expect(randomBtn.textContent).toBe("Random")
    })
    it('Clear button renders with correct text', ()=> {
        const {getByTestId} = render(<Controls/>)
        const clearBrn = getByTestId("clear-btn")
        expect(clearBrn.textContent).toBe("Clear")
    })
})