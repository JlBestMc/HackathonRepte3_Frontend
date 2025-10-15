import { createFileRoute } from '@tanstack/react-router'
import Mappage from '../../pages/MapPage'

export const Route = createFileRoute('/_authz/mappage')({
    component: RouteComponent,
})

function RouteComponent() {
    return <> <Mappage /> </>
}
