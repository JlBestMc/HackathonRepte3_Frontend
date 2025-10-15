import type { LucideIcon } from 'lucide-react'

export type RoutesProps = {
    id: number
    icon?: LucideIcon
    url: string
    text: string
    orderMenu?: number
}

// Minimal user role type used by guards. Extend as needed.
export type UserRoleType = 'admin' | 'user' | 'viewer'
