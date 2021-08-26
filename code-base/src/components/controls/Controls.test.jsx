import React from 'react';
import Controls from './Controls'
import { render, fireEvent } from '@testing-library/react';


describe('<Controls />', () => {
    it('renders without crashing', () => {
        render(<Controls />)
    })
    it('Toggle button render correct text on render', () => {
        const { getByTestId } = render(<Controls />)
        const toggleBtn = getByTestId("toggle-btn")
        expect(toggleBtn.textContent).toBe("Start")
    })
    it('Toggle button with mocked function', () => {
        const handleRunning = jest.fn()
        const { getByTestId } = render(<Controls handleRunning={handleRunning} />)
        const toggleBtn = getByTestId("toggle-btn")
        fireEvent.click(toggleBtn)
        expect(handleRunning).toBeCalled()
    })

    it('Random button renders with correct text', () => {
        const { getByTestId } = render(<Controls />)
        const randomBtn = getByTestId("random-btn")
        expect(randomBtn.textContent).toBe("Random")
    })
    it('Random button with mocked function', () => {
        const createRandomCells = jest.fn();
        const { getByTestId } = render(<Controls createRandomCells={createRandomCells} />)
        const randomBtn = getByTestId("random-btn")
        fireEvent.click(randomBtn);
        expect(createRandomCells).toBeCalled()
    })
    it('Clear button renders with correct text', () => {
        const { getByTestId } = render(<Controls />)
        const clearBrn = getByTestId("clear-btn")
        expect(clearBrn.textContent).toBe("Clear")
    })
    it('Clear button with mocked function', () => {
        const clearGrid = jest.fn();
        const { getByTestId } = render(<Controls clearGrid={clearGrid} />)
        const gridBtn = getByTestId("clear-btn")
        fireEvent.click(gridBtn);
        expect(clearGrid).toBeCalled()
    })

})