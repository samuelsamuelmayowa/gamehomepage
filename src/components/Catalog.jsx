import { Reveal } from './Reveal'
import { ProductCard } from './ProductCard'
import { Icon } from './Icon'
import { products } from '../data/products'
import { filters } from '../data/format'

export function Catalog({ deals = false, query = '', category = 'All New Items', setCategory, clearSearch, ...shopping }) {
  const visible = products.filter(product => {
    if (deals) return Boolean(product.oldPrice)
    if (!query && product.oldPrice) return false
    return (category === 'All New Items' || product.category === category) && `${product.name} ${product.description}`.toLowerCase().includes(query.toLowerCase())
  })
  return (
    <Reveal className="py-space-xl bg-canvas-cream" id={deals ? 'hot-deals' : 'new-arrivals'}>
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md mb-space-xl">
          <div><div className="inline-flex items-center gap-1 text-secondary text-label-md uppercase tracking-wider mb-1"><Icon className="text-title-md">{deals ? 'local_fire_department' : 'star'}</Icon>{deals ? 'Little prices, big smiles' : 'Fresh In Store'}</div><h2 className="text-headline-lg text-on-surface">{deals ? 'Hot Deals & Offers' : query ? `Search results for “${query}”` : 'Curated New Arrivals'}</h2>{deals && <p className="text-body-md text-on-surface-variant mt-1">Limited-time price cuts on bestselling Nigerian favorites.</p>}</div>
          {!deals && <div className="flex items-center gap-1 overflow-x-auto pb-1" aria-label="Filter products">{filters.map(filter => <button key={filter} aria-pressed={category === filter} onClick={() => setCategory(filter)} className={`text-body-md font-semibold px-4 py-1.5 rounded-full shadow-sm whitespace-nowrap transition-colors ${category === filter ? 'bg-primary text-white' : 'bg-white text-on-surface-variant hover:text-primary'}`}>{filter}</button>)}</div>}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">{visible.map(product => <ProductCard key={product.id} product={product} {...shopping} />)}</div>
        {!deals && !visible.length && <div className="py-12 text-center rounded-xl bg-brand-purple-surface"><Icon className="text-4xl text-primary">search_off</Icon><h3 className="text-headline-sm mt-3">No toys found</h3><p className="mt-2 text-on-surface-variant">Try another name or explore all the featured toys.</p><button className="mt-4 text-primary font-bold underline" onClick={clearSearch}>Clear filters</button></div>}
        {!deals && <div className="text-center mt-space-xl"><a className="inline-flex items-center gap-1 bg-primary hover:bg-brand-purple-vivid text-white font-semibold px-10 py-4 rounded-full shadow-md transition-colors" href="https://wa.me/2349134549603?text=Hi%2C%20I%27d%20like%20to%20explore%20your%20full%20toy%20catalogue." target="_blank" rel="noopener noreferrer">Explore the Full Store Catalogue<Icon className="text-title-lg">east</Icon></a></div>}
      </div>
    </Reveal>
  )
}
