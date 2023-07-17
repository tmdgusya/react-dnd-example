import React from 'react'
import Square from './Square'
import { useDroppable } from '@dnd-kit/core'

function BoardSquare({ id, x, y, children }) {
    const black = (x + y) % 2 === 1
    const {isOver, setNodeRef} = useDroppable({
        id: id,
    })

  return (
    <div
      key={id}
      ref={setNodeRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      <Square black={black}>{children}</Square>
      {isOver && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'yellow',
          }}
        />
      )}
    </div>
  )
}

export default BoardSquare