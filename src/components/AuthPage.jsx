import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { AnimatePresence, motion as Motion, useIsPresent, useReducedMotion } from 'framer-motion'
import { Icon } from './Icon'

const copy = {
  login: { eyebrow: 'LET THE GOOD TIMES PLAY', title: 'Welcome back!', subtitle: 'A little more play. A lot more possibilities.', action: 'Log in', side: 'Big dreams start\nwith little moments.' },
  signup: { eyebrow: 'A WORLD OF WONDER AWAITS', title: 'Join the happy place.', subtitle: 'Create an account and make room for more discovery.', action: 'Create my account', side: 'Little explorers.\nEndless possibilities.' },
  'forgot-password': { eyebrow: 'LET’S GET YOU BACK TO PLAY', title: 'Forgot your password?', subtitle: 'Enter your email to request a password reset.', action: 'Request reset link', side: 'More wonder.\nJust around the corner.' },
}

function Field({ label, name, type = 'text', icon, error, ...props }) {
  const [visible, setVisible] = useState(false)
  const password = type === 'password'
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-bold text-on-surface">{label}</label>
      <div className={`auth-input-wrap ${error ? 'auth-input-error' : ''}`}>
        <Icon className="text-xl text-outline shrink-0">{icon}</Icon>
        <input {...props} id={name} name={name} type={password && visible ? 'text' : type} aria-invalid={Boolean(error)} aria-describedby={error ? `${name}-error` : props['aria-describedby']} />
        {password && <button type="button" aria-label={`${visible ? 'Hide' : 'Show'} ${label.toLowerCase()}`} aria-pressed={visible} onClick={() => setVisible(!visible)} className="flex p-1 text-outline hover:text-primary"><Icon className="text-xl">{visible ? 'visibility_off' : 'visibility'}</Icon></button>}
      </div>
      {error && <p id={`${name}-error`} className="mt-1.5 text-xs text-error" role="alert">{error}</p>}
    </div>
  )
}

