import { useContext, useEffect, useCallback  } from "react"; //useCallback, useEffect
import { TableContext, FormContext, GridContext  } from "../context/context";
import DynamicGrid from "./DynamicGrid";

const Grids = ({ formButtonClicked, setFormButtonClicked, gridList, setGridList}) => {
    const { table } = useContext(TableContext);
    const { rows, columns } = useContext(FormContext);
    const { grids, setGrids, count, setCount } = useContext(GridContext);

    const updateGridRows = () => {
        for (let i = 0; i < rows.current.value; i++) {
            table.rows.push({});
        }
        return table.rows;
    };

    const updateGridColumns = () => {
        for (let i = 0; i < columns.current.value; i++) {
            table.columns.push({});
        }
        return table.columns;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const createGrid = () => {
        setCount(count + 1);
        updateGridRows();
        updateGridColumns();
        table.div = !table.top ? (count - (-1)) : 10000000;
        return table;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const addToListOfGrids = () => {
        grids.forEach((item, index) => {
            if((index + 1) < grids.length) {
                console.log(item);
                item.top = false;
            }
        });
        grids.push(table);
        return grids;
    };

     // eslint-disable-next-line react-hooks/exhaustive-deps
    const updateGridListReference = () => {
        setGridList({ count: count, isPathAvailable: true, grids: grids });
    }

    const manufactureGrid = useCallback((buttonClicked, table, grids) => {
        if (buttonClicked) {
            createGrid();
            if (grids.length > 1) addToListOfGrids();
            else grids.push(table);
            setFormButtonClicked(false);
            updateGridListReference();
        }
    }, [setFormButtonClicked, addToListOfGrids ,createGrid, updateGridListReference]);


    useEffect(() => {
        manufactureGrid(formButtonClicked, table, grids);
    },);

    return (
        <>
            ({grids
                //.reduce(grid => grid.there)
                //.filter(grid => grid.top)
                .map((item, idx) => (
                    <DynamicGrid
                        key={idx} idx={idx} z={item.div}
                        rows={item.rows} columns={item.columns}
                    />
                ))})
        </>

    )
}


export default Grids;