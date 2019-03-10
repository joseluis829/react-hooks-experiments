import React, { useState, useEffect } from "react";
import Table from "../Components/Table/Table";
import { styleReportContainer } from "./styles";

const Report = () => {
    const [comments, updateComments] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(response => {
                const json = response.json();
                return json;
            })
            .then(data => {
                updateComments(data);
            })
            .catch(() => {
                console.log("error");
            });
    }, []);

    return (
        <div style={styleReportContainer}>
            <Table data={comments} />
        </div>
    );
};

export default Report;
