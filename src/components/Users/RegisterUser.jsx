// React
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

// Toast
import { toast } from 'sonner';

// Components
import { ConfirmPassWordInput, CpfInput, NameInput, PassWordInput, PhoneInput } from '@/components/FormsInputs/Inputs';
import { RolesSelect } from '../FormsInputs/Selects';
import { Button } from '../ui/button';
import {
    Form,
} from "@/components/ui/form"

// Zod
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Services
import { createUser } from '@/services/users';

// Icons
import { RefreshCcw } from 'lucide-react';

// Libs
import { isCPFValid } from '@/lib/validators';

const RegisterUser = ({ updateUsersList, setUpdateUsersList }) => {
    const [isLoading, setIsLoading] = useState(false);

    const formSchema = z.object({
        name: z.string().min(5, {
            message: 'O nome deve ter pelo menos 5 caracteres.',
        }),
        cpf: z
            .string()
            .length(11, { message: 'O cpf deve ter 11 caracteres' })
            .regex(/^\d{11}$/, { message: 'Deve conter apenas números' })
            .refine((value) => isCPFValid(value), { message: 'CPF inválido.' }),
        phone: z.string().min(11, {
            message: 'O telefone deve ter 11 caracteres.',
        }),
        password: z.string().min(5, {
            message: "A senha deve ter pelo menos 5 caracteres."
        }),
        confirmPassword: z.string(),
        role: z.string().min(1, {
            message: "Selecione uma opção.",
        }),
    }).refine((data) => data.password === data.confirmPassword, {
        message: "As senhas não coincidem",
        path: ["confirmPassword"],
    });

    const formUsers = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            cpf: '',
            phone: '',
            password: '',
            confirmPassword: '',
            role: '',
        },
    });

    const onSubmit = async (data) => {
        setIsLoading(true)
        const item = data
        try {

            const userData = {
                name: item.name,
                cpf: item.cpf,
                phone: item.phone,
                password: item.password,
                role: item.role,
            }
            const promise = createUser(userData).then(() => {
                formUsers.reset()
                setUpdateUsersList(!updateUsersList)
                setIsLoading(false)
            });

            toast.promise(promise, {
                loading: 'Cadastrando usuário...',
                success: 'Usuário cadastrado',
                error: (error) => error.message,
            });

        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    };

    return (
        <Form {...formUsers}>
            <form onSubmit={formUsers.handleSubmit(onSubmit)} className='grid grid-cols-4 mt-4 gap-[1rem_1rem]'>

                <div className="flex flex-col col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-2">
                    <NameInput
                        form={formUsers}
                        name="name"
                        disabled={isLoading}
                    />
                </div>

                <div className="flex flex-col col-span-4 sm:col-span-2 md:col-span-1 lg:col-span-1">
                    <CpfInput
                        form={formUsers}
                        name="cpf"
                        disabled={isLoading}
                    />
                </div>

                <div className="flex flex-col col-span-4 sm:col-span-2 md:col-span-1 lg:col-span-1">
                    <PhoneInput
                        form={formUsers}
                        name="phone"
                        disabled={isLoading}
                    />
                </div>

                <div className="flex flex-col col-span-4 sm:col-span-2 md:col-span-1 lg:col-span-1">
                    <PassWordInput
                        form={formUsers}
                        name="password"
                        disabled={isLoading}
                    />
                </div>

                <div className="flex flex-col col-span-4 sm:col-span-2 md:col-span-1 lg:col-span-1">
                    <ConfirmPassWordInput
                        form={formUsers}
                        name="confirmPassword"
                        disabled={isLoading}
                    />
                </div>

                <div className="flex flex-col col-span-4 sm:col-span-2 md:col-span-1 lg:col-span-1">
                    <RolesSelect
                        form={formUsers}
                        name="role"
                        disabled={isLoading}
                    />
                </div>
                <div className="flex flex-col col-span-4 sm:col-span-2 md:col-span-1 lg:col-span-1">
                </div>

                <button
                    type='submit'
                    className="flex items-center justify-center w-full border rounded-lg hover:opacity-75 transition-opacity disabled:!opacity-60 disabled:cursor-not-allowed bg-green-600 text-sky-50 border-green-600 text-base gap-2.5 px-4 py-2.5 col-span-4 mt-auto"
                    disabled={isLoading}
                >
                    {
                        isLoading == true ? (
                            <>
                                <RefreshCcw className="h-4 w-4 animate-spin" />
                                Carregando
                            </>
                        ) : (
                            <>
                                Cadastrar
                            </>
                        )
                    }
                </button>
            </form>
        </Form>

    );
};

export default RegisterUser;
