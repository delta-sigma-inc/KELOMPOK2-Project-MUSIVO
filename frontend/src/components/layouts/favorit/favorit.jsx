import { useState } from "react";
import NavigationBar from "../navigationBar.jsx/navigationBar";
import Sidebar from "../sidebar/sidebar";

const favorit = () => {
    return (
        <div className="flex">
            <Sidebar/>
            <div>
                <NavigationBar />
            </div>
        </div>
    );
};
export default favorit;