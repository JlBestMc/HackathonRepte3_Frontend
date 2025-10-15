import metricsData from '../config/data/metrics.json'

interface BarItem {
    hour: string
    dom: number
    ind: number
}

export default function HomePage() {
    // Datos estáticos: se cargan una sola vez al montar
    const barData: BarItem[] = metricsData.barData
    const radialValues: number[] = metricsData.radialValues

    // Validación básica
    if (
        !barData ||
        !radialValues ||
        barData.length === 0 ||
        radialValues.length === 0
    ) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white bg-red-900">
                Error: datos no válidos en metrics.json
            </div>
        )
    }

    const globalMax = Math.max(
        ...barData.map((item) => Math.max(item.dom, item.ind)),
        1
    )

    return (
        <div className="min-h-screen bg-gradient-to-r from-[#2E5B9C] to-[#00E0D0] text-white p-4 md:p-8">
            {/* Capçalera */}
            <div className="mb-8 text-center">
                <h1 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-2">
                    💧 Aigua Intel·ligent BCN
                </h1>
                <p className="text-sm md:text-base opacity-90 mt-1">
                    Monitorització en temps real del consum d’aigua – Aliniat
                    amb ODS 6 i ODS 13
                </p>
            </div>

            {/* Resum ràpid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
                {[
                    {
                        label: 'Consum avui',
                        value: '12.400 m³',
                        sub: '+2.1% vs ahir',
                        icon: '💧',
                    },
                    {
                        label: 'Anomalies',
                        value: '3',
                        sub: 'Últimes 24h',
                        icon: '⚠️',
                        color: 'text-[#ebfdff]',
                    },
                    {
                        label: 'Temperatura',
                        value: '22°C',
                        sub: 'Mitjana diària',
                        icon: '🌡️',
                    },
                    { label: 'Pluja', value: '0 mm', sub: 'Avui', icon: '🌧️' },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center"
                    >
                        <div className="flex flex-col items-center">
                            <span className="text-xl mb-2">{item.icon}</span>
                            <p className="text-sm font-medium">{item.label}</p>
                            <p
                                className={`text-2xl font-bold mt-1 ${item.color || ''}`}
                            >
                                {item.value}
                            </p>
                            <p className="text-xs opacity-80 mt-1">
                                {item.sub}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Gràfic de consum per sectors */}
            <div className="mb-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center">
                <div className="mb-4">
                    <h2 className="text-xl font-bold">
                        Consum d’aigua per sectors
                    </h2>
                    <p className="text-sm opacity-80">
                        Últimes 24 hores a l’Àrea Metropolitana de Barcelona
                    </p>
                </div>
                <div className="h-64 flex items-end justify-center gap-4">
                    {' '}
                    {/* 👈 gap aumentado */}
                    {barData.map((item, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div
                                className="w-30 flex flex-col-reverse gap-1"
                                style={{ height: '160px' }}
                            >
                                {' '}
                                {/* 👈 w-10 para barras más anchas */}
                                <div
                                    className="w-full rounded-t-sm transition-all duration-700 ease-in-out"
                                    style={{
                                        height: `${(item.ind / globalMax) * 100}%`,
                                        backgroundColor: '#00E0D0',
                                    }}
                                ></div>
                                <div
                                    className="w-full rounded-t-sm transition-all duration-700 ease-in-out"
                                    style={{
                                        height: `${(item.dom / globalMax) * 100}%`,
                                        backgroundColor: '#2E5B9C',
                                    }}
                                ></div>
                            </div>
                            <span className="text-xs mt-2 font-medium">
                                {item.hour}:00
                            </span>
                        </div>
                    ))}
                </div>
                <div className="mt-4 flex justify-center gap-6 text-sm">
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

            {/* Radial Charts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {radialValues.map((value, index) => {
                    const titles = ['', '', '']
                    const maxValues = [500, 2000, 3000]
                    const max = maxValues[index] ?? 1000
                    const percentage = Math.min(100, (value / max) * 100)
                    const dashArray = 251.2
                    const dashOffset =
                        dashArray - (percentage / 100) * dashArray

                    return (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center"
                        >
                            <h3 className="text-sm font-medium mb-1">
                                {titles[index]}
                            </h3>
                            <p className="text-xs opacity-70 mb-4">
                                Agosto-Septiembre 2015
                            </p>
                            <div className="relative w-32 h-32 mx-auto">
                                <svg
                                    viewBox="0 0 100 100"
                                    className="w-full h-full"
                                >
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        fill="none"
                                        stroke="#ffffff30"
                                        strokeWidth="8"
                                    />
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        fill="none"
                                        stroke="#00E0D0"
                                        strokeWidth="8"
                                        strokeDasharray={dashArray}
                                        strokeDashoffset={dashOffset}
                                        strokeLinecap="round"
                                        transform="rotate(-90 50 50)"
                                        className="transition-all duration-1000 ease-in-out"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-2xl font-bold">
                                        {value}
                                    </span>
                                    <span className="text-xs opacity-80">
                                        Visitors
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Footer */}
            <footer className="mt-12 text-center text-sm opacity-80">
                <p>
                    Projecte alineat amb l’
                    <strong>ODS 6 (Aigua neta i sanejament)</strong> i{' '}
                    <strong>ODS 13 (Acció pel clima)</strong>
                </p>
                <p className="mt-1">
                    Dades: Agència Catalana de l’Aigua | Aigües de Barcelona
                </p>
            </footer>
        </div>
    )
}
