import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@components/ui/base/chart'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts'

export type DistrictAverage = { district: string; value: number }

type Props = { data: DistrictAverage[]; className?: string }

const chartConfig = {
  value: { label: 'Consumo promedio', color: 'var(--color-chart-3)' },
}

export default function DistrictAveragesBarChart({ data, className }: Props) {
  return (
    <ChartContainer config={chartConfig} className={className}>
      <BarChart data={data} margin={{ top: 8, right: 16, left: 8, bottom: 32 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="district"
          angle={-25}
          textAnchor="end"
          height={50}
          tickLine={false}
          axisLine={false}
          tick={{ fill: '#fff' }}
        />
        <YAxis tickLine={false} axisLine={false} width={40} tick={{ fill: '#fff' }} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="value" fill="var(--color-value)" radius={[4, 4, 0, 0]} />
        <ChartLegend  verticalAlign="bottom" content={<ChartLegendContent />} />
      </BarChart>
    </ChartContainer>
  )
}
