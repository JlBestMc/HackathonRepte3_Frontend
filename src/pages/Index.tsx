import Main from '@layouts/authn/Main'
import Spline from '@splinetool/react-spline'

const Index = () => {
    return (
        <Main>
            <div
                className={`w-full h-full transition-opacity duration-800 ease-out"
        }`}
                style={{ clipPath: 'inset(0 0 60px 0)' }}
            >
                <Spline scene="https://prod.spline.design/jXRW7HLwo1u3g2LU/scene.splinecode" />
            </div>
        </Main>
    )
}

export default Index
