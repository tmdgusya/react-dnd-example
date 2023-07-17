import React, { useEffect, useState } from "react";
import Knight from "./Knight";
import { DndContext  } from '@dnd-kit/core'
import BoardSquare from "./BoardSquare";


function renderSquare(i, knightPosition) {
    console.log("123123", knightPosition)
    const x = i % 8
    const y = Math.floor(i / 8)
    return (
      <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
        <BoardSquare id={i} x={x} y={y}>
          {renderPiece(x, y, knightPosition)}
        </BoardSquare>
      </div>
    )
  }
  
  function renderPiece(x, y, [knightX, knightY]) {
    if (x === knightX && y === knightY) {
      return <Knight />
    }
  }



export default function Board({_knightPosition}) {
    const [knightPosition, setKinightPosition] = useState(_knightPosition);
    const [parent, setParent] = useState(null);


    function handleDragEnd(event) {
        const {over} = event;
        const x = over.id % 8;
        const y = Math.floor(over.id / 8);
        setKinightPosition([x, y])
        setParent(over ? over.id : null);
    }

    let temp = []

    for (let i = 0; i < 64; i++) {
        temp.push(renderSquare(i, knightPosition))
    }



    return (
        <DndContext onDragEnd={handleDragEnd}>
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexWrap: 'wrap'
                }}
            >
            {temp}
            </div>
        </DndContext>
        
    )
}