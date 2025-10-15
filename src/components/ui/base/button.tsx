import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
    'mt-6 w-full rounded-full bg-black text-white py-3 font-medium hover:bg-black/90 transition',
    {
        variants: {
            variant: {
                default:
                    'bg-gray-900 text-gray-50 shadow-xs hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90',
                destructive:
                    'bg-red-500 text-white shadow-xs hover:bg-red-500/90 focus-visible:ring-red-500/20 dark:focus-visible:ring-red-500/40 dark:bg-red-500/60 dark:bg-red-900 dark:hover:bg-red-900/90 dark:focus-visible:ring-red-900/20 dark:focus-visible:ring-red-900/40 dark:bg-red-900/60',
                outline:
                    'border bg-white shadow-xs hover:bg-gray-100 hover:text-gray-900 dark:bg-gray-200/30 dark:border-gray-200 dark:hover:bg-gray-200/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:bg-gray-800/30 dark:border-gray-800 dark:hover:bg-gray-800/50',
                secondary:
                    'bg-gray-100 text-gray-900 shadow-xs hover:bg-gray-100/80 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-800/80',
                ghost: 'hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-100/50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:hover:bg-gray-800/50',
                link: 'text-gray-900 underline-offset-4 hover:underline dark:text-gray-50',
                singInOut:
                    'mt-6 w-full rounded-full bg-black text-white py-3 font-medium hover:bg-black/90 transition',
            },
            size: {
                default: '',
                xs: 'h-6 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
                sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
                lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
                icon: 'size-9',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
)

function Button({
    className,
    variant,
    size,
    asChild = false,
    ...props
}: React.ComponentProps<'button'> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean
    }) {
    const Comp = asChild ? Slot : 'button'

    return (
        <Comp
            data-slot="button"
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        />
    )
}

export { Button, buttonVariants }
