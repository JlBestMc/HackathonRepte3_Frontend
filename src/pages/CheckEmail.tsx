import Main from '@layouts/authn/Main'
import rotateVid from '../assets/videos/video-water.mp4'

const CheckEmail = () => {
    return (
        <Main>
            <div className="relative min-h-screen bg-[url('../assets/images/bg3.png')] bg-cover bg-no-repeat bg-center">
                <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.1),rgba(0,0,0,0.01),rgba(0,0,0,0.01),rgba(0,0,0,0.8))]">
                    <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl">
                        <div className="bg-[#f6f7f3]/90 dark:bg-white/95 backdrop-blur-md p-8 sm:p-7">
                            <p className="text-4xl">
                                Please check your email inbox. We have sent you
                                an email.
                            </p>
                        </div>

                        <div className="relative bg-white/10 backdrop-blur-md">
                            <video
                                className="h-full w-full object-cover"
                                src={rotateVid}
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                            <div className="pointer-events-none absolute inset-0 ring-1 ring-white/20" />
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    )
}

export default CheckEmail
