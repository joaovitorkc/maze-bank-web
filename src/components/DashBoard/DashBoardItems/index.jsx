// React
import { useState, useEffect, useCallback, useContext } from 'react';

// React router
import { useParams, useSearchParams, Link, useLocation } from 'react-router-dom';

// Icons

// Components
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

// Icons
import {
  Users,
  Briefcase,
  PersonStanding,
  ChevronDown,
  Pill,
  Boxes,
  Banknote
} from 'lucide-react';

const DashBoardItems = () => {
  const [actualPage, setActualPage] = useState();

  let location = useLocation();

  useEffect(() => {
    const isPaymentRoute = location.pathname.startsWith("/gerenciar-pagamentos");

    if (isPaymentRoute) {
      setActualPage("/gerenciar-pagamentos");
    } else {
      setActualPage(false);
    }
  }, [location.pathname]);


  return (
    <>
      <div className="px-3 py-2">
        <div className="flex items-center justify-center">
          {/* Logo */}
          <div className="animate-pulse rounded-md w-[250px] h-[150px] bg-gray-300"></div>
        </div>
      </div>
      <div className="px-3 py-2">
        <Collapsible >
          <CollapsibleTrigger className='flex items-center mb-4 text-gray-700'>
            <h2 className="px-4 tracking-tight text-gray-700">Gerenciamento</h2>
            <ChevronDown className='ml-32 h-4 w-4' />
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="space-y-1">
              <Link to="/gerenciar-pagamentos">
                <Button
                  variant={actualPage === "/gerenciar-pagamentos" || actualPage === "/gerenciar-pagamentos/:id" ? "secondary" : "ghost"}
                  className="w-full justify-start text-gray-700 text-base">
                  <Banknote className='mr-2 h-4 w-4' />
                  Pagamentos
                </Button>
              </Link>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </>
  )
}

export default DashBoardItems