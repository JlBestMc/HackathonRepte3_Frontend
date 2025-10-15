import { createLazyFileRoute } from '@tanstack/react-router'
import CheckEmail from '@pages/CheckEmail'

export const Route = createLazyFileRoute('/_authn/check-email')({
    component: RouteComponent,
})

function RouteComponent() {
    return <CheckEmail />
}
