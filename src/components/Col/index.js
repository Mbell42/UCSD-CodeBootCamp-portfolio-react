import React from "react";

function Row(props) {
    return <div classname = {`row${props.fuid ? "-fluid" : ""}`} {...props} />;
}

export default Row;