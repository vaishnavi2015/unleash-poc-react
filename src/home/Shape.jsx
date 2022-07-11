import React from 'react';
import { createRoot } from 'react-dom/client';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';
const Shape = () => {
    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            {/* <Text text="Some text on canvas" fontSize={15} /> */}
            <Rect
              x={20}
              y={50}
              width={100}
              height={100}
              fill="red"
              shadowBlur={10}
            />
            
            <Circle x={200} y={100} radius={50} fill="green" />
            <Text text="Circle" fontSize={15} />
          </Layer>
          
        </Stage>
      );
}
export default Shape;