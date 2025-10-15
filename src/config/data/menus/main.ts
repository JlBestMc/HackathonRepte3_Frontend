import type { RoutesProps } from '@/types/interfaces'
import { ChartArea, MapPinned } from 'lucide-react'

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
]

export default mainMenu
