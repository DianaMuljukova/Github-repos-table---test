import React, {useEffect, useState} from "react";
import {inject, observer} from "mobx-react";
import {TableStore} from "../store/table.store";
import '../style/style.scss';
import { Table } from "./Table";
import {Loader} from "./Loader";

interface TableProps {
    tableStore?: TableStore
}

export const Main = inject('tableStore')(observer(({tableStore}: TableProps) => {
    const [isError, toggleIsError] = useState(false);
    const [isLoading, toggleIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            toggleIsLoading(true);
            const user = 'DianaMuljukova';
            let response = await fetch(`https://api.github.com/users/${user}/repos`);
            if (response.status === 200) {
                let result = await response.json();
                tableStore?.addTableData(result)
            } else {
                toggleIsError(true);
            }
            toggleIsLoading(false);
        };
        fetchData();
    }, [tableStore]);

    const keys: string[] = ['id', 'name', 'description', 'url'];

    const sortBy = (key: string) => {
        let dataCopy = tableStore?.tableData ? [...tableStore?.tableData] : [];
        dataCopy.sort((a: any, b: any) => {
            if(a[key] === "" || a[key] === null) return 1;
            if(b[key] === "" || b[key] === null) return -1;
            if (a[key] < b[key]) return -1;
            if (a[key] > b[key]) return 1;
            return 0;
        });
        tableStore?.addTableData(dataCopy);
    };

    return  (

        <main className="main">
            {
                isError ?
                    <span>Произошла ошибка. Перезагрузите страницу.</span> :
                    isLoading ?
                        <Loader/> :
                        <Table keys={keys} list={tableStore?.tableData || []} sortBy={sortBy}/>
            }
        </main>

    )
}));