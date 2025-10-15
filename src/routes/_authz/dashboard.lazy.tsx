import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_authz/dashboard')({
    component: RouteComponent,
})

function RouteComponent() {
    return <></>
}
