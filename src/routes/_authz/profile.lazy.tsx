import { createLazyFileRoute } from '@tanstack/react-router'
import Profile from '@pages/Profile.tsx'

export const Route = createLazyFileRoute('/_authz/profile')({
    component: RouteComponent,
})

function RouteComponent() {
    return <Profile />
}
