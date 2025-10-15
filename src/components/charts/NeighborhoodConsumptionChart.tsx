// React import is not required with the new JSX transform
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@components/ui/base/chart'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts'

export type ConsumptionPoint = {
  hour: string
  dom: number
  ind: number
}

type Props = {
  data: ConsumptionPoint[]
  className?: string
}

const chartConfig = {
  dom: { label: 'Doméstico', color: 'var(--color-chart-4)' },
  ind: { label: 'Industrial/Comercial', color: 'var(--color-chart-2)' },
}

export function NeighborhoodConsumptionChart({ data, className }: Props) {
  return (
    <ChartContainer config={chartConfig} className={className}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="hour" tickLine={false} axisLine={false} tick={{ fill: '#fff' }} />
  <YAxis tickLine={false} axisLine={false} width={40} tick={{ fill: '#fff' }} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="dom" fill="var(--color-dom)" radius={[4, 4, 0, 0]} />
        <Bar dataKey="ind" fill="var(--color-ind)" radius={[4, 4, 0, 0]} />
        <ChartLegend
          verticalAlign="bottom"
          content={<ChartLegendContent />}
        />
      </BarChart>
    </ChartContainer>
  )
}

export default NeighborhoodConsumptionChart
