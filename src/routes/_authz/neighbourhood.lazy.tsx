import { createLazyFileRoute } from '@tanstack/react-router'
import Neighbourhood from '@/pages/Neighbourhood'

export const Route = createLazyFileRoute('/_authz/neighbourhood')({
    component: RouteComponent,
})

function RouteComponent() {
    return <Neighbourhood />
}
