import { useRef, useEffect } from "react";

const UsePrevious = (props) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = props.value;
  }, [props.value]);
  return ref.current;
};

export default UsePrevious;
