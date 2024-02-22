// React
import { useState, useEffect, useCallback } from 'react';

// React router
import { useParams, useSearchParams, Link } from 'react-router-dom';

// Hooks

// Components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Icons
import {
  ArrowLeftFromLine,
  Bell,
  XCircle,
  AlertTriangle,
  User,
  PersonStanding
} from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

const InfoGuests = ({ notificationsData }) => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="relative h-[49px] flex items-center justify-center scale-110">
          <Bell className="mr-2 h-4 w-4" />
          <span
            className="absolute top-0 right-0 mt-1 mr-1 text-[12px] bg-red-500 text-white w-[18px] h-[18px] rounded-full flex items-center justify-center"
          >
            {/* Ver quantas notificações tem */}
            {notificationsData.length <= 99 ? (
              notificationsData ? notificationsData.length : 0
            ) : (
              <>
                9
                <span className='scale-[115%]'>⁺
                </span>
              </>
            )}

          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64">
          <DropdownMenuLabel>Notificações</DropdownMenuLabel>

          <DropdownMenuSeparator />

          <ScrollArea style={{ height: '60vh' }}>
            {/* Adicionar uma notificação para cada medicamento */}
            {notificationsData && notificationsData.length > 0 ? (
              notificationsData.map((item, index) => (
                <DropdownMenuSub key={index}>
                  <DropdownMenuSubTrigger className="flex items-center">
                    {item.medicineDaysSupplied <= 5 ? (
                      <XCircle className='mr-2 h-4 w-4 text-red-600' />

                    ) : (
                      <AlertTriangle className='mr-2 h-4 w-4 text-yellow-500' />
                    )}

                    <div>
                      {/* Nome do medicamento */}
                      {item.medicineNameAlert}
                      {/* Nome do hóspede */}
                      <h5 className='text-[12px]'>{item.guestNameAlert}</h5>
                    </div>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <Link to={`/gerenciar-hospedes/fluxo/${item.guestIdAlert}`}>
                        <DropdownMenuItem>
                          <PersonStanding className="mr-2 h-4 w-4" />
                          <span>Ir para o hóspede</span>
                        </DropdownMenuItem>
                      </Link>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                  <DropdownMenuSeparator />
                </DropdownMenuSub>
              ))
            ) : (
              <DropdownMenuItem disabled>
                <span>Não há nada por aqui</span>
              </DropdownMenuItem>
            )}
          </ScrollArea>
        </DropdownMenuContent >
      </DropdownMenu >
    </>
  )
}

export default InfoGuests
