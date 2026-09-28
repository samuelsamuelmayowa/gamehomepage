import { motion as Motion, useReducedMotion } from 'framer-motion'

export function Reveal({ children, ...props }) {
  const reducedMotion = useReducedMotion()
  return <Motion.section {...props} initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05 }} transition={{ duration: reducedMotion ? 0 : 0.55 }}>{children}</Motion.section>
}
