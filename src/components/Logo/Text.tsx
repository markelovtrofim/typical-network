import React from 'react';
import cs from 'classnames';
import {makeStyles} from "@mui/styles";

type LogoPropsType = {
  size: number
  position: 'left' | 'center' | 'right'
  margin: string
};

const useStylesLogo = makeStyles(({
  logo: {
    cursor: 'default',
    display: 'flex',
    justifyContent: (props: LogoPropsType) => props.position,
    textDecoration: 'none',
    fontFamily: 'Breda',
    margin: (props: LogoPropsType) => props.margin,
  },
  bothSide: {
    fontSize: (props: LogoPropsType) => `${props.size}px`
  },
  logoLeft: {
    color: '#ffffff',
    marginRight: '7px'
  },
  logoRight: {
    color: '#2f92e1'
  }
}));

export const LogoText: React.FC<LogoPropsType> = (props) => {
  const classes = useStylesLogo(props);
  return (
    <div className={classes.logo}>
      <h1 className={cs(classes.bothSide, classes.logoLeft)}>
        TYPICAL
      </h1>
      <h1 className={cs(classes.bothSide, classes.logoRight)}>
        NETWORK
      </h1>
    </div>
  )
};