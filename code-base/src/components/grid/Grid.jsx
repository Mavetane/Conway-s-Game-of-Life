import React, { useCallback, useRef, useState } from 'react';
import produce from 'immer';
import { gridFunctions } from '../game_functions/grid'
import Controls from '../controls/Controls';

const numberOfRows = 25;
const numberOfColumns = 40;

function Grid() {
    const { generateEmptyGrid, copmuteGameRules } = gridFunctions();
    const [running, setRunning] = useState(false);
    const runningRef = useRef(running)
    runningRef.current = running
    const [grid, setGrid] = useState(() => {
        return generateEmptyGrid(numberOfRows, numberOfColumns)
    })
    const generateRandomCells = () => {
        const rows = []
        for (let i = 0; i < numberOfRows; i++) {
            rows.push(Array.from(Array(numberOfColumns), () => (Math.random() > 0.8 ? 1 : 0)))
        }
        setGrid(rows)
    }

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
    const runSimulation = useCallback(() => {
        if (!runningRef.current) {
            return
        }
        setGrid(currentGrid => {
            return produce(currentGrid, gridCopy => {
                copmuteGameRules(currentGrid, numberOfRows, numberOfColumns, gridCopy)
            })
        })
        setTimeout(runSimulation, 500)
    }, [])
    const toggleRunning = () => {
        setRunning(!running)
        if (!running) {
            runningRef.current = true;
            runSimulation()
        }
    }

    const resetGrid = () => {
        setGrid(generateEmptyGrid(numberOfRows, numberOfColumns))
    }
    return (
        <>
            <Controls
                running={running}
                clearGrid={resetGrid}
                createRandomCells={generateRandomCells}
                handleRunning={toggleRunning}
            />
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
