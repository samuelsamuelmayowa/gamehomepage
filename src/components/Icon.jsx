export function Icon({ children, className = 'text-2xl' }) {
  return <span aria-hidden="true" className={`material-symbols-outlined ${className}`}>{children}</span>
}
