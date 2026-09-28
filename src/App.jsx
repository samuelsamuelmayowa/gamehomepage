import { useEffect, useState } from 'react'
import { AnimatePresence, MotionConfig, motion as Motion } from 'framer-motion'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Catalog } from './components/Catalog'
import { ShoppingDialog } from './components/ShoppingDialog'
import { TrustStrip, Hero, BrandStrip, PromoBanner, ShopByAge, ShopByCategory, SchoolBanner, WhyChooseUs, Testimonials, VisitStore } from './components/HomeSections'
import { products } from './data/products'
import './App.css'

function readSaved(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key))
    if (key === 'masterkids-wishlist') return Array.isArray(value) ? [...new Set(value.filter(id => products.some(p => p.id === id)))] : fallback
    if (!value || typeof value !== 'object' || Array.isArray(value)) return fallback
    return Object.fromEntries(Object.entries(value).filter(([id, count]) => products.some(p => p.id === Number(id)) && Number.isInteger(count) && count > 0 && count <= 99))
  } catch { return fallback }
}

export default function App() {
  const [cart, setCart] = useState(() => readSaved('masterkids-cart', {}))
  const [wishlist, setWishlist] = useState(() => readSaved('masterkids-wishlist', []))
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All New Items')
  const [dialog, setDialog] = useState(null)
  const [toast, setToast] = useState('')
  useEffect(() => {
    try {
      localStorage.setItem('masterkids-cart', JSON.stringify(cart))
      localStorage.setItem('masterkids-wishlist', JSON.stringify(wishlist))
    } catch { /* Shopping still works when browser storage is unavailable. */ }
  }, [cart, wishlist])
  useEffect(() => {
    if (!toast) return
    const timer = setTimeout(() => setToast(''), 2800)
    return () => clearTimeout(timer)
  }, [toast])
  const count = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0)
  const total = products.reduce((sum, product) => sum + product.price * (cart[product.id] || 0), 0)
  function addToCart(product) {
    setCart(current => ({ ...current, [product.id]: Math.min((current[product.id] || 0) + 1, 99) }))
    setToast(`${product.name} added to your bag`)
  }
  function toggleWishlist(id) {
    setWishlist(current => current.includes(id) ? current.filter(item => item !== id) : [...current, id])
  }
  function search(value, selectedCategory) {
    setQuery(value.trim())
    setCategory(selectedCategory)
    document.getElementById('new-arrivals')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
  }
  const shopping = { wishlist, toggleWishlist, addToCart }
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.4, ease: 'easeOut' }}>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Header count={count} total={total} wishlistCount={wishlist.length} onSearch={search} onOpen={setDialog} />
      <main id="main-content" className="min-h-screen bg-canvas-cream">
        <TrustStrip /><Hero /><BrandStrip /><PromoBanner /><ShopByAge /><ShopByCategory />
        <Catalog {...shopping} query={query} category={category} setCategory={setCategory} clearSearch={() => { setQuery(''); setCategory('All New Items') }} />
        <SchoolBanner /><Catalog {...shopping} deals /><WhyChooseUs /><Testimonials /><VisitStore />
      </main>
      <Footer />
      <ShoppingDialog mode={dialog} onClose={() => setDialog(null)} cart={cart} setCart={setCart} total={total} {...shopping} />
      <div className="fixed bottom-5 inset-x-4 z-[70] flex justify-center pointer-events-none" role="status" aria-live="polite" aria-atomic="true">
        <AnimatePresence>{toast && <Motion.div key={toast} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="max-w-md rounded-2xl bg-brand-purple-deep px-6 py-4 text-center text-sm text-white shadow-xl">✓ {toast}</Motion.div>}</AnimatePresence>
      </div>
    </MotionConfig>
  )
}
