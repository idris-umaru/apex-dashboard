import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import Card from '../common/Card'
import { moneyFlow } from '../../data/mockData'
import { formatCurrency } from '../../utils/format'

const MoneyFlowChart = ({ dark }) => {
  const axisColor = dark ? '#94a3b8' : '#64748b'
  const gridColor = dark ? '#1e293b' : '#e2e8f0'

  return (
    <Card dark={dark} title="Money Flow">
      <div className="h-72">
        <ResponsiveContainer height="100%" width="100%">
          <BarChart data={moneyFlow} margin={{ bottom: 0, left: 0, right: 4, top: 8 }}>
            <CartesianGrid stroke={gridColor} strokeDasharray="3 3" vertical={false} />
            <XAxis axisLine={false} dataKey="month" tick={{ fill: axisColor, fontSize: 12 }} tickLine={false} />
            <YAxis
              axisLine={false}
              tick={{ fill: axisColor, fontSize: 12 }}
              tickFormatter={(value) => `$${value / 1000}k`}
              tickLine={false}
              width={48}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: dark ? '#020617' : '#ffffff',
                border: `1px solid ${dark ? '#334155' : '#e2e8f0'}`,
                borderRadius: '8px',
                color: dark ? '#f8fafc' : '#0f172a',
              }}
              formatter={(value) => formatCurrency(value)}
            />
            <Legend iconType="circle" wrapperStyle={{ color: axisColor, fontSize: '12px', paddingTop: '12px' }} />
            <Bar dataKey="income" fill="#10b981" name="Income" radius={[6, 6, 0, 0]} />
            <Bar dataKey="expense" fill="#fb7185" name="Expense" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}

export default MoneyFlowChart
