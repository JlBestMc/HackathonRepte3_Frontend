// src/pages/MapPage.tsx
import { useState } from 'react'
import districtsData from '../config/data/districts.json'
import mapImage from '../assets/images/Mapa.png'

interface District {
  name: string
  anomalies: number
  description: string
  position: {
    top: number
    left: number
    width: number
    height: number
  }
}

export default function MapPage() {
  const [hoveredDistrict, setHoveredDistrict] = useState<District | null>(null)
  const [debugMode, setDebugMode] = useState(false) // Modo ajuste activado
  const [selectedDistrict, setSelectedDistrict] = useState<District | null>(null)

  // Función para actualizar posición de un distrito
  const updatePosition = (index: number, key: keyof District['position'], value: number) => {
    const newDistricts = [...districtsData.districts]
    newDistricts[index].position[key] = value
    // Aquí podrías guardar los cambios si lo necesitas (localStorage, API, etc.)
    console.log('Posición actualizada:', newDistricts[index])
  }

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


      {/* Contenedor del mapa + overlays */}
      <div className="relative max-w-4xl mx-auto">
        {/* Imagen del mapa */}
        <img
          src={mapImage}
          alt="Mapa de Barcelona"
          className="w-full h-auto rounded-xl shadow-lg"
          style={{ maxWidth: '100%', maxHeight: '80vh' }}
        />

        {/* Overlay invisible por distrito — DELANTE de la imagen */}
        {districtsData.districts.map((district, index) => (
          <div
            key={index}
            className={`absolute cursor-pointer transition-all duration-200 ${
              debugMode ? 'border-2 border-yellow-400 bg-yellow-200/30' : 'hover:bg-[#00E0D0]/30'
            }`}
            style={{
              top: `${district.position.top}px`,
              left: `${district.position.left}px`,
              width: `${district.position.width}px`,
              height: `${district.position.height}px`,
              backgroundColor: debugMode ? 'rgba(255, 255, 255, 0)' : 'transparent',
              
              zIndex: 10,
            }}
            onMouseEnter={() => setHoveredDistrict(district)}
            onMouseLeave={() => setHoveredDistrict(null)}
            onClick={() => {
              if (debugMode) setSelectedDistrict(district)
            }}
          />
        ))}

        {/* Panel de ajuste (solo en modo debug) */}
        {debugMode && selectedDistrict && (
          <div className="absolute top-4 right-4 bg-white text-black p-4 rounded-lg shadow-lg z-50 max-w-xs">
            <h3 className="font-bold mb-2">Ajustando: {selectedDistrict.name}</h3>
            <div className="grid grid-cols-2 gap-2 mb-4">
              <label className="text-xs">Top:</label>
              <input
                type="number"
                value={selectedDistrict.position.top}
                onChange={(e) => updatePosition(districtsData.districts.indexOf(selectedDistrict), 'top', parseInt(e.target.value))}
                className="border p-1 text-sm"
              />
              <label className="text-xs">Left:</label>
              <input
                type="number"
                value={selectedDistrict.position.left}
                onChange={(e) => updatePosition(districtsData.districts.indexOf(selectedDistrict), 'left', parseInt(e.target.value))}
                className="border p-1 text-sm"
              />
              <label className="text-xs">Width:</label>
              <input
                type="number"
                value={selectedDistrict.position.width}
                onChange={(e) => updatePosition(districtsData.districts.indexOf(selectedDistrict), 'width', parseInt(e.target.value))}
                className="border p-1 text-sm"
              />
              <label className="text-xs">Height:</label>
              <input
                type="number"
                value={selectedDistrict.position.height}
                onChange={(e) => updatePosition(districtsData.districts.indexOf(selectedDistrict), 'height', parseInt(e.target.value))}
                className="border p-1 text-sm"
              />
            </div>
            <button
              onClick={() => setSelectedDistrict(null)}
              className="w-full px-3 py-1 bg-gray-500 text-white rounded text-sm"
            >
              Cerrar
            </button>
          </div>
        )}

        {/* Tooltip flotante */}
        {hoveredDistrict && (
          <div
            className="absolute bg-white text-black p-4 rounded-lg shadow-lg border border-gray-200 max-w-xs z-50"
            style={{
              top: '20px',
              right: '20px',
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