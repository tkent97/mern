import React, { useState } from "react";

const Boxes = ({ boxes }) => {

    return (
        <div style={{
            backgroundColor: boxes.color,
            height: "100px",
            width: "100px",
            display: "inline-block"
        }}>
            {boxes.color}
        </div>
    )
}


export default Boxes;