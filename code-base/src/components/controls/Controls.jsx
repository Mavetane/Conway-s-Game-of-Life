import './Controls.css'
import React from 'react'

function Controls({ clearGrid, createRandomCells, running, handleRunning }) {
    return (
        <div className="Controls">
            <button data-testid="toggle-btn"
                onClick={() => handleRunning()}>
                {running ? 'Stop' : 'Start'}
            </button>
            <button data-testid="random-btn"
                onClick={() => createRandomCells()}>
                Random
            </button>
            <button data-testid="clear-btn"
                onClick={() => clearGrid()}>
                Clear
            </button><br />
        </div>
    )
}

export default Controls
