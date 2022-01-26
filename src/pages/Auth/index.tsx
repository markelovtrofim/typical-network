import React from 'react';
import {makeStyles} from '@mui/styles';
import cn from 'classnames';
import backgroundImg from '../../assets/img/background-intro.jpg'
import {LogoText} from "../../components/Logo/Text";
import Box from '@mui/material/Box';
import {styled} from '@mui/material/styles';
import Tooltip, {TooltipProps, tooltipClasses} from '@mui/material/Tooltip';
import TelegramIcon from '../../assets/img/snLIst/telegram.png';
import SpotifyIcon from '../../assets/img/snLIst/spotify.png';
import TwitterIcon from '../../assets/img/snLIst/twitter.png';
import {Button, Typography} from "@mui/material";
import AuthModalWindow from "./AuthModalWindow";
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import {useDispatch, useSelector} from "react-redux";
import {logInThunk} from "../../redux/reducers/auth.reducer";
import {AppStateType} from "../../redux/store";
import {Redirect} from "react-router-dom";

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
  authButton: {
    color: '#ffffff',
    borderRadius: '20px !important',
    width: '100%',
    height: '20xp',
    marginBottom: '20px !important',
    '& .MuiLoadingButton-loadingIndicator': {
      right: '140px'
    }
  }
}));

const Auth: React.FC = () => {
  const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
  // styles.
  const classes = useStyles();

  const dispatch = useDispatch();

  // loading control.
  const [loading, setLoading] = React.useState(false);
  const handleClick = (load: boolean) => setLoading(load);

  // auth window control.
  const [openAuthWindow, setOpenAuthWindow] = React.useState(false);
  const handleOpen = () => setOpenAuthWindow(true);
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

  React.useEffect(() => {
    return handleClick(false);
  })

  if (isAuth) {
    return <Redirect to="/home"/>;
  }
  return (
    <div className={classes.wrapper}>

      {/* Левый приветственный блок. */}
      <section className={cn(classes.bothSide, classes.greetSide)}>
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

      {/* Правый блок с кнопками для авторизации. */}
      <section className={cn(classes.bothSide, classes.authSide)}>
        <div>
          <Typography sx={{fontWeight: 'bold', m: 1}} style={{margin: '20px 0'}} variant='h2'>
            Happening now
          </Typography>
          <div>
              <LoadingButton className={classes.authButton} onClick={async () => {
                handleClick(true);
                dispatch(logInThunk({email: 'markelovtrofim1337@gmail.com', password: '123'}))
                handleClick(false);
              }} style={{color: '#ffffff', boxShadow: 'none'}} color="primary" variant="contained" loadingPosition={'end'} endIcon={<SendIcon />} loading={loading}>
                Войти как гость
              </LoadingButton>
            <Button className={classes.authButton} onClick={handleOpen} color="secondary"
                    variant="contained">Войти</Button><br/>
            <BootstrapTooltip title="Для регистрации тебе нужно перейти перейти в другое приложение.">
              <Button className={classes.authButton} color="primary" target="_blank" variant="outlined"
                      href='https://social-network.samuraijs.com/signUp'>Зарегистрироваться</Button>
            </BootstrapTooltip>
          </div>
        </div>
      </section>

      {/* Модальное окно авторизации. */}
      <AuthModalWindow
        openAuthWindow={openAuthWindow} handleClose={handleClose}
      />

    </div>
  );
};

export default Auth;