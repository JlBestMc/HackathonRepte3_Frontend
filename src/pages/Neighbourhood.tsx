import { useQuery } from '@tanstack/react-query'
import { getNeighborhoods } from '@/services/hackatorepte3Service'
import Loading from '@components/ui/Loading'
import ErrorApi from '@components/ui/ErrorApi'
import DataTable from '@components/ui/DataTable'
import ContentArticle from '@components/ui/ContentArticle'
import HeaderArticle from '@components/ui/HeaderArticle'
import type { NeighbourhoodProps } from '@/types/interfaces'
import { createNeighbourdhoodColumns } from '@/lib/tableUtils'
import content from '@data/pages/neighbourhood'

const Neighbourhood = () => {
    const {
        data: dataList,
        isPending,
        isError,
        error,
    } = useQuery({
        queryKey: ['listOfData'],
        queryFn: () => getNeighborhoods(),
    })

    if (isPending) return <Loading />
    if (isError && error) return <ErrorApi message={error.message} />

    console.log(dataList)

    const transformedData =
        dataList?.map((item: NeighbourhoodProps) => ({
            neighbourhood: item.barribcn,
            total_usage: item.sum_consum,
            population: item.sum_pobl20,
            per_capita: item.cons_hab,
        })) || []

    return (
        <>
            <HeaderArticle title={content.title} />
            <ContentArticle>
                <DataTable<NeighbourhoodProps>
                    columns={createNeighbourdhoodColumns()}
                    data={transformedData}
                    caption={content.textCaptionTable}
                />
            </ContentArticle>
        </>
    )
}

export default Neighbourhood
