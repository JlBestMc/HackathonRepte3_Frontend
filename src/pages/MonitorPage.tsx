// src/routes/index.tsx
import { useNavigate } from '@tanstack/react-router'

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#2E5B9C] to-[#00E0D0] text-white p-4 md:p-8">
      {/* Capçalera */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-2">
          💧 Aigua Intel·ligent BCN
        </h1>
        <p className="text-sm md:text-base opacity-90 mt-1">
          Monitorització en temps real del consum d’aigua – Aliniat amb ODS 6 i ODS 13
        </p>
      </div>

      {/* Resum ràpid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium">Consum avui</p>
              <p className="text-2xl font-bold mt-1">12.400 m³</p>
              <p className="text-xs opacity-80">+2.1% vs ahir</p>
            </div>
            <span className="text-xl">💧</span>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium">Anomalies</p>
              <p className="text-2xl font-bold text-[#00CCE0] mt-1">3</p>
              <p className="text-xs opacity-80">Últimes 24h</p>
            </div>
            <span className="text-xl">⚠️</span>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium">Temperatura</p>
              <p className="text-2xl font-bold mt-1">22°C</p>
              <p className="text-xs opacity-80">Mitjana diària</p>
            </div>
            <span className="text-xl">🌡️</span>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium">Pluja</p>
              <p className="text-2xl font-bold mt-1">0 mm</p>
              <p className="text-xs opacity-80">Avui</p>
            </div>
            <span className="text-xl">🌧️</span>
          </div>
        </div>
      </div>

      {/* Gràfic de consum per sectors (barras horitzontals) */}
      <div className="mb-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Consum d’aigua per sectors</h2>
          <p className="text-sm opacity-80">Últimes 24 hores a l’Àrea Metropolitana de Barcelona</p>
        </div>
        <div className="h-64 flex items-end justify-between gap-2">
          {[
            { hour: "00", dom: 42, ind: 18 },
            { hour: "04", dom: 28, ind: 12 },
            { hour: "08", dom: 95, ind: 65 },
            { hour: "12", dom: 110, ind: 88 },
            { hour: "16", dom: 102, ind: 92 },
            { hour: "20", dom: 85, ind: 40 },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center flex-1">
              <div className="w-full flex flex-col-reverse gap-1" style={{ height: '160px' }}>
                <div
                  className="w-full rounded-t-sm"
                  style={{
                    height: `${(item.ind / 120) * 100}%`,
                    backgroundColor: '#00E0D0',
                  }}
                ></div>
                <div
                  className="w-full rounded-t-sm"
                  style={{
                    height: `${(item.dom / 120) * 100}%`,
                    backgroundColor: '#2E5B9C',
                  }}
                ></div>
              </div>
              <span className="text-xs mt-2">{item.hour}:00</span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#2E5B9C]"></div>
            <span>Domèstic</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#00E0D0]"></div>
            <span>Industrial/Comercial</span>
          </div>
        </div>
      </div>

      {/* Radial Charts (com a la imatge) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Card 1: 200 Visitors */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
          <h3 className="text-sm font-medium mb-1">Radial Chart - Text</h3>
          <p className="text-xs opacity-70 mb-4">January - June 2024</p>
          <div className="relative w-32 h-32 mx-auto">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#ffffff30" strokeWidth="8" />
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#00E0D0"
                strokeWidth="8"
                strokeDasharray="251.2"
                strokeDashoffset="150.72"
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold">200</span>
              <span className="text-xs opacity-80">Visitors</span>
            </div>
          </div>
        </div>

        {/* Card 2: 1260 Visitors */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
          <h3 className="text-sm font-medium mb-1">Radial Chart - Shape</h3>
          <p className="text-xs opacity-70 mb-4">January - June 2024</p>
          <div className="relative w-32 h-32 mx-auto">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#ffffff30" strokeWidth="8" />
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#00E0D0"
                strokeWidth="8"
                strokeDasharray="251.2"
                strokeDashoffset="100.48"
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold">1260</span>
              <span className="text-xs opacity-80">Visitors</span>
            </div>
          </div>
        </div>

        {/* Card 3: 1830 Visitors */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
          <h3 className="text-sm font-medium mb-1">Radial Chart - Stacked</h3>
          <p className="text-xs opacity-70 mb-4">January - June 2024</p>
          <div className="relative w-32 h-32 mx-auto">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                d="M50,10 A40,40 0 0,1 90,50"
                fill="none"
                stroke="#ffffff30"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <path
                d="M50,10 A40,40 0 0,1 90,50"
                fill="none"
                stroke="#00E0D0"
                strokeWidth="8"
                strokeDasharray="125.6"
                strokeDashoffset="62.8"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold">1830</span>
              <span className="text-xs opacity-80">Visitors</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-sm opacity-80">
        <p>Projecte alineat amb l’<strong>ODS 6 (Aigua neta i sanejament)</strong> i <strong>ODS 13 (Acció pel clima)</strong></p>
        <p className="mt-1">Dades: Agència Catalana de l’Aigua | Aigües de Barcelona</p>
      </footer>
    </div>
  )
}