import { motion, useScroll, useTransform } from 'framer-motion'

export default function AnimatedStats() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1])
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  const stats = [
    { value: '40%', label: 'Auto‑resolve ticket di supporto' },
    { value: '2x', label: 'Velocità di onboarding sales' },
    { value: '70%', label: 'Riduzione email ripetitive HR' },
    { value: '35%', label: 'Miglioramento accuratezza risposte' },
  ]

  return (
    <section className="relative bg-slate-950 text-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div style={{ scale, opacity }} className="rounded-2xl border border-white/10 bg-gradient-to-r from-blue-600/10 via-fuchsia-600/10 to-amber-500/10 p-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="text-center"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-300 via-fuchsia-300 to-amber-200 bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="mt-2 text-blue-100/90 text-sm">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
