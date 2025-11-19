import Spline from '@splinetool/react-spline'
import { Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,0.15),rgba(2,6,23,0.85))]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-32">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-blue-200 backdrop-blur">
            <Sparkles className="h-4 w-4 text-blue-300" />
            <span>Il tuo Assistente di Conoscenza Aziendale</span>
          </div>
          <h1 className="text-4xl leading-tight font-semibold sm:text-6xl">
            AgentisPro RAG Engine
            <span className="block bg-gradient-to-r from-blue-300 via-fuchsia-300 to-amber-200 bg-clip-text text-transparent">Trasforma il sapere aziendale in risposte immediate</span>
          </h1>
          <p className="mt-6 text-lg text-blue-100/90">
            Centralizza email, documenti, conversazioni e video. Ottieni risposte accurate in pochi secondi, per ogni reparto. Sicuro, multimodale, pronto per l’impresa.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#demo" className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-600">
              Prenota una demo gratuita
            </a>
            <a href="#pricing" className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-3 font-semibold text-white/90 hover:bg-white/5">
              Vedi i piani e prezzi
            </a>
            <span className="text-sm text-white/70">30 giorni soddisfatti o rimborsati</span>
          </div>
        </div>
      </div>
    </section>
  )
}
