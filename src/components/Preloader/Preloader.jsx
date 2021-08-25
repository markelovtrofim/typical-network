import downloadAnimation from "../../assets/img/downoad-animation.svg";
import glImg from "../../assets/img/gl.svg";
import React from "react";

let Preloader = (props) => {
    return <div>
        {props.isFetching ? <img width={props.width} src={downloadAnimation} alt=""/>
            : <img width={props.width} src={glImg} alt=""/>}
    </div>
};

export default Preloader;
