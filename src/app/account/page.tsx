'use client'

import CustomTable, { IColumnConfig } from "@/components/custom-table";
import { useState, useEffect } from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import PageTitle, { ActionProps } from "@/components/page-title"; 
import { useRouter } from 'next/navigation'
import Card from "@/components/card";


export interface Account {
    name: string;
    type: string;
    amount?: number
}

export const getServerSideProps: GetServerSideProps<{
    accounts: Account[]
}> = async () => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const repo = await res.json()
    return { props: { accounts: repo } }
}

export default function Account({
    accounts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const router = useRouter();
    const [columns, setColumns] = useState<IColumnConfig[]>([]);
    const [rows, setRows] = useState<Account[]>([]);
    const [actionsPage, setActionsPage] = useState<ActionProps[]>([]);

    const addAccount = () => {
        router.push('/account/add', {})
    }

    useEffect(() => {
        setColumns([
            {
                title: 'Name',
                prop: 'name'
            },
            {
                title: 'Type',
                prop: 'type'
            },
            {
                title: 'Amount',
                prop: 'amount'
            }
        ])

        setRows([
            {
                name: 'Conta 001 sdfsdf sdf sdf ',
                type: 'Caixa',
                amount: 100.2
            },
            {
                name: 'Conta 002',
                type: 'Conta Corrente',
                amount: 1235.22
            },
            {
                name: 'Conta 023',
                type: 'Conta Poupança',
                amount: 43335.22
            }
        ]);

        setActionsPage([
            {
                name: 'Adicionar',
                icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>,
                action: addAccount
            }
        ])
    }, [])

    return (

        <>
            <PageTitle title="Conta" subTitle="Forneça as informações sobre a sua conta" actions={actionsPage} />
            <CustomTable columns={columns} rows={rows} />
        </>
    )
}