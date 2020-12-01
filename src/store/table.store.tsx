import {action, makeObservable, observable} from "mobx";

export interface TableItem {
    name: string,
    description: string,
    id: number,
    url: string
}

export class TableStore {
    tableData: TableItem[] = [];

    constructor() {
        makeObservable(this, {
            tableData: observable,
            addTableData: action
        })
    }

    addTableData(data: TableItem[]) {
        this.tableData = data
    }
}