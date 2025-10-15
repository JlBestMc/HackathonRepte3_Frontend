import Main from '@layouts/authn/Main'
import Spline from '@splinetool/react-spline'
import { Link } from '@tanstack/react-router'
import logo from '../assets/images/logo-index.png'
import Button2 from '../components/ui/Button2'
import github from '../assets/images/github.svg'
const Index = () => {
    return (
        <Main>
            <main className="w-full h-screen bg-black overflow-hidden relative ">
                {/* Header: Logo izquierda + botones derecha */}
                <header className="absolute px-6 top-0 left-0 right-0 z-40">
                    <div className="flex items-center justify-between px-6 py-4">
                        {/* Logo */}
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-10 w-auto md:h-18 cursor-pointer hover:scale-[1.1] transition-transform ease-in-out duration-500"
                        />

                        {/* Botones Auth */}
                        <div className="flex items-center bg-gradient-to-b gap-3">
                            <img
                                className="h-12 w-12"
                                src={github}
                                alt="GitHub"
                                
                            />
                        </div>
                    </div>
                </header>

                {/* Spline arriba en móvil, a la derecha en md+ (fondo) */}
                <div
                    className="w-full h-[55vh] md:h-full transition-opacity duration-800 ease-out"
                    style={{ clipPath: 'inset(0 0 56px 0)' }}
                >
                    <Spline scene="https://prod.spline.design/jXRW7HLwo1u3g2LU/scene.splinecode" />
                </div>

                {/* Área de contenido a la izquierda: en móvil debajo, en md+ sobrepuesto a la izquierda */}
                <section className="relative z-30 w-full md:absolute md:inset-y-0 md:left-0 md:w-[52%] lg:w-[50%] md:flex md:items-center">
                    <div className="relative flex flex-col items-start text-left px-6 sm:px-8 py-8 md:py-0 md:pl-14 lg:pl-16 max-w-3xl">
                        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-bold text-black leading-tight tracking-tight">
                            Monitor water consumption with graphs and
                            notifications
                        </h1>
                        <p className="mt-4 md:mt-6 text-base md:text-xl py-6 text-black/90 max-w-[60ch]">
                            With Hydrodata you can monitor your water
                            consumption and receive alerts. Also you can
                            visualize your data with beautiful graphs.
                        </p>
                        <div className="mt-6 md:mt-10 flex flex-wrap items-center gap-5">
                            <Link to="/sign-up">
                                <Button2
                                    size="lg"
                                    rounded="rounded-full"
                                    borderColor="border border-transparent"
                                    bgColor="bg-gradient-to-r from-[#3B82F6] to-[#6366F1] text-white"
                                    gradientHover="from-[#60A5FA] via-[#60A5FA] to-[#8B5CF6]"
                                >
                                    Register
                                </Button2>
                            </Link>
                            <Link to="/sign-in">
                                <Button2
                                    size="lg"
                                    rounded="rounded-full"
                                    borderColor="border border-[#60A5FA]"
                                    bgColor="bg-transparent text-[#60A5FA] hover:text-white"
                                    gradientHover="from-[#60A5FA] to-[#60A5FA]"
                                >
                                    Login
                                </Button2>
                            </Link>
                        </div>
                    </div>
                </section>
                <div>
                    <p className="absolute bottom-4 right-10 text-base md:text-sm text-white">
                        Hackathon Grup 1 repte 3 - Antonio - Omar - Juan Luis -
                        Jesus - Isaac - David - Alfonso - Toni
                    </p>
                </div>
            </main>
        </Main>
    )
}

export default Index
