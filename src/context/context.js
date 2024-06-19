import { createContext, useState, useRef } from 'react';

    const FormContext = createContext({});
    const TableContext = createContext({});
    const GridsContext = createContext({});
    const GridContext = createContext({});

    const FormProvider = ({ children }) => {
        const rows = useRef();
        const columns = useRef();
        const [isPathAvailable, setIsPathAvailable] = useState(false);

        return (
            <FormContext.Provider value={{
                isPathAvailable, setIsPathAvailable,
                rows, columns
            }}>
                {children}
            </FormContext.Provider>
        );
    };

    const TableProvider = ({ children }) => {
        const table = {
            idx: 1,
            rows: [],
            columns: [],
            top: true,
            div: -1
        };
        return (
            <TableContext.Provider value={{ table }}>{children}</TableContext.Provider>
        );

    };

    const GridsProvider = ({ children }) => {
        const [count, setCount] = useState(1);
        const [isPathAvailable, setIsPathAvailable] = useState(false);
        const [grids, setGrids] = useState([]);

        return (
            <GridsContext.Provider value={{
                count, setCount,
                isPathAvailable, setIsPathAvailable,
                grids, setGrids,
            }}>
            {children}
            </GridsContext.Provider>
        );
    };

    const GridProvider = ({ children }) => {
        const [count, setCount] = useState(1);
        const [isPathAvailable, setIsPathAvailable] = useState(false);
        const [grids, setGrids] = useState([]);

        return (
            <GridContext.Provider value={{
                count, setCount,
                isPathAvailable, setIsPathAvailable,
                grids, setGrids
            }}>
            {children}
            </GridContext.Provider>
        );
};

export {
    FormProvider, FormContext,
    TableProvider, TableContext,
    GridsProvider, GridsContext,
    GridProvider, GridContext
};