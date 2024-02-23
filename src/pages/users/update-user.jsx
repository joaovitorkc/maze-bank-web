// React
import { useState, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';

// React router
import { useParams, useSearchParams, Link } from 'react-router-dom';

// Toast 
import { toast } from 'sonner';

// Hooks

// Components
import ManagementHeader from '@/components/Management/ManagementHeader';
import { ConfirmPassWordInput, CpfInput, NameInput, PassWordInput, PhoneInput } from '@/components/FormsInputs/Inputs';
import { RolesSelect } from '@/components/FormsInputs/Selects';

import {
  Form,
} from "@/components/ui/form"

// Zod
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Services
import { getUser, updateUser } from '@/services/users';
import { RefreshCcw } from 'lucide-react';

const UpdateUser = () => {
  const { userId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [searchUser, setSearchUser] = useState(true);

  useEffect(() => {

    const searchUser2 = async () => {
      try {
        setIsLoading(true)
        const promise = getUser(userId)

        const [data] = await promise

        formUpdateUser.setValue('name', data.name);
        formUpdateUser.setValue('cpf', data.cpf);
        formUpdateUser.setValue('phone', data.phone);
        formUpdateUser.setValue('role', data.role);

        setIsLoading(false)
        return data
      } catch (error) {
        console.error(error);
        toast.error("Erro ao buscar o usuário");
      } finally {
        setIsLoading(false)
      }
    };

    searchUser2();

  }, [searchUser])

  const formSchema = z.object({
    name: z.string().min(5, {
      message: 'O nome deve ter pelo menos 5 caracteres.',
    }),
    cpf: z.string().min(11, {
      message: 'O CPF deve ter 11 caracteres.',
    }),
    phone: z.string().min(11, {
      message: 'O telefone deve ter 11 caracteres.',
    }),
    password: z.string().refine((value) => {
      if (value !== "") {
        return value.length >= 6;
      }
      return true;
    }, {
      message: 'A senha deve ter pelo menos 6 caracteres.',
    }),
    confirmPassword: z.string(),
    role: z.string().min(1, {
      message: "Selecione uma opção.",
    }),
  })
    .refine((data) => data.password === data.confirmPassword, {
      message: "As senhas não coincidem.",
      path: ["confirmPassword"],
    });


  const formUpdateUser = useForm({
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
    const userData = {
      name: data.name,
      cpf: data.cpf,
      phone: data.phone,
      role: data.role,
    }

    if (data.password !== "") {
      userData.password = data.password
    }

    try {

      const promise = updateUser(userId, userData).then(() => {
        formUpdateUser.reset()
        setSearchUser(!searchUser)
        setIsLoading(false)
      });

      toast.promise(promise, {
        loading: 'Salvando alterações...',
        success: 'Alterações salvas',
        error: 'Erro ao atualizar o usuário',
      });

    } catch (error) {
      console.error(error)
      setIsLoading(false)
    }
  };

  return (
    <>
      <ManagementHeader title="Editar usuário" subTitle="Usuários / Editar" />
      <section>
        <Form {...formUpdateUser}>
          <form onSubmit={formUpdateUser.handleSubmit(onSubmit)} className='grid grid-cols-4 mt-4 gap-[1rem_1rem]'>

            <div className="flex flex-col col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-2">
              <NameInput
                form={formUpdateUser}
                name="name"
                disabled={isLoading}
              />
            </div>

            <div className="flex flex-col col-span-4 sm:col-span-2 md:col-span-1 lg:col-span-1">
              <CpfInput
                form={formUpdateUser}
                name="cpf"
                disabled={isLoading}
              />
            </div>

            <div className="flex flex-col col-span-4 sm:col-span-2 md:col-span-1 lg:col-span-1">
              <PhoneInput
                form={formUpdateUser}
                name="phone"
                disabled={isLoading}
              />
            </div>

            <div className="flex flex-col col-span-4 sm:col-span-2 md:col-span-1 lg:col-span-1">
              <PassWordInput
                form={formUpdateUser}
                name="password"
                disabled={isLoading}
              />
            </div>

            <div className="flex flex-col col-span-4 sm:col-span-2 md:col-span-1 lg:col-span-1">
              <ConfirmPassWordInput
                form={formUpdateUser}
                name="confirmPassword"
                disabled={isLoading}
              />
            </div>

            <div className="flex flex-col col-span-4 sm:col-span-2 md:col-span-1 lg:col-span-1">
              <RolesSelect
                form={formUpdateUser}
                name="role"
                disabled={isLoading}
              />
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
                    Salvar alterações
                  </>
                )
              }
            </button>
          </form>
        </Form>

      </section>
    </>
  );
};

export default UpdateUser