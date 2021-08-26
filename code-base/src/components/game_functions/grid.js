import React from 'react';
import produce from 'immer';

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

export const gridFunctions = () => {
    const generateEmptyGrid = (numberOfRows, numberOfColumns) => {

        const rows = []
        for (let i = 0; i < numberOfRows; i++) {
            rows.push(Array.from(Array(numberOfColumns), () => 0))
        }
        return rows
    }
    const copmuteGameRules = (currentGrid, numberOfRows, numberOfColumns,gridCopy) => {
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
    }
    
    return { generateEmptyGrid, copmuteGameRules}
}