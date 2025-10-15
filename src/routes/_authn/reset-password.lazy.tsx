import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_authn/reset-password')({
    component: RouteComponent,
})

function RouteComponent() {
    return <></>
}
