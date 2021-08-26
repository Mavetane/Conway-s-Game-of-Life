import React from 'react'

function Controls({ clearGrid, createRandomCells, running, handleRunning }) {
    return (
        <>
            <div>
                <button onClick={() => createRandomCells()}>
                    random
                </button>
                <button onClick={() => handleRunning()}>
                    {running ? 'stop' : 'start'}
                </button>
                <button onClick={() => clearGrid()}>
                    clear
                </button>
            </div>
        </>
    )
}

export default Controls
