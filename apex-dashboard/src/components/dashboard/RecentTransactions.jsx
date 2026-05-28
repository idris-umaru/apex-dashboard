import Card from '../common/Card'
import { transactions } from '../../data/mockData'
import { formatCurrency } from '../../utils/format'

const RecentTransactions = ({ dark }) => {
  return (
    <Card dark={dark} title="Recent Transactions">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead className={dark ? 'text-slate-400' : 'text-slate-500'}>
            <tr>
              <th className="pb-3 font-medium">Merchant</th>
              <th className="pb-3 font-medium">Category</th>
              <th className="pb-3 font-medium">Date</th>
              <th className="pb-3 text-right font-medium">Amount</th>
            </tr>
          </thead>
          <tbody className={dark ? 'divide-y divide-slate-800' : 'divide-y divide-slate-100'}>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className={dark ? 'py-3 font-medium text-slate-100' : 'py-3 font-medium text-slate-800'}>
                  {transaction.merchant}
                </td>
                <td className={dark ? 'py-3 text-slate-400' : 'py-3 text-slate-500'}>{transaction.category}</td>
                <td className={dark ? 'py-3 text-slate-400' : 'py-3 text-slate-500'}>{transaction.date}</td>
                <td className={dark ? 'py-3 text-right font-semibold text-white' : 'py-3 text-right font-semibold text-slate-950'}>
                  {formatCurrency(transaction.amount)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

export default RecentTransactions
