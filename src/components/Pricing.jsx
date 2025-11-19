export default function Pricing() {
  const tiers = [
    { name: 'Starter', price: '€499/mese', features: ['5.000 query', '1 reparto', '10 utenti', 'Supporto email'] },
    { name: 'Professional', price: '€999/mese', features: ['25.000 query', 'Tutti i reparti', 'Utenti illimitati', 'Supporto prioritario', 'Integrazioni custom'] },
    { name: 'Enterprise', price: 'Custom', features: ['Query illimitate', 'Infra dedicata', 'On‑premise', 'Onboarding VIP', 'SLA garantite'] },
  ]

  return (
    <section id="pricing" className="bg-slate-950 text-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h3 className="text-3xl sm:text-4xl font-semibold">Piani e Prezzi</h3>
          <p className="mt-2 text-blue-100/90">Tutti i piani includono formazione, setup e report mensili.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t, idx) => (
            <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h4 className="text-xl font-semibold">{t.name}</h4>
              <p className="mt-2 text-3xl font-bold">{t.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-blue-100/90">
                {t.features.map((f, i) => (
                  <li key={i}>• {f}</li>
                ))}
              </ul>
              <a href="#demo" className="mt-6 inline-block w-full rounded-lg bg-blue-500 px-4 py-2 text-center font-semibold hover:bg-blue-600">Inizia ora</a>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-blue-200/80 text-sm">
          Soddisfatti o rimborsati 30 giorni • Setup in 2 settimane • Manutenzione zero
        </div>
      </div>
    </section>
  )
}
