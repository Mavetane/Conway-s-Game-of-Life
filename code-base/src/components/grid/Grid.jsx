import React, { useCallback, useRef, useState } from 'react';
import produce from 'immer';
const numberOfRows = 25;
const numberOfColumns = 40;
const operations = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 1],
    [1, 0],
]
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
    const runningRef = useRef(running)
    runningRef.current = running
    const runSimulation = useCallback(() => {
        if (!runningRef.current) {
            return
        }
        setGrid(currentGrid => {
            return produce(currentGrid, gridCopy => {
                for (let i = 0; i < numberOfRows; i++) {
                    for (let k = 0; k < numberOfColumns; k++) {
                        let neighbors = 0;
                        operations.forEach(([x, y]) => {
                            const newI = i + x;
                            const newK = k + y
                            if (newI >= 0 && newI < numberOfRows && newK >= 0 && newK < numberOfColumns) {
                                neighbors += currentGrid[newI][newK]
                            }
                        })
                        if (neighbors < 2 || neighbors > 3) {
                            gridCopy[i][k] = 0
                        } else if (currentGrid[i][k] === 0 && neighbors === 3) {
                            gridCopy[i][k] = 1
                        }

                    }
                }
            })
        })
        setTimeout(runSimulation, 800)
    }, [])
    return (
        <>
            <button
                onClick={() => {
                    setRunning(!running)
                    if (!running) {
                        runningRef.current = true;
                        runSimulation()
                    }
                }}
            >
                {running ? 'stop' : 'start'}
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
