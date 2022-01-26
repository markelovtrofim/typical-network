import React from 'react';
import Dialog from "@mui/material/Dialog";
import {makeStyles} from "@mui/styles";
import Alert from '@mui/material/Alert';
import {Formik} from 'formik';
import {Button, IconButton, TextField, Typography} from "@mui/material";
import {logInThunk} from "../../redux/reducers/auth.reducer";
import {useDispatch} from "react-redux";
import {LogoIcon} from "../../components/Logo/Icon";
import Slide from '@mui/material/Slide';
import {TransitionProps} from '@mui/material/transitions';
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles(({
  wrapper: {
    height: '400px',
    width: '540px',
    padding: '10px 30px',
    backgroundColor: '#121212'
  },
  authWinTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  authWinForm: {
    display: 'block'
  },
  textField: {
    width: '100%',
    marginBottom: '20px !important',
    '& .MuiInput-input': {
      color: '#ffffff'
    }
  }
}));

type AuthModalWindowPropsType = {
  openAuthWindow: boolean
  handleClose: () => void
}

const Transition = React.forwardRef((
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) => <Slide direction="up" ref={ref} {...props}/>
);

export const AuthModalWindow: React.FC<AuthModalWindowPropsType> = ({openAuthWindow, handleClose}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Dialog open={openAuthWindow} title="Subtitle options"
            onClose={handleClose} TransitionComponent={Transition}>
      <div className={classes.wrapper}>
        <div className={classes.authWinTitle}>
          <LogoIcon width={40} height={40}/>
          <IconButton onClick={handleClose}>
            <CloseIcon color="secondary"/>
          </IconButton>
        </div>
        <Typography variant="h4" style={{margin: '10px 0 20px 0'}}>Авторизация</Typography>

        <Formik
          initialValues={{email: '', password: ''}}
          validate={values => {
            const errors = {} as { email: string, password: string }
            if (!values.email) {
              errors.email = 'Это поле обязательно для ввода.';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Email адресс введен неверно.';
            }
            return errors;
          }}
          onSubmit={(values) => {
            dispatch(logInThunk({...values}))
          }}
        >
          {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
            <form className={classes.authWinForm} onSubmit={handleSubmit}>
              <TextField type="email" name="email" onChange={handleChange} value={values.email} onBlur={handleBlur}
                         label="Email" variant="standard" className={classes.textField}
                         color="primary"
              /><br/>
              <TextField type="password" name="password" onChange={handleChange} value={values.password}
                         onBlur={handleBlur}
                         label="Password" variant="standard" className={classes.textField}
                         color="primary"
              /><br/>
              {(errors.email && touched.email && errors.email) || (errors.password && touched.password && errors.password)
                ? <Alert severity="warning">{errors.email || errors.password}</Alert>
                : null
              }<br/>
              <Button type="submit" style={isSubmitting ? {color: '#999999'} : {}}
                      disabled={isSubmitting}>Submit</Button>
            </form>
          )}
        </Formik>

      </div>
    </Dialog>
  );
};

export default AuthModalWindow;
