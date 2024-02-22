// React
import { useState, useEffect, useCallback, useContext } from "react";

// React router
import { useParams, useSearchParams, Link, useNavigate } from "react-router-dom";

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
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import InfoGuests from "./InfoGuests";

// Icons
import {
  ArrowLeftFromLine,
  Bell,
  XCircle,
  AlertTriangle,
  User,
  PersonStanding,
} from "lucide-react";
import { Skeleton } from "../../ui/skeleton";

// Toast
import { toast } from "sonner";

const DashBoardFooter = ({ updateNotifications }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [notificationsData, setNotificationsData] = useState([]);
  const [userId, setUserId] = useState(
    localStorage.getItem("id")
  );
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full mt-auto">
      <div className="px-3 py-2 relative flex flex-col mt-auto">
        <div className="flex flex-col gap-2 px-6 py-6 border-t border-slate-300">
          <div className="flex items-center gap-2">
            {isLoading === false ? (
              <>
                <span className="relative flex w-10 h-10 overflow-hidden rounded-lg shrink-0">
                  <span className="flex items-center justify-center w-full h-full font-mono text-xl rounded-lg bg-slate-200 text-slate-700">
                    <User />
                  </span>
                </span>
                <div className="flex flex-col flex-grow">
                  <span className="text-sm truncate uppercase">
                    João Vitor
                  </span>
                  <span className="text-xs uppercase">Gerente</span>
                </div>
              </>
            ) : (
              <>
                <span className="relative flex w-10 h-10 overflow-hidden rounded-lg shrink-0">
                  <span className="flex items-center justify-center w-full h-full font-mono text-xl rounded-lg bg-slate-200 text-slate-700">
                    <Skeleton className="h-12 w-12 rounded-full bg-gray-300" />
                  </span>
                </span>
                <div className="flex flex-col flex-grow">
                  <Skeleton className="h-4 w-[150px] bg-gray-300" />
                  <Skeleton className="h-3 mt-1 w-[120px] bg-gray-300" />
                </div>
              </>
            )}

          </div>

          <div className="flex items-center justify-between">
            <Link
              className="flex items-center justify-center w-[75%] h-[38,9px] border rounded-lg hover:opacity-75 transition-opacity disabled:!opacity-60 disabled:cursor-not-allowed bg-transparent text-slate-700 border-slate-300 text-sm gap-2 px-3 py-2"
              to={`/perfil/${userId}`}
            >
              Perfil
            </Link>
            <Button
              className="hover:bg-transparent flex items-center justify-center w-[20%] border rounded-lg hover:opacity-75 transition-opacity disabled:!opacity-60 disabled:cursor-not-allowed bg-transparent border-slate-300 text-sm gap-2 px-3 py-2 text-red-500"
              onClick={(e) => {
                e.preventDefault()
                localStorage.clear()
                navigate('/login');
              }}
            >
              <ArrowLeftFromLine className="mr-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardFooter;
