import React from "react";

function ErrorDemo(props) {
    if (props.name != "Rahul") {
        throw new Error("There is an Error!");
    }

    return <div>{props.name}</div>;
}

export default ErrorDemo;