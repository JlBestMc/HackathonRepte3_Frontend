import { createLazyFileRoute } from '@tanstack/react-router'
import Map from '@pages/Map.tsx'

export const Route = createLazyFileRoute('/_authz/map')({
    component: RouteComponent,
})

function RouteComponent() {
    return <Map />
}
