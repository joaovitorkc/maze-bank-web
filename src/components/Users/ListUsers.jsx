import React from 'react'
import { Link } from 'react-router-dom';

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

// Libs
import { formatters } from '@/lib/formaters';

const ListUsers = ({
    usersData,
    handleSituation,
}) => {
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
                                <TableHead className="text-sm font-normal text-slate-700 text-start px-3 py-1.5">Nome completo</TableHead>
                                <TableHead className="text-sm font-normal text-slate-700 text-start px-3 py-1.5">CPF</TableHead>
                                <TableHead className="text-sm font-normal text-slate-700 text-start px-3 py-1.5">Telefone</TableHead>
                                <TableHead className="text-sm font-normal text-slate-700 text-start px-3 py-1.5">Criado em</TableHead>
                                <TableHead className="text-sm font-normal text-slate-700 text-start px-3 py-1.5">Situação</TableHead>
                                <TableHead className="text-sm font-normal text-slate-700 text-start px-3 py-1.5"></TableHead>
                            </TableRow>
                        </TableHeader>
                        {usersData.length > 0 ? (
                            <TableBody className="uppercase">
                                {usersData.map((item) => (
                                    <TableRow
                                        key={item.id}
                                        className="border-t h-16"
                                    >
                                        <TableCell className="text-slate-700 px-3 py-1.5 border-t">
                                            {item.name}
                                        </TableCell>
                                        <TableCell className="text-slate-700 px-3 py-1.5 border-t">
                                            {
                                                formatters.cpf(item.cpf)
                                            }
                                        </TableCell>
                                        <TableCell className="text-slate-700 px-3 py-1.5 border-t">
                                            {
                                                formatters.phone(item.phone)
                                            }
                                        </TableCell>
                                        <TableCell className="text-slate-700 px-3 py-1.5 border-t">
                                            {new Date(item.created_at).toLocaleDateString('pt-BR')}
                                        </TableCell>

                                        <TableCell
                                            className="text-slate-700 px-3 py-1.5 border-t"
                                        >
                                            {item.situation === 1 ? (
                                                <button className="flex items-center gap-1 px-2 py-0.5 rounded bg-green-500">
                                                    <span
                                                        className="text-sm text-white"
                                                        onClick={(e) => {
                                                            item.situation = 0;
                                                            handleSituation(e, item.id);
                                                        }}
                                                    >
                                                        Ativo
                                                    </span>
                                                </button>
                                            ) : (
                                                <button className="flex items-center gap-1 px-2 py-0.5 rounded bg-red-500">
                                                    <span
                                                        className="text-sm text-white"
                                                        onClick={(e) => {
                                                            item.active = 1;
                                                            handleSituation(e, item.id);
                                                        }}
                                                    >
                                                        Inativo
                                                    </span>
                                                </button>
                                            )}


                                        </TableCell>
                                        <TableCell
                                            className="text-slate-700 px-3 py-1.5 border-t"
                                        >
                                            <Link
                                                to={`/gerenciar-usuarios/editar/${item.id}`}
                                                className="text-sm normal-case w-max text-white flex items-center gap-1 px-2 py-0.5 rounded bg-green-600"
                                                onClick={(e) => {
                                                    if (item.id === userId) {
                                                        e.preventDefault();
                                                        toast.error("Você não pode alterar seu propio usuário.");
                                                    }
                                                }}
                                            >
                                                <button className="flex items-center gap-1 px-2 py-0.5 rounded bg-green-600">

                                                    Editar informações

                                                </button>
                                            </Link>
                                        </TableCell>

                                    </TableRow>
                                ))}
                                {
                                    Array.from({ length: 10 - usersData.length }, (_, index) => (
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

export default ListUsers