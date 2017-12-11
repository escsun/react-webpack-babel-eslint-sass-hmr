import * as React from "react";

import "./index.scss";

import Nav from "../Nav";

const Layout = (props) => {
    return (
        <>
            <Nav />
            <div>
                {props.children}
            </div>
        </>
    );
};

export default Layout;
