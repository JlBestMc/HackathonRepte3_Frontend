import { createFileRoute } from '@tanstack/react-router'
import Map from '../../pages/Map'

export const Route = createFileRoute('/_authz/mappage')({
    component: RouteComponent,
})

function RouteComponent() {
    return <> <Map /> </>
}
