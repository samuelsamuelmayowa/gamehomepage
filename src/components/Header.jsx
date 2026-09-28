import { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { Icon } from './Icon'
import { filters, formatPrice } from '../data/format'

const navigation = [
  ['Shop by Age', 'shop-by-age'], ['LEGO & Sets', 'categories'], ['STEM & Coding', 'categories'],
  ['Puzzles & Board Games', 'new-arrivals'], ['Dolls & Pretend Play', 'new-arrivals'],
  ['Back to School', 'back-to-school'], ['Hot Deals & Sale 🔥', 'hot-deals'], ['Brands', 'brands'],
]

export function Header({ count, total, wishlistCount, onSearch, onOpen }) {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All New Items')
  return (
    <header className="sticky top-0 z-50 bg-surface-container-lowest shadow-[0_4px_20px_-4px_rgba(58,21,96,0.08)]">
      <div className="bg-brand-purple-deep text-on-primary py-space-xs px-gutter">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-4 text-label-sm tracking-wide">
          <span>🎉 Free Delivery on Orders Over ₦50,000 in Lagos</span>
          <div className="hidden lg:flex items-center gap-space-lg">
            <a className="flex items-center gap-1 hover:text-tertiary-fixed" href="tel:09134549603"><Icon className="text-sm">call</Icon>Call/WhatsApp: 09134549603</a><span className="opacity-40">|</span>
            <a className="flex items-center gap-1 hover:text-tertiary-fixed" href="mailto:contact@themasterkids.com"><Icon className="text-sm">mail</Icon>contact@themasterkids.com</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-gutter py-4 flex flex-wrap items-center justify-between gap-4">
        <a href="#" aria-label="The Master Kids homepage" className="flex items-center gap-2 shrink-0 group">
          <div className="w-11 h-11 rounded-full bg-brand-purple-light flex items-center justify-center text-primary shadow-sm group-hover:rotate-12 transition-transform"><Icon>smart_toy</Icon></div>
          <div><p className="text-headline-sm text-primary leading-tight tracking-tight">The Master Kids</p><p className="text-label-sm text-on-surface-variant tracking-wider uppercase">Play • Learn • Grow</p></div>
        </a>
        <form role="search" onSubmit={event => { event.preventDefault(); onSearch(search, category) }} className="order-3 xl:order-2 basis-full xl:basis-auto xl:flex-1 xl:max-w-xl flex items-center bg-canvas-cream rounded-full shadow-[0_2px_12px_rgba(124,58,237,0.06)] p-1 min-w-0">
          <label className="hidden sm:block relative shrink-0"><span className="sr-only">Search category</span><select value={category} onChange={event => setCategory(event.target.value)} className="max-w-40 appearance-none bg-surface-container-high text-on-surface text-body-md pl-4 pr-8 py-2 rounded-full cursor-pointer">{filters.map(filter => <option key={filter} value={filter}>{filter === 'All New Items' ? 'All Categories' : filter}</option>)}</select><Icon className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-sm">expand_more</Icon></label>
          <label className="flex-1 min-w-0"><span className="sr-only">Search toys</span><input value={search} onChange={event => setSearch(event.target.value)} className="w-full bg-transparent px-4 py-2 text-body-md placeholder:text-outline rounded-full" placeholder="Search educational toys, LEGO, dolls…" type="search" /></label>
          <Motion.button whileTap={{ scale: 0.96 }} className="bg-secondary-container hover:bg-secondary text-white text-body-md px-4 py-2 rounded-full flex items-center gap-1 shadow-[0_3px_0_#EA580C]" type="submit"><Icon className="text-lg">search</Icon><span className="hidden sm:inline">Search</span><span className="sr-only sm:hidden">Search</span></Motion.button>
        </form>
        <div className="order-2 xl:order-3 flex items-center gap-3 sm:gap-4 shrink-0">
          <button onClick={() => onOpen('wishlist')} aria-label={`Wishlist, ${wishlistCount} items`} className="flex items-center gap-2 text-on-surface-variant hover:text-primary"><span className="relative"><Icon>favorite</Icon><span className="absolute -top-1 -right-2 bg-secondary-container text-white text-[10px] min-w-4 h-4 px-1 rounded-full flex items-center justify-center">{wishlistCount}</span></span><span className="hidden 2xl:inline text-body-md">Wishlist</span></button>
          <button aria-label="My Account" onClick={() => onOpen('account')} className="hidden sm:flex items-center gap-1 text-on-surface-variant hover:text-primary"><Icon>account_circle</Icon><span className="hidden 2xl:block text-left"><span className="block text-label-sm text-outline">Welcome</span><span className="text-body-md">My Account</span></span></button>
          <button aria-label={`Open cart, ${count} items`} onClick={() => onOpen('cart')} className="flex items-center gap-3 bg-brand-yellow-soft hover:bg-tertiary-fixed text-on-tertiary-fixed px-3 sm:px-4 py-2 rounded-full transition-colors"><span className="relative"><Icon className="text-tertiary">shopping_bag</Icon><span className="absolute -top-1 -right-2 bg-primary text-white text-[10px] min-w-4 h-4 px-1 rounded-full flex items-center justify-center">{count}</span></span><span className="hidden md:block text-left"><span className="block text-label-sm uppercase text-tertiary">Cart</span><span className="text-price-md leading-none">{formatPrice(total)}</span></span></button>
        </div>
      </div>
      <div className="bg-surface-container-low"><nav aria-label="Shop navigation" className="max-w-7xl mx-auto px-gutter flex items-center gap-1 overflow-x-auto py-2">{navigation.map(([label, id]) => <a key={id + label} href={`#${id}`} className="text-on-surface-variant hover:bg-surface-container-high hover:text-primary px-3 py-1 rounded-full font-semibold text-body-md whitespace-nowrap transition-colors">{label}</a>)}</nav></div>
    </header>
  )
}
