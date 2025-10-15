import { createFileRoute } from '@tanstack/react-router'
import Monitorpage from '../../pages/MonitorPage'

export const Route = createFileRoute('/_authz/monitorpage')({
    component: RouteComponent,
})

function RouteComponent() {
    return <> <Monitorpage /> </>
}
