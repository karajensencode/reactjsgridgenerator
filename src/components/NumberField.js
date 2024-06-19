import { forwardRef } from "react";

const NumberField = forwardRef((props, ref) => {

    const numberFieldStyle = {
        paddingBottom: "10px"
    };

    const labelStyle = {
        display: "inline-block",
        paddingRight: "5px",
        textAlign: "left",
        width: "150px"
    }

    const inputStyle = {
        width: "50px"
    }

  return (
    <>
        <div style={numberFieldStyle}>
            <label 
                className="field" 
                style={labelStyle} 
            >
                {props.label}
            </label>
            <input
                type="number" 
                min="1"
                max="50"
                ref={ref}
                style={inputStyle}
                data-required="true"
                required
            />
        </div>
    </>
  );
});

export default NumberField;
