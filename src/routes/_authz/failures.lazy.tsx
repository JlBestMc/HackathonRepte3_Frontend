import { createLazyFileRoute } from '@tanstack/react-router'
import Failures from '@pages/Failures.tsx'

export const Route = createLazyFileRoute('/_authz/failures')({
    component: RouteComponent,
})

function RouteComponent() {
    return <Failures />
}
