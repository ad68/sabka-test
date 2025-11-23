export type SortableListProps = {
    setDraggingId: (id: number | null) => void,
    sortedIdsList: Array<any>
    setSortedIdsList: (list: Array<any>) => void,
    onEnd?: () => void,
    children: React.ReactNode
} 