import type { ColumnDef } from '@tanstack/react-table'
import type { NeighbourhoodProps } from '@/types/interfaces'
import { ArrowUpDown } from 'lucide-react'

const createNeighbourdhoodColumns = (): ColumnDef<NeighbourhoodProps>[] => [
    {
        accessorKey: 'neighbourhood',
        header: ({ column }) => {
            return (
                <button
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === 'asc')
                    }
                >
                    <span className="flex items-center gap-2">
                        Neighbourhood
                        <ArrowUpDown size="12" />
                    </span>
                </button>
            )
        },
    },
    {
        accessorKey: 'total_usage',
        header: ({ column }) => {
            return (
                <button
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === 'asc')
                    }
                >
                    <span className="flex items-center gap-2">
                        Total Usage
                        <ArrowUpDown size="12" />
                    </span>
                </button>
            )
        },
    },
    {
        accessorKey: 'population',
        header: ({ column }) => {
            return (
                <button
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === 'asc')
                    }
                >
                    <span className="flex items-center gap-2">
                        Population
                        <ArrowUpDown size="12" />
                    </span>
                </button>
            )
        },
    },
    {
        accessorKey: 'per_capita',
        header: ({ column }) => {
            return (
                <button
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === 'asc')
                    }
                >
                    <span className="flex items-center gap-2">
                        Consumption per person
                        <ArrowUpDown size="12" />
                    </span>
                </button>
            )
        },
    },
]

export { createNeighbourdhoodColumns }
