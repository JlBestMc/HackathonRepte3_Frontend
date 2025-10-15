// import { toast } from 'sonner'
import { Lock, LockKeyhole, Mail, User } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/base/button'
import { Form } from '@components/ui/base/form'
import FormFieldInput from '@/components/ui/FormFieldInput'
import content from '@/config/data/formSignUp'

const registerUserSchema = z
    .object({
        userName: z
            .string()
            .min(3, content.errorUserNameTooShort)
            .max(20, content.errorUserNameTooLong),
        userLastName: z
            .string()
            .min(3, content.errorUserLastNameTooShort)
            .max(20, content.errorUserLastNameTooLong),
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
    // const { logError, logSuccess } = useLogger('RegisterUserForm')

    const defaultValues = {
        email: '',
        password: '',
        confirmPassword: '',
        userName: '',
        userLastName: '',
        role: 'user' as const,
    }

    const form = useForm<FormData>({
        resolver: zodResolver(registerUserSchema),
        defaultValues: defaultValues,
    })

    // const onSubmit = async (formData: FormData) => {
    //     try {
    //         const newUser = await createUser({
    //             email: formData.email,
    //             password: formData.password,
    //             user_name: formData.userName,
    //             user_last_name: formData.userLastName,
    //             dni: formData.dni,
    //             role: formData.role,
    //         })
    //         toast.success(content.textToastSuccess)
    //         logSuccess(content.textToastSuccess, content.title)
    //         form.reset()
    //         return newUser
    //     } catch (error) {
    //         logError(content.textToastFail, error, content.title)
    //         toast.error(content.textToastFail)
    //         return
    //     }
    // }

    return (
        <Form {...form}>
            {/* <form onSubmit={form.handleSubmit(onSubmit)}> */}
            <form>
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
                    fieldName="userLastName"
                    icon={User}
                    label={content.labelUserLastName}
                    placeholder="Barbaro"
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
                <Button type="submit" className="w-full">
                    {form.formState.isSubmitting
                        ? content.textButtonSending
                        : content.textButtonSend}
                </Button>
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
