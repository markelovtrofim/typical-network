import React from 'react';
import LogoIconImg from "../../assets/img/tn-logo.png";

type LogoIconPropsType = {
  width: number
  height: number
}
export const LogoIcon: React.FC<LogoIconPropsType> = ({width, height}) => {
  return (
    <div>
      <img src={LogoIconImg} width={width} height={height} alt=""/>
    </div>
  );
};
