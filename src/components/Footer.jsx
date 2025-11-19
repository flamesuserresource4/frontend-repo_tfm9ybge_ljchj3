export default function Footer() {
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
