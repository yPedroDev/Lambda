import React from "react";

const Footer = React.lazy(() => import("../footer/Footer"));

const Bottom = () => {
    return (
        <>
            <Footer/>
        </>
    )
}

export default Bottom;