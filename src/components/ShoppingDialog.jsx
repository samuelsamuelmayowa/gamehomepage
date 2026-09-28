import { useEffect, useRef } from 'react'
import { products } from '../data/products'
import { formatPrice } from '../data/format'
import { Icon } from './Icon'

export function ShoppingDialog({ mode, onClose, cart, setCart, wishlist, toggleWishlist, addToCart, total }) {
  const ref = useRef(null)
  useEffect(() => {
    const dialog = ref.current
    if (!mode) { dialog.close(); return }
    dialog.showModal()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = previousOverflow }
  }, [mode])
  const items = products.filter(product => mode === 'wishlist' ? wishlist.includes(product.id) : cart[product.id])
  const title = mode === 'wishlist' ? 'Your Wishlist' : mode === 'account' ? 'Welcome to The Master Kids' : 'Your Shopping Bag'
  function quantity(id, change) {
    setCart(current => {
      const next = { ...current, [id]: Math.min(99, current[id] + change) }
      if (next[id] <= 0) delete next[id]
      return next
    })
  }
  const message = `Hi! I'd like to enquire about these toys:\n${items.map(p => `${cart[p.id]} × ${p.name}`).join('\n')}\nSubtotal: ${formatPrice(total)}`
  return (
    <dialog ref={ref} onCancel={onClose} onClick={event => { if (event.target === ref.current) onClose() }} aria-labelledby="shopping-title" className="shopping-dialog rounded-2xl bg-canvas-cream text-on-surface p-0 shadow-2xl">
      <div className="p-5 sm:p-7">
        <div className="flex items-center justify-between gap-4 mb-6"><h2 id="shopping-title" className="text-headline-md">{title}</h2><button autoFocus onClick={onClose} aria-label="Close dialog" className="rounded-full bg-brand-purple-light p-2 flex"><Icon>close</Icon></button></div>
        {mode === 'account' ? <div className="space-y-4"><p>For order updates, gift advice, or help with your account, contact our store team.</p><a href="https://wa.me/2349134549603" target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full bg-primary text-white px-6 py-3">Chat with the store</a></div> : <>
          {!items.length && <div className="py-10 text-center"><Icon className="text-5xl text-primary">{mode === 'wishlist' ? 'favorite' : 'shopping_bag'}</Icon><p className="mt-4">{mode === 'wishlist' ? 'Save your favourite toys using the heart on each card.' : 'Your bag is waiting for a little joy.'}</p><button onClick={onClose} className="mt-5 rounded-full bg-primary text-white px-6 py-3">Continue exploring</button></div>}
          <div className="space-y-4">{items.map(product => <div key={product.id} className="flex gap-3 py-4 border-b border-outline-variant/30"><img src={product.image} alt={product.name} className="w-20 h-20 rounded-lg object-contain bg-white shrink-0" /><div className="flex-1 min-w-0"><h3 className="font-semibold text-body-md">{product.name}</h3><p className="text-primary font-bold my-1">{formatPrice(product.price)}</p>{mode === 'cart' ? <div className="flex items-center gap-3"><button aria-label={`Decrease quantity of ${product.name}`} onClick={() => quantity(product.id, -1)} className="w-8 h-8 rounded-full bg-brand-purple-light">−</button><span aria-label="Quantity">{cart[product.id]}</span><button disabled={cart[product.id] >= 99} aria-label={`Increase quantity of ${product.name}`} onClick={() => quantity(product.id, 1)} className="w-8 h-8 rounded-full bg-brand-purple-light disabled:opacity-40">+</button><button aria-label={`Remove ${product.name} from bag`} onClick={() => setCart(current => { const next = { ...current }; delete next[product.id]; return next })} className="text-outline hover:text-error ml-auto p-1"><Icon className="text-lg">delete</Icon></button></div> : <div className="flex flex-wrap gap-3 mt-2"><button onClick={() => addToCart(product)} className="text-primary font-semibold text-sm">Add to bag</button><button onClick={() => toggleWishlist(product.id)} className="text-outline text-sm">Remove</button></div>}</div></div>)}</div>
          {mode === 'cart' && items.length > 0 && <div className="mt-6"><p className="flex justify-between font-bold text-lg"><span>Subtotal</span><span>{formatPrice(total)}</span></p><p className="text-sm text-outline mt-2">Confirm availability and delivery with our store team.</p><a href={`https://wa.me/2349134549603?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" className="block text-center rounded-full bg-success-mint text-white font-semibold px-5 py-3 mt-4">Enquire about this order on WhatsApp</a></div>}
        </>}
      </div>
    </dialog>
  )
}
