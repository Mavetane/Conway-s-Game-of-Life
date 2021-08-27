import React from 'react'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function Slider({ configuredGrid, numberOfColumns }) {
    return (
        <div className="slidecontainer">
            <TransformWrapper
                initialScale={1}
                initialPositionX={0}
                initialPositionY={0}
            >
                {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                    <React.Fragment>
                        <TransformComponent>

                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: `repeat(${numberOfColumns}, 15px)`,

                                }}>
                                {configuredGrid()}
                            </div>
                        </TransformComponent>
                    </React.Fragment>
                )}
            </TransformWrapper>
        </div>
    )
}

export default Slider
