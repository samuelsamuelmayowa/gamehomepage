import { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  return (
    <form className="flex flex-col gap-space-xs mt-space-xs" onSubmit={event => {
      event.preventDefault()
      window.location.href = `mailto:contact@themasterkids.com?subject=Toy%20Club%20signup&body=${encodeURIComponent(`Please add ${email} to the Toy Club mailing list.`)}`
    }}>
      <label className="sr-only" htmlFor="club-email">Your email address</label>
      <input id="club-email" value={email} onChange={event => setEmail(event.target.value)} required autoComplete="email" className="w-full bg-white text-on-surface px-4 py-2 rounded-full text-body-md placeholder:text-outline" placeholder="Your email address…" type="email" />
      <button className="bg-secondary-container hover:bg-secondary text-white font-semibold text-body-md px-4 py-2 rounded-full transition-colors text-center shadow-[0_4px_0_#EA580C]" type="submit">Join Toy Club</button>
      <p className="text-label-sm text-brand-purple-light mt-2">Opens your email app to request membership.</p>
    </form>
  )
}
