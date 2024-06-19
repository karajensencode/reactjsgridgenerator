import { useContext, useEffect } from 'react';

import NumberField from './NumberField';
import { GridContext, FormContext } from '../context/context';


const Form = ({ setFormButtonClicked }) => {
    const { rows, columns, isPathAvailable, setIsPathAvailable } = useContext(FormContext);
    const { setGrids } = useContext(GridContext);

    const generate = (e) => {
        e.preventDefault();
        setFormButtonClicked(true);
    }

    const reset = () => {
        setGrids([]);
        setIsPathAvailable(false);
    };

    const path = (e) => {
        e.preventDefault();
        console.log(`When a user clicks a “find path” button, the shortest path from the starting cell to the end cell, while avoiding block cells, is highlighted in the grid.`);
        if(!isPathAvailable) {
            console.log('There is no possible path!')
        }
    };

    useEffect(() => {
        //console.log('Form Rows', rows);
        //console.log('Form Columns', columns);
    });

    return (
        <>
            <form onSubmit={generate}>
                <NumberField label={"Height"} ref={rows} />
                <NumberField label={"Width"} ref={columns} />
                <button type="submit">Generate Grid</button>
                <button type="button" onClick={path}> Find Path</button>
                <button type="reset" onClick={reset}>Restart</button>
                <br />
            </form>
        </>
    )
};

export default Form;