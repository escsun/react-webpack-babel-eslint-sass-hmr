import * as React from "react";

import {NavLink} from "react-router-dom";

import "./index.scss";

const Nav = () => {
    return (
        <nav className="_nav">
            <ul>
                <li>
                    <NavLink exact to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
