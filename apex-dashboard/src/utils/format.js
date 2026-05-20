export const formatCurrency = (amount, currency = 'USD') =>
  new Intl.NumberFormat('en-US', {
    currency,
    style: 'currency',
  }).format(amount)
