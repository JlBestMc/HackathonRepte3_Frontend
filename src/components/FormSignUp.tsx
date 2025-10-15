import { toast } from 'sonner'
import { Lock, LockKeyhole, Mail, User } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/base/button'
import { Form } from '@components/ui/base/form'
import FormFieldInput from '@/components/ui/FormFieldInput'
import content from '@/config/data/formSignUp'
import logo from '../assets/images/logo-index.png'
import { Link } from '@tanstack/react-router'
import { useLogger } from '@hooks/useLogger'
import { registerUser } from '@/services/supabaseService'

const registerUserSchema = z
    .object({
        userName: z
            .string()
            .min(3, content.errorUserNameTooShort)
            .max(20, content.errorUserNameTooLong),
        email: z
            .string()
            .email(content.errorEmailInvalid)
            .min(1, content.errorEmailRequired),
        password: z
            .string()
            .min(8, content.errorPasswordTooShort)
            .regex(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).*$/,
                content.errorPasswordMustContain
            ),
        confirmPassword: z.string().min(1, content.confirmPassword),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: content.errorPasswordNoMatch,
        path: ['confirmPassword'],
    })

type FormData = z.infer<typeof registerUserSchema>

const RegisterUserForm = () => {
    const { logError, logSuccess } = useLogger('RegisterUserForm')

    const defaultValues = {
        email: '',
        password: '',
        confirmPassword: '',
        userName: '',
    }

    const form = useForm<FormData>({
        resolver: zodResolver(registerUserSchema),
        defaultValues: defaultValues,
    })

    const onSubmit = async (formData: FormData) => {
        try {
            const newUser = await registerUser(
                formData.email,
                formData.password,
                formData.userName
            )
            toast.success(content.textToastSuccess)
            logSuccess(content.textToastSuccess, content.title)
            form.reset()
            return newUser
        } catch (error) {
            logError(content.textToastFail, error, content.title)
            toast.error(content.textToastFail)
            return
        }
    }

    return (
        <Form {...form}>
            <form
                className="max-w-md mx-auto"
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <Link className="flex items-center justify-center mb-3" to="/">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-16 cursor-pointer hover:scale-[1.1] transition-transform ease-in-out duration-500"
                    />
                </Link>
                <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 text-center">
                    Create your account
                </h1>
                <p className="mt-2 text-center text-gray-500">
                    Start your with us today.
                </p>
                <FormFieldInput
                    control={form.control}
                    fieldName="userName"
                    icon={User}
                    label={content.labelUserName}
                    placeholder="Michael"
                    type="text"
                />
                <FormFieldInput
                    control={form.control}
                    fieldName="email"
                    icon={Mail}
                    label={content.labelEmail}
                    placeholder="mb@nyt.com"
                    type="email"
                />
                <FormFieldInput
                    control={form.control}
                    fieldName="password"
                    icon={Lock}
                    label={content.labelPassword}
                    type="password"
                />
                <FormFieldInput
                    control={form.control}
                    fieldName="confirmPassword"
                    icon={LockKeyhole}
                    label={content.labelConfirmPassword}
                    type="password"
                />
                <Button type="submit">
                    {form.formState.isSubmitting
                        ? content.textButtonSending
                        : content.textButtonSend}
                </Button>
                <div className="mt-8 text-xs text-gray-500 flex items-center justify-center gap-2">
                    <span>Already have an account?</span>
                    <Link
                        to="/sign-in"
                        type="button"
                        className="underline underline-offset-4 hover:text-gray-700"
                    >
                        Sign In
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

export default RegisterUserForm
