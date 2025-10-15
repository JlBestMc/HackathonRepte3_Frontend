import { Outlet, createFileRoute, redirect } from '@tanstack/react-router'
import MainAuthn from '@layouts/authn/Main'

export const Route = createFileRoute('/_authn')({
    // beforeLoad: async () => {
    //     const { data } = someDataFromSupabase
    //     if (data.session) {
    //         throw redirect({ to: '/dashboard' })
    //     }
    // },
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <MainAuthn>
            <Outlet />
        </MainAuthn>
    )
}
