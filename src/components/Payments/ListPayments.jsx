import React from 'react'

// Components
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
    TableRow,
    TableBody,
    TableCell,
    Table,
    TableHeader,
    TableHead,
} from "@/components/ui/table";

// Icons
import { Filter } from 'lucide-react';

const ListPayments = ({ paymentsData }) => {
    return (
        <>
            <div className="w-full">
                <div className="flex items-center py-4">
                    <Input
                        placeholder="Pesquisar..."
                        className="max-w-64"
                        // onKeyDown={handleSearch}
                        disabled
                    />
                    <DropdownMenu>
                        <Button className="ml-auto" variant="outline" disabled>
                            <Filter className="h5 w-5 text-slate-800" />
                        </Button>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Filtros</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioGroup value="0">
                                <DropdownMenuRadioItem value="0">Nenhum</DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                            <DropdownMenuRadioGroup value="0">
                                <DropdownMenuRadioItem value="1">Nome</DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className="rounded-md border">
                    <Table>
                        <TableHeader className="bg-slate-50">
                            <TableRow>
                                <TableHead className="text-sm font-normal text-slate-700 text-start px-3 py-1.5">
                                    Transação
                                </TableHead>
                                <TableHead className="text-sm font-normal text-slate-700 text-start px-3 py-1.5">
                                    Status
                                </TableHead>
                                <TableHead className="text-sm font-normal text-slate-700 text-start px-3 py-1.5">
                                    Metodo
                                </TableHead>
                                <TableHead className="text-sm font-normal text-slate-700 text-start px-3 py-1.5">
                                    Quantia
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        {paymentsData.length > 0 ? (
                            <TableBody className="uppercase">
                                {paymentsData.map((item) => (
                                    <TableRow key={item?.id} className="border-t h-16">
                                        <TableCell className="text-slate-700 px-3 py-1.5 border-t">
                                            {item.transation_code}
                                        </TableCell>
                                        <TableCell className="text-slate-700 px-3 py-1.5 border-t">
                                            {item.status}
                                        </TableCell>
                                        <TableCell className="text-slate-700 px-3 py-1.5 border-t">
                                            {item.method}
                                        </TableCell>
                                        <TableCell className="text-slate-700 px-3 py-1.5 border-t">
                                            {
                                                "R$"
                                                +
                                                item?.amount
                                                    .replace('.', ',')
                                                    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
                                            }
                                        </TableCell>
                                    </TableRow>
                                ))}
                                {
                                    Array.from({ length: 10 - paymentsData.length }, (_, index) => (
                                        <TableRow key={index} className="border-t h-16">
                                            <TableCell
                                                colSpan={12}
                                                className="h-[2px] text-center border-t bg-slate-100"
                                            ></TableCell>
                                        </TableRow>

                                    ))
                                }
                            </TableBody>
                        ) : (
                            <TableBody>
                                {
                                    Array.from({ length: 10 }, (_, index) => (
                                        <TableRow key={index} className="border-t h-16">
                                            <TableCell
                                                colSpan={12}
                                                className="h-[2px] text-center border-t bg-slate-100"
                                            ></TableCell>
                                        </TableRow>

                                    ))
                                }
                            </TableBody>
                        )}
                    </Table>
                </div>
            </div>

        </>
    )
}

export default ListPayments