// import { toast } from 'sonner'
import { Mail, Lock } from 'lucide-react'
import { useForm } from 'react-hook-form'
// import { useNavigate } from '@tanstack/react-router'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/base/button'
import { Form } from '@components/ui/base/form'
import FormFieldInput from '@/components/ui/FormFieldInput'
import content from '@/config/data/formSignIn.ts'
import logo from '../assets/images/logo-index.png'
import { Link } from '@tanstack/react-router'

const signInSchema = z.object({
    email: z
        .string()
        .min(1, content.errorEmailRequired)
        .email(content.errorEmailInvalid),
    password: z.string().min(6, content.errorPasswordTooShort),
})

type FormData = z.infer<typeof signInSchema>

const FormSignIn = () => {
    const defaultValues = {
        email: '',
        password: '',
    }
    // const navigate = useNavigate()

    const form = useForm<FormData>({
        resolver: zodResolver(signInSchema),
        defaultValues: defaultValues,
    })

    // const onSubmit = async (formData: FormData) => {
    //     try {
    //         const error = 'waiting for data'
    //         if (error) {
    //             form.setError('root', {
    //                 type: 'server',
    //             })
    //             toast.error(`${content.textToastFail}`)
    //             return
    //         }
    //         navigate({ to: '/dashboard' })
    //     } catch (error) {
    //         const message = 'waiting for data'

    //         form.setError('root', {
    //             type: 'server',
    //             message,
    //         })
    //         toast.error(`${content.textToastFail}: ${message}`)
    //         return
    //     }
    // }

    return (
        <Form {...form}>
            {/* <form onSubmit={form.handleSubmit(onSubmit)}> */}
            <form>
                <Link className="flex items-center justify-center mb-8" to="/">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-16 cursor-pointer hover:scale-[1.1] transition-transform ease-in-out duration-500"
                    />
                </Link>
                <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 text-center">
                    Welcome back!
                </h1>
                <p className="mt-2 text-center text-gray-500 mb-5">
                    Graphs, maps and notifications — all in one place.
                </p>

                <FormFieldInput
                    control={form.control}
                    fieldName="email"
                    icon={Mail}
                    label={content.labelEmail}
                    type="email"
                />
                <FormFieldInput
                    control={form.control}
                    fieldName="password"
                    icon={Lock}
                    label={content.labelPassword}
                    type="password"
                />
                <Button type="submit" className="w-full">
                    {form.formState.isSubmitting
                        ? content.textButtonSending
                        : content.textButtonSend}
                </Button>
                <div className="mt-8 text-xs text-gray-500 flex items-center justify-center gap-2">
                    <span>Don’t have an account?</span>
                    <Link
                        to="/sign-up"
                        type="button"
                        className="underline underline-offset-4 hover:text-gray-700"
                    >
                        Sign Up
                    </Link>
                </div>
            </form>
            {form.formState.errors.root && (
                <div className="text-red text-sm mt-2 text-center">
                    {form.formState.errors.root.message}
                </div>
            )}
        </Form>
    )
}

export default FormSignIn
