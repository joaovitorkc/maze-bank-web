// React
import React, { useEffect, useState } from 'react'

// Components
import ListUsers from '@/components/Users/ListUsers';
import RegisterUser from '@/components/Users/RegisterUser';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ManagementHeader from '@/components/Management/ManagementHeader';

// Services
import { getUsers } from '@/services/users';

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
    }, [updateUsersList])

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
                        <ListUsers usersData={usersData} />
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