import type { LucideIcon } from 'lucide-react'

export type RoutesProps = {
    id: number
    icon?: LucideIcon
    url: string
    text: string
    orderMenu?: number
}

export type NeighbourhoodProps = {
    id: number
    lhabDia: number
    barribcn: string
    sum_pobl20: number
    dtebcnnom: string
    sum_consum: number
    sum_pobest: number
    cons_hab: number
    lhabdia: number
}