function AuthForm({ mode, direction, onHeight }) {
  const info = copy[mode]
  const signup = mode === 'signup'
  const reset = mode === 'forgot-password'
  const reduced = useReducedMotion()
  const heading = useRef(null)
  const section = useRef(null)
  const present = useIsPresent()
  const [errors, setErrors] = useState({})
  const [notice, setNotice] = useState('')
  const [password, setPassword] = useState('')
  const strength = [password.length >= 8, /[a-z]/.test(password) && /[A-Z]/.test(password), /[0-9]/.test(password), /[^a-zA-Z0-9]/.test(password)].filter(Boolean).length

  useLayoutEffect(() => {
    const element = section.current
    if (!element || !present) return
    const measure = () => onHeight(element.offsetHeight)
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(element)
    return () => observer.disconnect()
  }, [onHeight, present])


  function submit(event) {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.currentTarget))
    const next = {}
    if (signup && !data.name?.trim()) next.name = 'Please enter your full name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email?.trim() || '')) next.email = 'Enter a valid email address.'
    if (!reset && !data.password) next.password = 'Please enter your password.'
    if (signup && data.password.length < 8) next.password = 'Use at least 8 characters.'
    if (signup && data.confirmPassword !== data.password) next.confirmPassword = 'Your passwords do not match.'
    setErrors(next)
    setNotice('')
    if (Object.keys(next).length) {
      event.currentTarget.elements.namedItem(Object.keys(next)[0])?.focus()
      return
    }
    setNotice(reset ? 'Password reset is not connected yet. No email has been sent. Please contact our store team for help.' : signup ? 'Account registration is not connected yet. Your details have not been saved. You can still explore the store.' : 'Online login is not connected yet. Please contact our store team for account help, or continue exploring.')
  }

  return (
    <Motion.section ref={section} custom={direction}
      variants={{
        enter: travel => ({ x: reduced ? 0 : `${travel * 100}%`, opacity: reduced ? 1 : 0.5 }),
        visible: { x: 0, opacity: 1 },
        leave: travel => ({ x: reduced ? 0 : `${travel * -100}%`, opacity: reduced ? 1 : 0 }),
      }}
      initial="enter" animate="visible" exit="leave"
      transition={{ duration: reduced ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
      onAnimationComplete={definition => { if (definition === 'visible' && present) heading.current?.focus({ preventScroll: true }) }}
      inert={!present} aria-hidden={!present} className="auth-form-panel" aria-labelledby="auth-title">
          <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-orange-light text-secondary-container"><Icon className="text-2xl">{reset ? 'lock_reset' : signup ? 'celebration' : 'waving_hand'}</Icon></div>
          <p className="text-[10px] font-extrabold tracking-[0.18em] text-primary">{info.eyebrow}</p>
          <h1 ref={heading} tabIndex={-1} id="auth-title" className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-on-surface outline-none sm:text-4xl">{info.title}</h1>
          <p className="mt-3 text-sm leading-6 text-on-surface-variant">{info.subtitle}</p>
          {!reset && <div className="mt-7 grid grid-cols-2 rounded-full bg-surface-container-low p-1" aria-label="Account pages"><a href="#/login" aria-current={!signup ? 'page' : undefined} className={`rounded-full py-2.5 text-center text-sm font-bold transition-colors ${!signup ? 'bg-white text-primary shadow-sm' : 'text-outline hover:text-primary'}`}>Log in</a><a href="#/signup" aria-current={signup ? 'page' : undefined} className={`rounded-full py-2.5 text-center text-sm font-bold transition-colors ${signup ? 'bg-white text-primary shadow-sm' : 'text-outline hover:text-primary'}`}>Sign up</a></div>}

          <form onSubmit={submit} noValidate className="mt-7 space-y-5" onChange={() => { if (notice) setNotice('') }}>
            {signup && <Field label="Full name" name="name" icon="person" placeholder="Your first and last name" autoComplete="name" required maxLength={100} error={errors.name} />}
            <Field label="Email address" name="email" type="email" icon="mail" placeholder="you@example.com" autoComplete="email" required maxLength={254} error={errors.email} />
            {!reset && <Field label="Password" name="password" type="password" icon="lock" placeholder={signup ? 'Create a password' : 'Enter your password'} autoComplete={signup ? 'new-password' : 'current-password'} required value={password} onChange={event => setPassword(event.target.value)} aria-describedby={signup ? 'password-hint' : undefined} error={errors.password} />}
            {signup && <><div id="password-hint" className="-mt-2"><div className="mb-2 flex gap-1.5" aria-hidden="true">{[1, 2, 3, 4].map(level => <span key={level} className={`h-1 flex-1 rounded-full ${strength >= level ? strength >= 3 ? 'bg-success-mint' : 'bg-secondary-container' : 'bg-surface-container-high'}`} />)}</div><p className="text-xs text-outline">{password ? `${['', 'Weak', 'Fair', 'Good', 'Strong'][strength] || 'Weak'} password · ` : ''}Use at least 8 characters.</p></div><Field label="Confirm password" name="confirmPassword" type="password" icon="lock" placeholder="Enter your password again" autoComplete="new-password" required error={errors.confirmPassword} /></>}
            {!signup && !reset && <div className="flex justify-end"><a href="#/forgot-password" className="text-xs font-bold text-primary hover:underline">Forgot password?</a></div>}
            {notice && <div role="status" className="rounded-xl border border-primary/15 bg-brand-purple-surface p-4 text-sm leading-6 text-on-surface-variant">{notice}<a href="mailto:contact@themasterkids.com" className="mt-2 block font-bold text-primary underline">Contact the store</a></div>}
            <Motion.button type="submit" whileHover={reduced ? {} : { y: -2 }} whileTap={reduced ? {} : { scale: 0.98 }} className="flex w-full items-center justify-center gap-2 rounded-full bg-secondary-container px-6 py-3.5 font-bold text-white shadow-[0_4px_0_#EA580C] transition-colors hover:bg-secondary">{info.action}<Icon className="text-xl">arrow_forward</Icon></Motion.button>
          </form>

          <p className="mt-7 text-center text-sm text-on-surface-variant">{reset ? 'Remember your password?' : signup ? 'Already part of the family?' : 'New to The Master Kids?'}{' '}<a href={signup || reset ? '#/login' : '#/signup'} className="font-bold text-primary hover:underline">{signup || reset ? 'Log in' : 'Create an account'}</a></p>
          <div className="my-7 h-px bg-outline-variant/30" />
          <div className="flex items-center justify-center gap-2 text-xs text-outline"><Icon className="text-base text-success-mint">favorite</Icon>A little account. A whole lot of happy.</div>
        </Motion.section>
  )
}

export function AuthPage({ mode }) {
  const info = copy[mode]
  const reduced = useReducedMotion()
  const [formHeight, setFormHeight] = useState(null)
  // Signup moves the track left; returning to login moves it right.
  // Deriving this from the route also covers browser Back/Forward navigation.
  const direction = mode === 'login' ? -1 : 1

  useEffect(() => {
    document.title = `${mode === 'forgot-password' ? 'Reset password' : mode === 'signup' ? 'Sign up' : 'Log in'} | The Master Kids`
    return () => { document.title = 'The Master Kids | Play · Learn · Grow' }
  }, [mode])

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])

  return (
    <div className="auth-page">
      <header className="auth-header">
        <a href="#" className="flex items-center gap-3" aria-label="The Master Kids home"><span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-purple-light text-primary"><Icon>smart_toy</Icon></span><span><span className="block text-lg font-extrabold tracking-tight text-primary">The Master Kids</span><span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-outline">Play · Learn · Grow</span></span></a>
        <a href="#" className="flex items-center gap-2 text-sm font-semibold text-on-surface-variant hover:text-primary"><Icon className="text-lg">arrow_back</Icon><span className="hidden sm:inline">Back to the store</span><span className="sm:hidden">Store</span></a>
      </header>

      <main id="main-content" tabIndex={-1} className="auth-layout">
        <aside className="auth-story">
          <div className="auth-story-orbit" aria-hidden="true" />
          <span className="relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-bold tracking-wider"><Icon className="text-base text-tertiary-fixed">auto_awesome</Icon>A LITTLE PLAY. A LIFETIME OF POSSIBILITIES.</span>
          <h2 className="relative mt-7 whitespace-pre-line text-4xl font-extrabold leading-[1.18] tracking-tight xl:text-5xl">{info.side}</h2>
          <p className="relative mt-5 max-w-sm text-base leading-7 text-brand-purple-light">For the first discoveries, the proud “I did it!” moments, and everything they’ll dream up next.</p>

          <div className="auth-play-scene" aria-hidden="true">
            <span className="auth-spark auth-spark-one">✦</span><span className="auth-spark auth-spark-two">✧</span>
            <Motion.div className="auth-toy auth-toy-rocket" animate={reduced ? {} : { y: [0, -12, 0], rotate: [-12, -7, -12] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}><Icon className="text-[82px]">rocket_launch</Icon></Motion.div>
            <Motion.div className="auth-toy auth-toy-block" animate={reduced ? {} : { y: [0, 9, 0], rotate: [9, 13, 9] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}><Icon className="text-[68px]">extension</Icon></Motion.div>
            <div className="auth-toy auth-toy-bulb"><Icon className="text-5xl">lightbulb</Icon></div>
            <span className="auth-play-label"><span className="text-lg">🌈</span> Made for curious minds</span>
          </div>

          <div className="relative mt-auto border-t border-white/15 pt-6">
            <div className="flex items-center gap-3"><div className="flex -space-x-2" aria-hidden="true">{['AO', 'CE', 'FB'].map((name, index) => <span key={name} className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand-purple-deep text-xs font-extrabold ${index === 0 ? 'bg-brand-orange-light text-secondary' : index === 1 ? 'bg-brand-yellow-soft text-tertiary' : 'bg-brand-purple-light text-primary'}`}>{name}</span>)}</div><div><p className="text-sm tracking-widest text-tertiary-fixed">★★★★★</p><p className="text-xs text-brand-purple-light">A community of happy parents</p></div></div>
            <p className="mt-4 text-sm leading-6 text-brand-purple-light">Find a little joy for the little people you love.</p>
          </div>
        </aside>

        <Motion.div className="auth-form-viewport"
          initial={false} animate={{ height: formHeight ?? 'auto' }}
          transition={{ duration: reduced ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}>
          <AnimatePresence mode="wait" custom={direction}>
            <AuthForm key={mode} mode={mode} direction={direction} onHeight={setFormHeight} />
          </AnimatePresence>
        </Motion.div>
      </main>
      <footer className="auth-footer"><span>© {new Date().getFullYear()} The Master Kids. Made for a world of play.</span><a href="mailto:contact@themasterkids.com" className="flex items-center gap-1.5 hover:text-primary"><Icon className="text-base">support_agent</Icon>Need a little help? Contact us</a></footer>
    </div>
  )
}
