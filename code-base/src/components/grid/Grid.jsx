import React, { useState } from 'react';
import produce from 'immer';
const numberOfRows = 25;
const numberOfColumns = 40;
function Grid() {
    const [grid, setGrid] = useState(() => {
        const rows = []
        for (let i = 0; i < numberOfRows; i++) {
            rows.push(Array.from(Array(numberOfColumns), () => 0))
        }
        return rows
    })


    const displayGrid = () => grid.map((rows, rowIndex) => rows.map((column, columnIndex) => <div
        key={`${rowIndex}-${columnIndex}`}
        onClick={() => {
            const newGrid = produce(grid, gridCopy => {
                gridCopy[rowIndex][columnIndex] = grid[rowIndex][columnIndex] ? 0 : 1; 
            })
            setGrid(newGrid)
        }}
        style={{
            width: 20, height: 20,
            backgroundColor: grid[rowIndex][columnIndex] ? '#282c34' : undefined,
            border: '1px solid black'
        }} />))
    const [running, setRunning] = useState(false);
    return (
        <>
        <button
        onClick={() => {
            setRunning(!running)
        }}
        >
        {running ? 'stop': 'start'}
        </button>
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${numberOfColumns}, 20px)`,
                justifyContent: 'center',
                marginTop: '4%',
            }}>
            {displayGrid()}
        </div>
        </>
    )
}

export default Grid
