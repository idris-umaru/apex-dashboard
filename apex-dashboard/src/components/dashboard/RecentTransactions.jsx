import Card from '../common/Card'
import { transactions } from '../../data/mockData'
import { formatCurrency } from '../../utils/format'

const RecentTransactions = () => {
  return (
    <Card title="Recent Transactions">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead className="text-slate-500">
            <tr>
              <th className="pb-3 font-medium">Merchant</th>
              <th className="pb-3 font-medium">Category</th>
              <th className="pb-3 font-medium">Date</th>
              <th className="pb-3 text-right font-medium">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="py-3 font-medium text-slate-800">{transaction.merchant}</td>
                <td className="py-3 text-slate-500">{transaction.category}</td>
                <td className="py-3 text-slate-500">{transaction.date}</td>
                <td className="py-3 text-right font-semibold text-slate-950">{formatCurrency(transaction.amount)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

export default RecentTransactions
