import { useEffect, useId, useRef, useState } from 'react'
import { AnimatePresence, motion as Motion, useReducedMotion } from 'framer-motion'
import { Icon } from './Icon'

const legoUrl = 'https://www.themasterkids.com/collections/lego/4903151000642372128'
const menus = [
  { id: 'age', label: 'Shop by Age', eyebrow: 'EVERY STAGE, A NEW DISCOVERY', title: 'Small steps. Big adventures.', description: 'Find a little wonder for wherever they are in their growing-up journey.', icon: 'child_care', color: 'purple', href: '#shop-by-age', cta: 'Explore all age groups', links: [
    ['0–2 years', 'First smiles & sensory discoveries', 'child_care', '#shop-by-age'], ['2–4 years', 'Curious little explorers', 'toys', '#shop-by-age'], ['5–8 years', 'Make, imagine & create', 'palette', '#shop-by-age'], ['9–12 years', 'Build skills & big ideas', 'rocket_launch', '#shop-by-age'], ['Teens & beyond', 'A new level of challenge', 'psychology', '#shop-by-age'],
  ] },
  { id: 'lego', label: 'LEGO', eyebrow: 'ONE BRICK. ENDLESS POSSIBILITIES.', title: 'Their next great build starts here.', description: 'From first towers to big imaginations, discover the joy of building something their own.', icon: 'extension', color: 'yellow', href: legoUrl, cta: 'Explore the LEGO collection', links: [
    ['Shop all LEGO', 'Discover the complete collection', 'extension', legoUrl], ['Little builders', 'Explore toys for their age', 'toys', '#shop-by-age'], ['Building & construction', 'Meet our favourite toy universes', 'construction', '#categories'], ['Fresh inspiration', 'See what’s new in store', 'auto_awesome', '#new-arrivals'],
  ] },
  { id: 'stem', label: 'STEM', eyebrow: 'BIG IDEAS START WITH PLAY', title: 'For the “why?” and “what if?” kids.', description: 'Make room for experiments, clever creations, and hands-on discoveries.', icon: 'science', color: 'mint', href: '#categories', cta: 'Explore STEM & learning', links: [
    ['STEM & early learning', 'Discover our learning universe', 'science', '#categories'], ['Young inventors', 'Find their next age milestone', 'lightbulb', '#shop-by-age'], ['Creative discoveries', 'Explore new arrivals', 'psychology', '#new-arrivals'], ['Learning for less', 'Browse this season’s offers', 'local_offer', '#hot-deals'],
  ] },
  { id: 'games', label: 'Puzzles & Games', eyebrow: 'LESS SCROLLING. MORE GIGGLING.', title: 'Make it a family game night.', description: 'A little friendly competition, a new challenge, and memories made together.', icon: 'casino', color: 'orange', href: '#new-arrivals', cta: 'Browse games & puzzles', links: [
    ['Games & puzzles', 'Explore our featured games', 'casino', '#new-arrivals'], ['Play by age', 'Find just the right challenge', 'extension', '#shop-by-age'], ['Favourite toy universes', 'More ways to play together', 'interests', '#categories'], ['Game-time deals', 'Big smiles, little prices', 'sell', '#hot-deals'],
  ] },
  { id: 'brands', label: 'Brands', eyebrow: 'LITTLE ONES. BIG FAVOURITES.', title: 'The names behind their happiest play.', description: 'Meet the much-loved brands that bring imagination to life.', icon: 'verified', color: 'purple', href: '#brands', cta: 'Discover our brands', links: [
    ['LEGO®', 'Build a world of possibilities', 'extension', legoUrl], ['Barbie', 'Imagine everything you can be', 'auto_awesome', '#new-arrivals'], ['Baby Alive', 'Little moments of caring', 'favorite', '#new-arrivals'], ['VTech & LeapFrog', 'Discover our learning brands', 'school', '#brands'], ['Hot Wheels & more', 'Meet the whole toy family', 'directions_car', '#brands'],
  ] },
]

