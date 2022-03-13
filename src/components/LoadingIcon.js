import React from "react";
import {Spinner} from "react-bootstrap";

const LoadingIcon = () => {
    return (
        <Spinner style={{display: "block", marginRight: "auto", marginLeft: "auto", width: "2em", height: "2em"}}
                 animation="border"
                 variant="primary"/>
    );
};

export default LoadingIcon;