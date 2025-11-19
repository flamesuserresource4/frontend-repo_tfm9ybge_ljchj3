import { motion } from 'framer-motion'

export default function VisualShowcase() {
  const visuals = [
    {
      title: 'Knowledge Graph dinamico',
      desc: 'Scopri relazioni tra clienti, prodotti e documenti in un grafo navigabile.',
      gradient: 'from-blue-500/40 via-fuchsia-500/30 to-amber-400/30',
    },
    {
      title: 'Q&A Multimodale',
      desc: 'Combina testo, audio e video per risposte più ricche e contestuali.',
      gradient: 'from-emerald-500/40 via-cyan-500/30 to-blue-500/30',
    },
    {
      title: 'Dashboard ROI',
      desc: 'Misura impatto su tempi di risposta, auto‑resolve e soddisfazione utenti.',
      gradient: 'from-violet-500/40 via-fuchsia-500/30 to-rose-400/30',
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  }

  return (
    <section className="relative bg-slate-950 text-white py-20">
      <div className="pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(70%_60%_at_50%_40%,black,transparent)]">
        <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute top-1/3 right-10 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-semibold"
          >
            Vedi AgentisPro in Azione
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-blue-100/90"
          >
            Tre esempi visivi per capire come l’AI trasforma la conoscenza in decisioni.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {visuals.map((v, idx) => (
            <motion.div key={idx} variants={item}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${v.gradient} opacity-30`} />
                <div className="aspect-video">
                  <div className="absolute inset-0 grid place-items-center">
                    <motion.div
                      initial={{ scale: 0.96, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="h-28 w-40 rounded-xl bg-slate-900/60 backdrop-blur border border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.25)]"
                    />
                    <motion.div
                      initial={{ x: 30, y: 18, opacity: 0 }}
                      whileInView={{ x: 10, y: 8, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.15 }}
                      className="absolute bottom-6 right-6 h-8 w-24 rounded-md bg-white/10 border border-white/10"
                    />
                    <motion.div
                      initial={{ x: -30, y: -18, opacity: 0 }}
                      whileInView={{ x: -10, y: -8, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="absolute top-6 left-6 h-10 w-10 rounded-full bg-white/10 border border-white/10"
                    />
                  </div>
                </div>
                <div className="relative p-5">
                  <h4 className="font-semibold">{v.title}</h4>
                  <p className="mt-2 text-sm text-blue-100/90">{v.desc}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <a href="#demo" className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-600">
            Prenota una demo
          </a>
        </div>
      </div>
    </section>
  )
}
