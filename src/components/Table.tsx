import React from "react";
import { generate } from 'shortid';

interface Props<T> {
    list: T[],
    keys: string[],
    sortBy: (key: string) => void
}

export const Table = <T extends {[key: string]: any}>({list, keys, sortBy}: Props<T>) => {
    return (
        <div className="table">
            <div className="table__header">
                {
                    keys.map((data, i) => {
                        return <div className="table__header-item" onClick={() => sortBy(data)} key={generate()}>{data}</div>})
                }
            </div>
            <div className="table__body">
                { list.map( (item, i) => <div className="table__row" key={generate()}>
                        {keys.map((key, index) => <div className="table__body-item" key={generate()}>{item[key]}</div>)}
                    </div>) }
            </div>
        </div>
    )
};

