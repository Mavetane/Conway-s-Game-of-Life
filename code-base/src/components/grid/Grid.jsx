import React, { useState } from 'react'
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


    const displayGrid = () => grid.map((rows, rowIndex) => rows.map((column, columnindex) => <div
        key={`${rowIndex}-${columnindex}`}
        style={{
            width: 20, height: 20,
            backgroundColor: grid[rowIndex][columnindex] ? 'black' : undefined,
            border: '1px solid black'
        }} />))

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${numberOfColumns}, 20px)`,
            justifyContent: 'center',
            marginTop: '4%',
        }}>
            {displayGrid()}
        </div>
    )
}

export default Grid
