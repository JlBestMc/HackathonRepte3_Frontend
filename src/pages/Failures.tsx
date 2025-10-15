import { useQuery } from '@tanstack/react-query'
import { getNeighborhoods } from '@/services/hackatorepte3Service'
import Loading from '@components/ui/Loading'
import ErrorApi from '@components/ui/ErrorApi'

const Failures = () => {
    const { data, isPending, isError, error } = useQuery({
        queryKey: ['listOfData'],
        queryFn: () => getNeighborhoods(),
    })

    if (isPending) return <Loading />
    if (isError && error) return <ErrorApi message={error.message} />

    console.log(data)

    return <></>
}

export default Failures
