import { Users, Handshake, Headphones, Scale, Banknote } from 'lucide-react'

const items = [
  { icon: Users, title: 'HR', bullets: ['Assistente Policy 24/7', 'Onboarding autopilota', 'Percorsi di carriera'], roi: '−70% email ripetitive' },
  { icon: Handshake, title: 'Sales', bullets: ['Conoscenza prodotto on‑demand', 'Competitor intelligence', 'Battle cards'], roi: 'Onboarding dimezzato' },
  { icon: Headphones, title: 'Support', bullets: ['Auto‑resolve 40%', 'Agent assist', 'Smart escalation'], roi: '60% più veloce' },
  { icon: Scale, title: 'Legal', bullets: ['Ricerca clausole', 'Compliance check', 'Precedenti'], roi: '−80% tempo review' },
  { icon: Banknote, title: 'Finance', bullets: ['Report istantanei', 'Q&A budget', 'Audit trail'], roi: '50% più rapido' },
]

export default function Departments() {
  return (
    <section className="bg-slate-950 text-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h3 className="text-3xl sm:text-4xl font-semibold">Benefici per ogni reparto</h3>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, idx) => (
            <div key={idx} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <it.icon className="h-5 w-5 text-blue-300" />
                <h4 className="font-semibold">{it.title}</h4>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-blue-100/90">
                {it.bullets.map((b, i) => (
                  <li key={i}>• {b}</li>
                ))}
              </ul>
              <p className="mt-4 text-emerald-300 text-sm font-medium">ROI: {it.roi}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
