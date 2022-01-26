import React from 'react';
import {SideMenu} from "./components/SideMenu";

type LayoutPropsType = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutPropsType> = ({children}) => {
  return (
    <div style={{display: 'flex'}}>
      <SideMenu/>
      {children}
    </div>
  );
};

export default Layout;
