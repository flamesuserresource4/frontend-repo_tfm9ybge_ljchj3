import { FileText, MicVocal, Video, Image, Search, GitMerge, Wand2, Network, ShieldCheck } from 'lucide-react'

export default function Features() {
  const ingest = [
    { icon: FileText, title: 'Documenti', desc: 'PDF, Word, Excel, presentazioni, email. Estrazione dei concetti con chunking intelligente.' },
    { icon: MicVocal, title: 'Audio', desc: 'Trascrizione con rilevamento speaker e punti chiave. Esempio: trova chiamate con obiezioni prezzo.' },
    { icon: Video, title: 'Video', desc: 'Analisi audio/visiva con timestamp ricercabili per trovare esattamente il minuto rilevante.' },
    { icon: Image, title: 'Immagini', desc: 'OCR + comprensione visiva: da diagrammi a infografiche per risposte contestuali.' },
  ]

  const search = [
    { icon: Search, title: 'Ricerca Semantica', desc: 'Capisce il significato, non solo le parole. Trova concetti correlati.' },
    { icon: GitMerge, title: 'Ricerca Precisa', desc: 'Keyword, codici e numeri di policy per corrispondenze esatte.' },
    { icon: Network, title: 'Knowledge Graph', desc: 'Visualizza connessioni tra clienti, prodotti, team, feature.' },
  ]

  const special = [
    { icon: Wand2, title: 'Reranking Intelligente', desc: 'Mette in cima le risposte più utili: +35% accuratezza.' },
    { icon: ShieldCheck, title: 'Sicurezza Enterprise', desc: 'Isolamento per reparto, RBAC, audit trail, GDPR ready.' },
  ]

  const Card = ({Icon, title, desc}) => (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
      <Icon className="h-5 w-5 text-blue-300" />
      <h4 className="mt-3 font-semibold">{title}</h4>
      <p className="mt-2 text-sm text-blue-100/90">{desc}</p>
    </div>
  )

  return (
    <section className="bg-slate-950 text-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h3 className="text-3xl sm:text-4xl font-semibold">Cosa fa AgentisPro</h3>
        <p className="mt-2 text-blue-100/90">Ingestione completa. Ricerca smart. Risposte migliori.</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div>
            <h4 className="mb-4 text-lg font-semibold text-blue-200">Ingestione “di tutto”</h4>
            <div className="grid gap-4">
              {ingest.map((i, idx) => (
                <Card key={idx} Icon={i.icon} title={i.title} desc={i.desc} />
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold text-blue-200">Ricerca intelligente</h4>
            <div className="grid gap-4">
              {search.map((i, idx) => (
                <Card key={idx} Icon={i.icon} title={i.title} desc={i.desc} />
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold text-blue-200">Perché è diverso</h4>
            <div className="grid gap-4">
              {special.map((i, idx) => (
                <Card key={idx} Icon={i.icon} title={i.title} desc={i.desc} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
