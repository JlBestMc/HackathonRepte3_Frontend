import { createLazyFileRoute } from '@tanstack/react-router'
import SignIn from '@/pages/SignIn'

export const Route = createLazyFileRoute('/_authn/sign-in')({
    component: RouteComponent,
})

function RouteComponent() {
    return <SignIn />
}
