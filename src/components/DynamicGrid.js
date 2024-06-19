import { useContext, useRef, useEffect } from "react"; //useState
//import DynamicCell from "./DynamicCell";
//import { useTable, useSortBy, useFilters } from "react-table"; - Uee Later
import { GridContext } from "../context/context";

const DynamicGrid = (props) => {
  const grid = useContext(GridContext);

  useEffect(() => {
    console.log("DynamicGrid Grid", grid);//   console.log("DynamicGrid props", props);
  });

  const gridStyle = useRef( {
    color: "grey",
    backgroundColor: "white",
    fontFamily: "Arial",
    position: "absolute",
    zIndex: `${props.z}`,
  });

  const cellStyle = {
    backgroundColor: "white",
    border: "1px solid darkGrey",
    padding: "20px",
  };

  const tableStyle = {
    verticalAlign: 'middle',
    display: 'flex',
    alignContent: 'flex-start',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    flexDirection: 'row',
    //Preiously Added
    border: "1px solid black",
  }

  const Columns = () => {
    return props.columns.map((item, idx) => (
        <td  key={idx} style={cellStyle}></td>
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

    gridStyle.left.current.value = mousePosition.x;
    gridStyle.top.current.value = mousePosition.y;
  };

  const onAuxClickCapture = (e) => {
    e.preventDefault();
    console.log('onAuxClickCapture');
  };

  const onMouseClick = (e) => {
    e.preventDefault();
    console.log('onMouseClick');
  };

  return (
    <>
      <div
        key={props.idx}
        style={gridStyle}
        id={`grid-${props.idx}`}
        onClick={onMouseClick}
        onMouseDown={moveOnMouseDown}
        onAuxClickCapture={onAuxClickCapture}
      >
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