import React from 'react';
import {Main} from './components/Main';
import {inject, observer} from "mobx-react";
import { TableStore } from './store/table.store';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";

interface AppProps {
    tableStore?: TableStore
}

export const App = inject('tableStore')(observer(({tableStore}: AppProps) => {

    return (
        <div className="wrapper">
            <Header/>
            <Main/>
            <Footer/>
        </div>


    );
}));

export default App;
