// React
import React, { useEffect, useState } from 'react'

// Components
import ListUsers from '@/components/Users/ListUsers';
import RegisterUser from '@/components/Users/RegisterUser';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ManagementHeader from '@/components/Management/ManagementHeader';

// Services
import { changeSituation, getUsers } from '@/services/users';

// Toast
import { toast } from 'sonner';

const Users = () => {
    const [updateUsersList, setUpdateUsersList] = useState();
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const promisse = getUsers();
                const data = await promisse
                setUsersData(data)
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, [updateUsersList]);

    const handleSituation = async (e, userId) => {
        try {

            let newSituation;
            e.target.innerHTML === "Ativo"
                ? (newSituation = 0)
                : (newSituation = 1);

            const promise = changeSituation(userId, newSituation).then(() => {
                setUsersData((state) =>
                    state.map((user) => ({
                        ...user,
                        situation: +user.id === userId ? !user.situation : user.situation,
                    }))
                );
                setUpdateUsersList(!updateUsersList)
            });

            toast.promise(promise, {
                loading: 'Trocando situação...',
                success: 'Situação trocada',
                error: 'Erro ao cadastrar um usuário',
            });

        } catch (error) {

        }
    };

    return (
        <>
            <ManagementHeader
                title="Gerenciar usuários"
                subTitle="Gerenciamento / Usuários"
            />
            <section className='mt-8'>
                <Tabs defaultValue="view">
                    <TabsList>
                        <TabsTrigger value="view">Visualizar</TabsTrigger>
                        <TabsTrigger value="register">Cadastrar</TabsTrigger>
                    </TabsList>
                    <TabsContent value="view">
                        <ListUsers
                            usersData={usersData}
                            handleSituation={handleSituation}
                        />
                    </TabsContent>
                    <TabsContent value="register">
                        <RegisterUser
                            usersData={usersData}
                            updateUsersList={updateUsersList}
                            setUpdateUsersList={setUpdateUsersList}
                        />
                    </TabsContent>
                </Tabs>
            </section>
        </>
    )
}

export default Users