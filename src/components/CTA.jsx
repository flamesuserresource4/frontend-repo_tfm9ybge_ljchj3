import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="demo" className="bg-slate-950 text-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-gradient-to-r from-blue-600/20 via-fuchsia-600/10 to-amber-500/10 p-8 text-center"
        >
          <h3 className="text-3xl font-semibold">Pronto a vedere AgentisPro con i TUOI dati?</h3>
          <p className="mt-2 text-blue-100/90">Demo gratuita di 30 minuti: mostriamo il valore sul tuo caso reale e calcoliamo l’ROI.</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a href="https://calendly.com/agentispro/demo" target="_blank" rel="noreferrer" className="rounded-lg bg-blue-500 px-5 py-3 font-semibold hover:bg-blue-600">Prenota la demo</a>
            <a href="#pricing" className="rounded-lg border border-white/20 px-5 py-3 font-semibold hover:bg-white/5">Vedi prezzi</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
