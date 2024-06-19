import { useEffect } from "react"; //useState
//import DynamicCell from "./DynamicCell";

const DynamicGrid = (props) => {
  useEffect(() => {
    console.log(props);
  });

  const gridStyle = {
    color: "grey",
    backgroundColor: "white", 
    fontFamily: "Arial",
    position: "absolute",
    zIndex: `${props.z}`,
  };

  const cellStyle = {
    backgroundColor: "white",
    border: "1px solid darkGrey",
    padding: "20px",
};

  const tableStyle = {
    border: "1px solid black",
  }

  const Columns = () => {
    return props.columns.map((item, idx) => ( 
        <td 
            key={idx} 
            style={cellStyle}></td>
    ));
  };

  const Rows = () => {
    return props.rows.map((item, idx) => (
        <tr 
            key={idx}>
            {/* <DynamicCell props={props} /> */}
            <Columns />
        </tr>
    ));
  };

  const moveOnMouseDown = (e) => {
    e.preventDefault();
    const mousePosition = {
        x : e.clientX,
        y : e.clientY
    };

    gridStyle.left = mousePosition.x;
    gridStyle.top = mousePosition.y;
  };


  return (
    <>
        <div key={props.idx} style={gridStyle} id={`grid-${props.idx}`} onMouseDown={moveOnMouseDown}>
            <br />
                <p>{`Grid ${props.idx}`}</p>
                <table style={tableStyle}>
                <tbody>
                    <Rows />
                </tbody>
            </table>
        </div>
    </>
  );
};

export default DynamicGrid;