'use client'
import { ReactSortable } from "react-sortablejs";
import { SortableListProps } from "./sortableList.types";


export default function CustomSortableList({ setDraggingId, sortedIdsList, setSortedIdsList, onEnd, children }: SortableListProps) {

    return (<ReactSortable
        onStart={(evt) => {
            if (evt.oldIndex) {
                setDraggingId(sortedIdsList[evt.oldIndex]?.id)
            } else {
                setDraggingId(null)
            }
        }}
        onEnd={onEnd ? onEnd : () => setDraggingId(null)}
        ghostClass='ghost'
        list={sortedIdsList}
        setList={setSortedIdsList}
    >
        {
            children
        }
    </ReactSortable>)
}
