export const formatPrice = value => new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', minimumFractionDigits: 2 }).format(value)
export const filters = ['All New Items', 'Dolls & Accessories', 'Games & Puzzles', 'Music & Sports']
