import React from 'react';
import {makeStyles} from '@mui/styles';
import cs from 'classnames';
import backgroundImg from '../../assets/img/background-intro.jpg'
import {LogoText} from "../../components/Logo/Text";
import {LogoIcon} from "../../components/Logo/Icon";
import Box from '@mui/material/Box';
import {styled} from '@mui/material/styles';
import Tooltip, {TooltipProps, tooltipClasses} from '@mui/material/Tooltip';
import TelegramIcon from '../../assets/img/snLIst/telegram.png';
import SpotifyIcon from '../../assets/img/snLIst/spotify.png';
import TwitterIcon from '../../assets/img/snLIst/twitter.png';
import {Button, Typography} from "@mui/material";
import AuthModalWindow from "./AuthModalWindow";
import {AuthDataType} from "../../types";

const useStyles = makeStyles(({
  wrapper: {
    height: '100vh',
    display: 'flex'
  },
  bothSide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '400px'
  },
  greetSide: {
    flex: '0 0 54%',
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
  },
  greetSideInner: {
    textAlign: 'center',
    width: '410px',
    lineHeight: '1.7em'
  },
  greetSideList: {
    marginTop: '40px',
    listStyle: 'none',
    display: 'flex',
    padding: '0',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  greetSideItem: {
    cursor: 'default',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    width: '95px',
    borderRadius: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0.2 )'
  },
  authSide: {
    flex: '0 0 46%'
  },
  authButtons: {
    textAlign: 'center',
  },
  logInButton: {
    width: '100%',
    marginBottom: '10px',
    borderRadius: '10px'
  },
  signUpButton: {
    color: '#2F92E1',
    fontSize: '12px'
  }
}));

export const Auth: React.FC = () => {
  // styles.
  const classes = useStyles();

  // auth window control.
  const [openAuthWindow, setOpenAuthWindow] = React.useState(false);
  const handleClickOpen = () => setOpenAuthWindow(true);
  const handleClose = () => setOpenAuthWindow(false);

  const socialNetworkArray = [
    {id: 1, name: 'Twitter', text: 'Твить, создавай и меняй профиль', img: TwitterIcon},
    {id: 2, name: 'Telegram', text: 'Общайся в общем чате', img: TelegramIcon},
    {id: 3, name: 'Spotify', text: 'Слушай и добовляй музыку', img: SpotifyIcon}
  ];

  const BootstrapTooltip = styled(({className, ...props}: TooltipProps) => (
    <Tooltip {...props} arrow classes={{popper: className}}/>
  ))(({theme}) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
      fontSize: '14px'
    },
  }));

  return (
    <div className={classes.wrapper}>

      {/* Левый приветственный блок. */}
      <section className={cs(classes.bothSide, classes.greetSide)}>
        <div className={classes.greetSideInner}>
          <LogoText size={50} position={'center'} margin={'0 0 40px 0'}/>
          <Typography>
            - веб приложение, представляющее
            большинство функций из самых популярных
            социальных сетей нашей планеты
          </Typography>
          <ul className={classes.greetSideList}>
            {socialNetworkArray.map(sn =>
              <li key={sn.id}><Tooltip className={classes.greetSideItem} title={sn.text} followCursor>
                <Box sx={{bgcolor: 'text.disabled', color: 'background.paper', p: 2}}>
                  <img style={{marginRight: '10px'}} src={sn.img} width={24} height={24} alt={sn.name}/>
                  <Typography>{sn.name}</Typography>
                </Box>
              </Tooltip></li>)}
          </ul>
        </div>
      </section>

      {/* Правый блок авторизации. */}
      <section className={cs(classes.bothSide, classes.authSide)}>
        <div>
          <LogoIcon width={40} height={40}/>
          <Typography sx={{fontWeight: 'bold', m: 1}} style={{margin: '20px 0 0 0'}} variant='h2'>
            Happening now
          </Typography>
          <Typography style={{margin: '20px 0 '}}>Happening now</Typography>
          <div className={classes.authButtons}>
            <Button className={classes.logInButton} onClick={() => handleClickOpen()} color="primary"
                    variant="contained">Войти</Button><br/>
            <BootstrapTooltip title="Для регистрации тебе нужно перейти перейти в другое приложение.">
              <Button className={classes.signUpButton} color="primary" target="_blank"
                      href='https://social-network.samuraijs.com/signUp'>Зарегистрироваться</Button>
            </BootstrapTooltip>
          </div>
        </div>
      </section>

      {/* Модальное окно аутентификации. */}
      <AuthModalWindow
        openAuthWindow={openAuthWindow} handleClose={handleClose}
      />

    </div>
  );
};