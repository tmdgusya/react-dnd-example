import React from "react";
import { ItemTypes } from "./Constant";
import { useDraggable } from "@dnd-kit/core"

export default function Knight() {

    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: ItemTypes.KNIGHT
    })

    return <div
        ref={setNodeRef}
        {...listeners}
        {...attributes}
        style={{
        opacity: 1,
        fontSize: 100,
        fontWeight: 'bold',
        cursor: 'move',
        }}
    >
        ♘
    </div>
}