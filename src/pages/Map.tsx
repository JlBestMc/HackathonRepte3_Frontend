// src/pages/MapPage.tsx
import { useState } from 'react'
import districtsData from '../config/data/districts.json'

interface District {
  name: string
  anomalies: number
  description: string
}

export default function MapPage() {
  const [hoveredDistrict, setHoveredDistrict] = useState<District | null>(null)

  // Mapeo de nombres a IDs para coincidir con el SVG
  const districtMap: Record<string, District> = {}
  districtsData.districts.forEach(d => {
    districtMap[d.name] = d
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-cyan-800 text-white p-4 md:p-8">
      {/* Título */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-2">
          🗺️ Mapa de Anomalías por Distrito
        </h1>
        <p className="text-sm md:text-base opacity-90 mt-1">
          Pasa el ratón sobre cada distrito para ver las anomalías detectadas
        </p>
      </div>

      {/* Contenedor del mapa + tooltip */}
      <div className="relative flex justify-center">
        {/* SVG del mapa */}
        <svg
          width="800"
          height="600"
          viewBox="0 0 800 600"
          className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
          style={{ maxWidth: '100%', maxHeight: '80vh' }}
        >
          {/* Fondo blanco para mejor visibilidad */}
          <rect width="800" height="600" fill="#f8fafc" />

          {/* Definición de los paths de los distritos */}
          {/* ⚠️ NOTA: Estos paths son aproximados. Debes reemplazarlos con los reales de tu mapa SVG */}
          <g transform="scale(0.8) translate(50, 50)">
            {/* Sants - Montjuïc */}
            <path
              id="sants-montjuic"
              d="M100,100 L150,80 L200,100 L220,150 L180,200 L120,180 Z"
              fill="#2E5B9C"
              stroke="#fff"
              strokeWidth="2"
              onMouseEnter={() => setHoveredDistrict(districtMap['Sants - Montjuïc'])}
              onMouseLeave={() => setHoveredDistrict(null)}
              className="cursor-pointer transition-all duration-200 hover:fill-[#00E0D0]"
            />
            <text x="140" y="140" fontSize="12" fill="white" textAnchor="middle">Sants - Montjuïc</text>

            {/* Eixample */}
            <path
              id="eixample"
              d="M250,100 L300,80 L350,100 L370,150 L330,200 L270,180 Z"
              fill="#2E5B9C"
              stroke="#fff"
              strokeWidth="2"
              onMouseEnter={() => setHoveredDistrict(districtMap['Eixample'])}
              onMouseLeave={() => setHoveredDistrict(null)}
              className="cursor-pointer transition-all duration-200 hover:fill-[#00E0D0]"
            />
            <text x="300" y="140" fontSize="12" fill="white" textAnchor="middle">Eixample</text>

            {/* Ciutat Vella */}
            <path
              id="ciutat-vella"
              d="M380,100 L430,80 L480,100 L500,150 L460,200 L400,180 Z"
              fill="#2E5B9C"
              stroke="#fff"
              strokeWidth="2"
              onMouseEnter={() => setHoveredDistrict(districtMap['Ciutat Vella'])}
              onMouseLeave={() => setHoveredDistrict(null)}
              className="cursor-pointer transition-all duration-200 hover:fill-[#00E0D0]"
            />
            <text x="430" y="140" fontSize="12" fill="white" textAnchor="middle">Ciutat Vella</text>

            {/* Sant Martí */}
            <path
              id="sant-marti"
              d="M510,100 L560,80 L610,100 L630,150 L590,200 L530,180 Z"
              fill="#2E5B9C"
              stroke="#fff"
              strokeWidth="2"
              onMouseEnter={() => setHoveredDistrict(districtMap['Sant Martí'])}
              onMouseLeave={() => setHoveredDistrict(null)}
              className="cursor-pointer transition-all duration-200 hover:fill-[#00E0D0]"
            />
            <text x="560" y="140" fontSize="12" fill="white" textAnchor="middle">Sant Martí</text>

            {/* Gràcia */}
            <path
              id="gracia"
              d="M100,250 L150,230 L200,250 L220,300 L180,350 L120,330 Z"
              fill="#2E5B9C"
              stroke="#fff"
              strokeWidth="2"
              onMouseEnter={() => setHoveredDistrict(districtMap['Gràcia'])}
              onMouseLeave={() => setHoveredDistrict(null)}
              className="cursor-pointer transition-all duration-200 hover:fill-[#00E0D0]"
            />
            <text x="140" y="290" fontSize="12" fill="white" textAnchor="middle">Gràcia</text>

            {/* Horta - Guinardó */}
            <path
              id="horta-guinardo"
              d="M250,250 L300,230 L350,250 L370,300 L330,350 L270,330 Z"
              fill="#2E5B9C"
              stroke="#fff"
              strokeWidth="2"
              onMouseEnter={() => setHoveredDistrict(districtMap['Horta - Guinardó'])}
              onMouseLeave={() => setHoveredDistrict(null)}
              className="cursor-pointer transition-all duration-200 hover:fill-[#00E0D0]"
            />
            <text x="300" y="290" fontSize="12" fill="white" textAnchor="middle">Horta - Guinardó</text>

            {/* Nou Barris */}
            <path
              id="nou-barris"
              d="M380,250 L430,230 L480,250 L500,300 L460,350 L400,330 Z"
              fill="#2E5B9C"
              stroke="#fff"
              strokeWidth="2"
              onMouseEnter={() => setHoveredDistrict(districtMap['Nou Barris'])}
              onMouseLeave={() => setHoveredDistrict(null)}
              className="cursor-pointer transition-all duration-200 hover:fill-[#00E0D0]"
            />
            <text x="430" y="290" fontSize="12" fill="white" textAnchor="middle">Nou Barris</text>

            {/* Sant Andreu */}
            <path
              id="sant-andreu"
              d="M510,250 L560,230 L610,250 L630,300 L590,350 L530,330 Z"
              fill="#2E5B9C"
              stroke="#fff"
              strokeWidth="2"
              onMouseEnter={() => setHoveredDistrict(districtMap['Sant Andreu'])}
              onMouseLeave={() => setHoveredDistrict(null)}
              className="cursor-pointer transition-all duration-200 hover:fill-[#00E0D0]"
            />
            <text x="560" y="290" fontSize="12" fill="white" textAnchor="middle">Sant Andreu</text>

            {/* Les Corts */}
            <path
              id="les-corts"
              d="M100,400 L150,380 L200,400 L220,450 L180,500 L120,480 Z"
              fill="#2E5B9C"
              stroke="#fff"
              strokeWidth="2"
              onMouseEnter={() => setHoveredDistrict(districtMap['Les Corts'])}
              onMouseLeave={() => setHoveredDistrict(null)}
              className="cursor-pointer transition-all duration-200 hover:fill-[#00E0D0]"
            />
            <text x="140" y="440" fontSize="12" fill="white" textAnchor="middle">Les Corts</text>

            {/* Sarrià - St. Gervasi */}
            <path
              id="sarria-st-gervasi"
              d="M250,400 L300,380 L350,400 L370,450 L330,500 L270,480 Z"
              fill="#2E5B9C"
              stroke="#fff"
              strokeWidth="2"
              onMouseEnter={() => setHoveredDistrict(districtMap['Sarrià - St. Gervasi'])}
              onMouseLeave={() => setHoveredDistrict(null)}
              className="cursor-pointer transition-all duration-200 hover:fill-[#00E0D0]"
            />
            <text x="300" y="440" fontSize="12" fill="white" textAnchor="middle">Sarrià - St. Gervasi</text>

            {/* Nou Barris (segundo) */}
            <path
              id="nou-barris-2"
              d="M380,400 L430,380 L480,400 L500,450 L460,500 L400,480 Z"
              fill="#2E5B9C"
              stroke="#fff"
              strokeWidth="2"
              onMouseEnter={() => setHoveredDistrict(districtMap['Nou Barris'])}
              onMouseLeave={() => setHoveredDistrict(null)}
              className="cursor-pointer transition-all duration-200 hover:fill-[#00E0D0]"
            />
            <text x="430" y="440" fontSize="12" fill="white" textAnchor="middle">Nou Barris</text>
          </g>
        </svg>

        {/* Tooltip flotante */}
        {hoveredDistrict && (
          <div
            className="absolute bg-white text-black p-4 rounded-lg shadow-lg border border-gray-200 max-w-xs"
            style={{
              top: '20px',
              right: '20px',
              zIndex: 1000,
              transform: 'translateX(-50%)',
            }}
          >
            <h3 className="font-bold text-lg mb-1">{hoveredDistrict.name}</h3>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-red-500 font-bold text-xl">⚠️</span>
              <span className="font-medium">Anomalías: {hoveredDistrict.anomalies}</span>
            </div>
            <p className="text-sm opacity-80">{hoveredDistrict.description}</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-sm opacity-80">
        <p>Projecte alineat amb l’<strong>ODS 6 (Aigua neta i sanejament)</strong> i <strong>ODS 13 (Acció pel clima)</strong></p>
        <p className="mt-1">Dades: Agència Catalana de l’Aigua | Aigües de Barcelona</p>
      </footer>
    </div>
  )
}