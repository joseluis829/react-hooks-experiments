import React from "react";
import { headerDefaultStyle, rowDefaultStyle } from "./styles";

const Table = props => {
    return (
        <div style={headerDefaultStyle}>
            {props.data.map((row, i) =>
                Object.keys(row).map((key, j) => (
                    <span key={`${i}_${j}`} style={rowDefaultStyle}>
                        {row[key]}
                    </span>
                ))
            )}
        </div>
    );
};

export default Table;