export function ShopNavigation() {
  const [active, setActive] = useState(null)
  const [direction, setDirection] = useState(1)
  const reduced = useReducedMotion()
  const root = useRef(null)
  const panel = useRef(null)
  const triggers = useRef({})
  const closeTimer = useRef(null)
  const current = useRef(null)
  const id = useId()
  const menu = menus.find(item => item.id === active)

  function cancelClose() { clearTimeout(closeTimer.current) }
  function close() {
    cancelClose()
    current.current = null
    setActive(null)
  }
  function open(next) {
    cancelClose()
    if (current.current === next) return
    setDirection(menus.findIndex(item => item.id === next) >= menus.findIndex(item => item.id === current.current) ? 1 : -1)
    current.current = next
    setActive(next)
  }
  function leave() {
    cancelClose()
    closeTimer.current = setTimeout(() => {
      // Keep keyboard users' focused links available even if the pointer leaves.
      if (!root.current?.contains(document.activeElement)) close()
    }, 160)
  }
  useEffect(() => {
    function outside(event) {
      if (!root.current?.contains(event.target)) {
        clearTimeout(closeTimer.current)
        current.current = null
        setActive(null)
      }
    }
    document.addEventListener('pointerdown', outside)
    return () => { document.removeEventListener('pointerdown', outside); clearTimeout(closeTimer.current) }
  }, [])

  function keyboard(event, item) {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      open(item.id)
      // The shared panel mounts on the next React render.
      requestAnimationFrame(() => panel.current?.querySelector('a')?.focus())
    }
    if (['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) {
      event.preventDefault()
      const index = menus.findIndex(entry => entry.id === item.id)
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? menus.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + menus.length) % menus.length
      triggers.current[menus[next].id]?.focus()
      open(menus[next].id)
    }
    if (event.key === 'Tab' && !event.shiftKey && current.current === item.id) {
      const firstLink = panel.current?.querySelector('a')
      if (firstLink) { event.preventDefault(); firstLink.focus() }
    }
  }

  return (
    <div ref={root} className="shop-navigation bg-surface-container-low" onPointerEnter={cancelClose} onPointerLeave={leave}
      onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) close() }}
      onKeyDown={event => {
        if (event.key === 'Escape' && active) { event.preventDefault(); triggers.current[active]?.focus(); close() }
      }}>
      <nav aria-label="Shop navigation" className="mx-auto max-w-7xl px-gutter">
        <div className="shop-navigation-links">
          {menus.map(item => <button key={item.id} ref={node => { triggers.current[item.id] = node }} id={`${id}-${item.id}`} type="button"
            aria-expanded={active === item.id} aria-controls={active === item.id ? `${id}-panel` : undefined}
            onPointerEnter={event => { if (event.pointerType === 'mouse') open(item.id) }}
            onFocus={() => { if (current.current) open(item.id) }}
            onClick={event => { if (event.detail === 0 || event.nativeEvent.pointerType !== 'mouse') { if (active === item.id) close(); else open(item.id) } else open(item.id) }}
            onKeyDown={event => keyboard(event, item)} className={`shop-navigation-trigger ${active === item.id ? 'is-active' : ''}`}>
            {active === item.id && <Motion.span layoutId={`${id}-active-pill`} className="shop-navigation-pill" transition={{ type: 'spring', stiffness: 420, damping: 36, duration: reduced ? 0 : undefined }} />}
            <span className="relative">{item.label}</span><Motion.span className="relative flex" animate={{ rotate: active === item.id ? 180 : 0 }} transition={{ duration: reduced ? 0 : 0.2 }}><Icon className="text-base">expand_more</Icon></Motion.span>
          </button>)}
          <a href="#back-to-school" onPointerEnter={event => { if (event.pointerType === 'mouse') close() }} onFocus={close} className="shop-navigation-trigger">Back to School</a>
          <a href="#hot-deals" onPointerEnter={event => { if (event.pointerType === 'mouse') close() }} onFocus={close} className="shop-navigation-trigger text-secondary">Hot Deals <Icon className="text-base">local_fire_department</Icon></a>
        </div>
      </nav>
      <AnimatePresence>
        {menu && <Motion.div key="shared-panel" className="shop-dropdown-position" initial={{ opacity: 0, y: reduced ? 0 : -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduced ? 0 : -6 }} transition={{ duration: reduced ? 0 : 0.18 }}>
          <div ref={panel} id={`${id}-panel`} aria-labelledby={`${id}-${menu.id}`} className="shop-dropdown" onPointerEnter={cancelClose}
            onClick={event => { if (event.target.closest('a')) close() }}
            onKeyDown={event => {
              const links = [...event.currentTarget.querySelectorAll('a')]
              if (event.key === 'Tab' && event.shiftKey && document.activeElement === links[0]) { event.preventDefault(); triggers.current[active]?.focus() }
              if (event.key === 'Tab' && !event.shiftKey && document.activeElement === links.at(-1)) {
                event.preventDefault()
                const index = menus.findIndex(item => item.id === active)
                if (index < menus.length - 1) triggers.current[menus[index + 1].id]?.focus()
                else root.current.querySelector('a[href="#back-to-school"]')?.focus()
                close()
              }
            }}>
            <div className="shop-dropdown-topline"><span><span className="inline-block mr-2 h-1.5 w-1.5 rounded-full bg-secondary-container" />A little curiosity goes a long way</span><button type="button" onClick={() => { triggers.current[active]?.focus(); close() }} aria-label="Close shop submenu" className="flex rounded-full p-1 hover:bg-brand-purple-light"><Icon className="text-lg">close</Icon></button></div>
              <Motion.div key={menu.id} custom={direction} variants={{ enter: d => ({ opacity: 0, x: reduced ? 0 : d * 30 }), center: { opacity: 1, x: 0 }, exit: d => ({ opacity: 0, x: reduced ? 0 : -d * 24 }) }} initial="enter" animate="center" exit="exit" transition={{ duration: reduced ? 0 : 0.22, ease: 'easeOut' }} className="shop-dropdown-content">
                <div className="shop-dropdown-list">
                  <p className="col-span-full text-[10px] font-extrabold tracking-[0.16em] text-outline mb-1">EXPLORE {menu.label.toUpperCase()}</p>
                  {menu.links.map(([label, description, icon, href]) => <a key={label} href={href} className="shop-submenu-link"><span className={`shop-submenu-icon tone-${menu.color}`}><Icon className="text-xl">{icon}</Icon></span><span className="min-w-0"><span className="block text-sm font-bold text-on-surface">{label}</span><span className="block text-xs leading-5 text-outline mt-0.5">{description}</span></span><Icon className="submenu-arrow text-base">arrow_forward</Icon></a>)}
                </div>
                <div className={`shop-dropdown-feature tone-${menu.color}`}><span className="shop-feature-decoration" aria-hidden="true"><Icon className="text-[100px]">{menu.icon}</Icon></span><span className="relative text-[9px] font-extrabold tracking-[0.14em]">{menu.eyebrow}</span><h2 className="relative mt-3 max-w-64 text-2xl font-extrabold leading-tight tracking-tight">{menu.title}</h2><p className="relative mt-3 max-w-64 text-xs leading-6 opacity-80">{menu.description}</p><a href={menu.href} className="relative mt-5 inline-flex items-center gap-2 text-xs font-extrabold hover:underline">{menu.cta}<Icon className="text-base">arrow_forward</Icon></a></div>
              </Motion.div>
            <div className="shop-dropdown-bottom"><span className="flex items-center gap-1.5"><Icon className="text-sm text-success-mint">verified_user</Icon>Thoughtfully chosen for joyful learning</span><a href="https://wa.me/2349134549603" className="font-bold text-primary hover:underline">Need gift advice? Let’s chat →</a></div>
          </div>
        </Motion.div>}
      </AnimatePresence>
    </div>
  )
}
