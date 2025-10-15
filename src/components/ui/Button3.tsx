import type { PropsWithChildren } from 'react'

const Button3 = ({ children }: PropsWithChildren) => {
    return (
        <button
            type="submit"
            className="mt-6 w-full rounded-full bg-black text-white py-3 font-medium hover:bg-black/90 transition"
        >
            {children}
        </button>
    )
}

export default Button3
