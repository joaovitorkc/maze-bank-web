// React
import React, { useEffect, useState } from 'react'

// Components
import ListPayments from '@/components/Payments/ListPayments';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ManagementHeader from '@/components/Management/ManagementHeader';

// Services
import { getPayments } from '@/services/payments';

const Payments = () => {
  const [updateUserList, setUpdateUserlist] = useState();
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promisse = getPayments();
        const data = await promisse
        setUsersData(data)
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [updateUserList])

  return (
    <>
      <ManagementHeader
        title="Gerenciar pagamentos"
        subTitle="Gerenciamento / Pagamentos"
      />
      <section className='mt-8'>
        <Tabs defaultValue="view">
          <TabsList>
            <TabsTrigger value="view">Visualizar</TabsTrigger>
          </TabsList>
          <TabsContent value="view">
            <ListPayments usersData={usersData} />
          </TabsContent>
        </Tabs>
      </section>
    </>
  )
}

export default Payments