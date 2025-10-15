import type { RoutesProps } from '@/types/interfaces'
import { ChartArea, CircleX, MapPinned } from 'lucide-react'

const mainMenu: RoutesProps[] = [
    {
        id: 1,
        icon: ChartArea,
        url: 'monitorpage',
        text: 'Monitor',
        orderMenu: 1,
    },
    {
        id: 2,
        icon: MapPinned,
        url: 'map',
        text: 'Map',
        orderMenu: 2,
    },
    {
        id: 3,
        icon: CircleX,
        url: 'failures',
        text: 'Failures',
        orderMenu: 3,
    },
    {
        id: 4,
        icon: CircleX,
        url: 'neighbourhood',
        text: 'Neighbourhood',
        orderMenu: 4,
    },
]

export default mainMenu
