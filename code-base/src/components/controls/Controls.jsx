import './Controls.css'
import React from 'react'

function Controls({ clearGrid, createRandomCells, running, handleRunning }) {
    return (
        <div className="Controls">
            <button onClick={() => createRandomCells()}>
                Random
            </button>
            <button onClick={() => handleRunning()}>
                {running ? 'Stop' : 'Start'}
            </button>
            <button onClick={() => clearGrid()}>
                Clear
            </button>
        </div>
    )
}

export default Controls
