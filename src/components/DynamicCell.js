import { useId, useEffect } from 'react';


const DynamicCell = (props) => {
    const cellStyle = {
        backgroundColor: "white",
        border: "1px solid darkGrey",
        padding: "20px",
    };

    useEffect(()  => {
        console.log(props);
    });

    const Columns = () => {
        return props.columns.map((item, idx) => ( 
            <td key={idx} style={cellStyle}></td>
            // {idx + props.rows.length}
        ));
      };

    return(
        <Columns />
    )
};
export default DynamicCell;