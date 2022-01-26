import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import NotificationIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MessageIcon from '@material-ui/icons/EmailOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import UserIcon from '@material-ui/icons/PermIdentityOutlined';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import {makeStyles} from "@mui/styles";
import theme from "../theme";
import {LogoIcon} from "./Logo/Icon";

const useStyles = makeStyles(({
  logo: {
    margin: '10px 0',
  },
  logoIcon: {
    fontSize: 36,
  },
  sideMenuList: {
    position: 'sticky',
    top: 0,
    listStyle: 'none',
    padding: 0,
    margin: 0,
    maxWidth: 230,
  },
  sideMenuListItem: {
    '& a': {
      color: 'inherit',
      textDecoration: 'none',
    },
    cursor: 'pointer',
    '&:hover': {
      '& div': {
        backgroundColor: 'rgba(29, 161, 242, 0.1)',
        '& h6': {
          color: theme.palette.primary.main,
        },
        '& svg path': {
          fill: theme.palette.primary.main,
        },
      },
    },

    '& div': {
      display: 'inline-flex',
      alignItems: 'center',
      position: 'relative',
      padding: '0 25px 0 20px',
      borderRadius: 30,
      height: 50,
      marginBottom: 15,
      transition: 'background-color 0.1s ease-in-out',
    },
  },
  sideMenuListItemLabel: {
    fontWeight: 700,
    fontSize: 20,
    marginLeft: 15,
  },
  sideMenuListItemIcon: {
    fontSize: 32,
    marginLeft: -5,
  },
  sideMenuTweetButton: {
    padding: theme.spacing(3.2),
    marginTop: theme.spacing(2),
  }
}));


export const SideMenu: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <ul className={classes.sideMenuList}>
        <li>
          <Link to="/home">
            <IconButton className={classes.logo} aria-label="">
              <LogoIcon width={40} height={40}/>
            </IconButton>
          </Link>
        </li>
        <li className={classes.sideMenuListItem}>
          <Link to="/home">
            <div>
              <HomeIcon className={classes.sideMenuListItemIcon}/>
              <Hidden smDown>
                <Typography className={classes.sideMenuListItemLabel} variant="h6">
                  Главная
                </Typography>
              </Hidden>
            </div>
          </Link>
        </li>
        <li className={classes.sideMenuListItem}>
          <Link to={`/users`}>
            <div>
              <SearchIcon className={classes.sideMenuListItemIcon}/>
              <Hidden smDown>
                <Typography className={classes.sideMenuListItemLabel} variant="h6">
                  Поиск
                </Typography>
              </Hidden>
            </div>
          </Link>
        </li>
        <li className={classes.sideMenuListItem}>
          <Link to={`/music`}>
            <div>
              <NotificationIcon className={classes.sideMenuListItemIcon}/>
              <Hidden smDown>
                <Typography className={classes.sideMenuListItemLabel} variant="h6">
                  Музыка
                </Typography>
              </Hidden>
            </div>
          </Link>
        </li>
        <li className={classes.sideMenuListItem}>
          <Link to={`/messages`}>
            <div>
              <MessageIcon className={classes.sideMenuListItemIcon}/>
              <Hidden smDown>
                <Typography className={classes.sideMenuListItemLabel} variant="h6">
                  Сообщения
                </Typography>
              </Hidden>
            </div>
          </Link>
        </li>
        <li className={classes.sideMenuListItem}>
          <Link to={`/profile`}>
            <div>
              <UserIcon className={classes.sideMenuListItemIcon}/>
              <Hidden smDown>
                <Typography className={classes.sideMenuListItemLabel} variant="h6">
                  Профиль
                </Typography>
              </Hidden>
            </div>
          </Link>
        </li>
        <li className={classes.sideMenuListItem}>
          <Link to={`/settings`}>
            <div>
              <UserIcon className={classes.sideMenuListItemIcon}/>
              <Hidden smDown>
                <Typography className={classes.sideMenuListItemLabel} variant="h6">
                  Настройки
                </Typography>
              </Hidden>
            </div>
          </Link>
        </li>
      </ul>
    </>
  );
};
