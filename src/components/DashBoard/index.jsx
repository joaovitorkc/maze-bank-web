// React
import { useState, useEffect, useCallback, useRef } from 'react';

// React router
import { useParams, useSearchParams, Link, Outlet, useLocation } from 'react-router-dom';

// Styles
import './DashBoard.css';

// Hooks

// Components
import { ScrollArea } from '@/components/ui/scroll-area';
import DashBoardFooter from '@/components/DashBoard/DashBoardFooter';
import DashBoardItems from '@/components/DashBoard/DashBoardItems';

import { Menu } from 'lucide-react';

const DashBoard = ({updateNotifications}) => {

  const [collapsed, setCollapsed] = useState(true);
  const [screenResponsive, setScreenResponsive] = useState(false)

  const { innerWidth: width, innerHeight: height } = window;


  useEffect(() => {
    { innerWidth >= 900 && setScreenResponsive(false) }
  }, [innerWidth])

  const handleMenu = () => {
    setCollapsed(!collapsed)
    setScreenResponsive(!screenResponsive)
  }

  return (
    <div className="flex min-h-screen bg-white">
      <div
        id={collapsed ? "collapsed" : undefined}
        className={screenResponsive ? (
          "z-10 top-0 flex flex-col w-full fixed h-screen max-w-xs border-r border-slate-300 bg-slate-50"
        ) : (
          "sticky z-10 top-0 flex flex-col w-full h-screen max-w-xs border-r border-slate-300 bg-slate-50"
        )}>

        <ScrollArea 
        id="ScrollAreaDashBoard"
        className="pt-4 h-full">
          <button
            id="menuButtom"
            className='w-7 h-7 mb-2 p-8 '
            onClick={(() => handleMenu())}
          >
            <Menu
              className='w-7 h-7'
            />
          </button>
          <DashBoardItems />
        </ScrollArea>

        <DashBoardFooter updateNotifications={updateNotifications} />
      </div>
      <main className='flex flex-col w-full p-8 z-[1]'>

        <button
          id="menuButtom"
          className='w-7 h-7 mb-2'
          onClick={(() => handleMenu())}
        >
          <Menu
            className='w-7 h-7'
          />
        </button>

        <Outlet />
      </main>
    </ div>
  )
}

export default DashBoard