const Logo = ({
    customClasses,
    size = 'h-[24px] w-[24px]',
    variant,
}: {
    customClasses?: string
    size?: string
    variant?: string
}) => {
    const fillColor = variant === 'white' ? '#ffffff' : '#00b3e5'

    return (
        <div className={`${customClasses} ${size}`}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={fillColor}
                // stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-icon lucide-circle"
            >
                <circle cx="12" cy="12" r="10" />
            </svg>
        </div>
    )
}

export default Logo
