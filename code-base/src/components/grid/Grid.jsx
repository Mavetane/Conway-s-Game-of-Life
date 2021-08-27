import './Grid.css'
import React, { useCallback, useRef, useState } from 'react';
import produce from 'immer';
import { gridFunctions } from '../game_functions/grid'
import Controls from '../controls/Controls';
import Slider from '../controls/Slider';


const numberOfRows =100;
const numberOfColumns = 180;
var genTracker = 0
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
            width: 15 , height: 15,
            backgroundColor: grid[rowIndex][columnIndex] ? 'rgb(30, 160, 30)' : undefined,
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
        genTracker ++;
        setTimeout(runSimulation, 300)
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
        genTracker = 0;
    }
    return (
        <>
            <Controls
                running={running}
                clearGrid={resetGrid}
                createRandomCells={generateRandomCells}
                handleRunning={toggleRunning}
            /><br/>
            <div>
                <h1>
                    Generation:
                    <label data-testid="generation-number">
                        {genTracker}
                    </label>
                </h1>
            </div>
           
                    <Slider 
                    configuredGrid={displayGrid}
                    numberOfColumns={numberOfColumns}
                    />
        </>
    )
}

export default Grid
