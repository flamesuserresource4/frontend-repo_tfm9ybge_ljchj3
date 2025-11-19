import { CheckCircle2, Clock, MessagesSquare, FileText, BrainCircuit } from 'lucide-react'

export default function ProblemSolution() {
  return (
    <section className="relative bg-slate-950 text-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Il Problema</h2>
            <p className="mt-4 text-blue-100/90">
              La conoscenza è sparsa tra email, chat, cartelle, registrazioni e report. I team perdono tempo a cercare informazioni, rallentando supporto, vendite e processi interni.
            </p>
            <div className="mt-8 grid gap-4">
              {[
                { icon: Clock, text: '4 ore per rispondere a richieste semplici' },
                { icon: MessagesSquare, text: '200 domande ripetitive al mese in HR' },
                { icon: FileText, text: 'Contratti e policy difficili da ritrovare' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                  <item.icon className="h-5 w-5 text-blue-300" />
                  <p className="text-blue-100/90">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">La Soluzione</h2>
            <p className="mt-4 text-blue-100/90">
              AgentisPro RAG Engine è come un super-assistente che ha letto e compreso ogni contenuto aziendale. Risponde in secondi, impara dai feedback e funziona per tutti i reparti.
            </p>
            <div className="mt-8 grid gap-4">
              {[
                'Risposte in secondi, non ore',
                'Apprendimento continuo dai feedback',
                'Supporto multimodale: documenti, audio, video, immagini',
                'Grafi della Conoscenza interattivi',
                'Sicurezza enterprise con controllo degli accessi',
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                  <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                  <p className="text-blue-100/90">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-br from-blue-600/20 via-fuchsia-600/10 to-amber-500/10 p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-2xl font-semibold">Perché è speciale</h3>
              <p className="mt-2 text-blue-100/90 flex items-center gap-2">
                <BrainCircuit className="h-5 w-5 text-blue-300" /> Comprensione del contesto, visualizzazione delle relazioni e miglioramento continuo.
              </p>
            </div>
            <a href="#demo" className="inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-3 font-semibold text-white hover:bg-white/20">
              Scopri come funziona
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
