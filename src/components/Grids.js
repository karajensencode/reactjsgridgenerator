import { useContext, useEffect, useCallback, useReducer  } from "react"; //useCallback, useEffect
import { TableContext, FormContext, GridsContext  } from "../context/context";
import DynamicGrid from "./DynamicGrid";


const reducer = (state, action) => {
  if (action.type === 'incremented_age') {
    return {
      age: state.age + 1
    };
  }
  throw Error('Unknown action.');
};

const Grids = ({ formButtonClicked, setFormButtonClicked, gridList, setGridList}) => {
    const { table } = useContext(TableContext);
    const { rows, columns } = useContext(FormContext);
    const { grids, count, setCount } = useContext(GridsContext);
    const [ state, dispatch ] = useReducer(reducer, { age: 42 });



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
            <button onClick={() => {
                dispatch({ type: 'incremented_age' })
            }}>
                Increment age
            </button>
            <p>Hello! You are {state.age}.</p>
            {grids
                //.reduce(grid => grid.there)
                //.filter(grid => grid.top)
                .map((item, idx) => (
                    <DynamicGrid
                        key={idx} idx={idx} z={item.div}
                        rows={item.rows} columns={item.columns}
                    />
                ))}
        </>

    )
}


export default Grids;