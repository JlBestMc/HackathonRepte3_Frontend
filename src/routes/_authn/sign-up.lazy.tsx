import { createLazyFileRoute } from '@tanstack/react-router'
import SignUp from '@/pages/SignUp'

export const Route = createLazyFileRoute('/_authn/sign-up')({
    component: RouteComponent,
})

function RouteComponent() {
    return <SignUp />
}
