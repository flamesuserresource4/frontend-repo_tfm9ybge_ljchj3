import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import Features from './components/Features'
import Departments from './components/Departments'
import Pricing from './components/Pricing'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <ProblemSolution />
      <Features />
      <Departments />
      <CTA />
      <Pricing />
      <Footer />
    </div>
  )
}

function CTA() {
  return (
    <section id="demo" className="bg-slate-950 text-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-blue-600/20 via-fuchsia-600/10 to-amber-500/10 p-8 text-center">
          <h3 className="text-3xl font-semibold">Pronto a vedere AgentisPro con i TUOI dati?</h3>
          <p className="mt-2 text-blue-100/90">Demo gratuita di 30 minuti: mostriamo il valore sul tuo caso reale e calcoliamo l’ROI.</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a href="https://calendly.com/agentispro/demo" target="_blank" rel="noreferrer" className="rounded-lg bg-blue-500 px-5 py-3 font-semibold hover:bg-blue-600">Prenota la demo</a>
            <a href="#pricing" className="rounded-lg border border-white/20 px-5 py-3 font-semibold hover:bg-white/5">Vedi prezzi</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="font-semibold">Contatti</h4>
            <ul className="mt-3 space-y-2 text-blue-100/90 text-sm">
              <li>Email: info@agentispro.com</li>
              <li>Telefono: +39 02 1234 5678</li>
              <li>Sito: www.agentispro.com</li>
              <li>Uffici: Milano, Italia</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Sicurezza</h4>
            <ul className="mt-3 space-y-2 text-blue-100/90 text-sm">
              <li>GDPR • SOC 2 • Crittografia end‑to‑end</li>
              <li>Accesso per ruoli • Audit log</li>
              <li>Opzione On‑Premise</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Risorse</h4>
            <ul className="mt-3 space-y-2 text-blue-100/90 text-sm">
              <li>FAQ</li>
              <li>Success stories</li>
              <li>Product updates</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Call to Action</h4>
            <p className="mt-3 text-blue-100/90 text-sm">Pronti a trasformare la conoscenza in crescita?</p>
            <a href="#demo" className="mt-3 inline-block rounded-lg bg-blue-500 px-4 py-2 font-semibold hover:bg-blue-600">Richiedi Demo</a>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-blue-200/70">
          AgentisPro RAG Engine — Dalle informazioni sparse all’intelligenza istantanea.
        </div>
      </div>
    </footer>
  )
}

export default App
