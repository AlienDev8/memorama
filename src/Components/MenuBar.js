// import menubarCss from '../assets/MenuBar.module.css';

import { useEffect, useState } from "react";

const MenuBar = (props) => {
    
    console.log("Update menubar!");
    console.log(props.adivinadas);
        
    return (
        <div>
            {/* <div>contador:{adivinadas.length}</div> */}
            <div>contador:0</div>
        </div>
    )
}

export default MenuBar;