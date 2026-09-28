import { motion as Motion, useReducedMotion } from 'framer-motion'
import { Icon } from './Icon'
import { formatPrice } from '../data/format'

export function ProductCard({ product, wishlist, toggleWishlist, addToCart }) {
  const saved = wishlist.includes(product.id)
  const reducedMotion = useReducedMotion()
  return (
    <Motion.article layout={!reducedMotion} initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={reducedMotion ? {} : { y: -5 }} className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between group min-w-0">
      <div>
        <div className="relative w-full h-56 rounded-lg bg-canvas-neutral overflow-hidden flex items-center justify-center p-space-sm mb-space-sm">
          <span className={`${product.badgeClass} z-10`}>{product.badge}</span>
          <Motion.button whileTap={{ scale: 0.85 }} onClick={() => toggleWishlist(product.id)} aria-pressed={saved} aria-label={`${saved ? 'Remove' : 'Save'} ${product.name} ${saved ? 'from' : 'to'} wishlist`} className={`absolute z-10 top-2 right-2 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm transition-colors ${saved ? 'text-error' : 'text-outline hover:text-error'}`}><Icon className={`text-title-md ${saved ? 'icon-filled' : ''}`}>favorite</Icon></Motion.button>
          <img className="h-48 w-full object-contain group-hover:scale-105 transition-transform duration-300" src={product.image} alt={product.alt} loading="lazy" decoding="async" />
        </div>
        <p className={`text-label-sm uppercase font-semibold ${product.oldPrice ? 'text-secondary' : 'text-outline'}`}>{product.description}</p>
        <h3 className="text-title-md text-on-surface mt-space-xs font-bold group-hover:text-primary transition-colors">{product.name}</h3>
      </div>
      <div className="pt-space-md mt-space-sm flex items-center justify-between gap-2">
        <div><p className={`text-label-sm text-outline ${product.oldPrice ? 'line-through' : ''}`}>{product.oldPrice ? formatPrice(product.oldPrice) : 'Price'}</p><p className={`text-price-lg font-extrabold ${product.oldPrice ? 'text-secondary-container' : 'text-primary'}`}>{formatPrice(product.price)}</p></div>
        <Motion.button whileTap={{ scale: 0.9 }} onClick={() => addToCart(product)} aria-label={`Add ${product.name} to bag`} title={product.oldPrice ? 'Claim Deal' : 'Add to Bag'} className="bg-secondary-container hover:bg-secondary text-white p-space-sm rounded-full shadow-[0_3px_0_#EA580C] flex items-center justify-center shrink-0"><Icon className="text-headline-sm">{product.oldPrice ? 'shopping_cart_checkout' : 'add_shopping_cart'}</Icon></Motion.button>
      </div>
    </Motion.article>
  )
}
