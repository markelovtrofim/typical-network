import React from 'react';
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import {AuthDataType} from "../../types";
import {makeStyles} from "@mui/styles";
import Alert from '@mui/material/Alert';
import {Formik} from 'formik';
import {Button} from "@mui/material";
import {logInThunk} from "../../redux/reducers/auth.reducer";
import {useDispatch} from "react-redux";

const useStyles = makeStyles(({
  wrapper: {
    height: '400px',
    width: '800px'
  },
  textField: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500
  },
  input: {
    color: 'white'
  }
}));

type AuthModalWindowPropsType = {
  openAuthWindow: boolean
  handleClose: () => void
}

export const AuthModalWindow: React.FC<AuthModalWindowPropsType> = ({openAuthWindow, handleClose}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Dialog open={openAuthWindow} onClose={handleClose}>
      <div className={classes.wrapper}>

        <DialogTitle>Авторизация</DialogTitle>

        <Formik
          initialValues={{email: '', password: ''}}
          validate={values => {
            const errors = {} as { email: string, password: string }
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, {setSubmitting}) => {
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
            <form onSubmit={handleSubmit}>
              <input
                // autoComplete="off"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <input
                // autoComplete="off"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.email && touched.email && errors.email || errors.password && touched.password && errors.password
                ? <Alert severity="error">{errors.email || errors.password}</Alert>
                : null
              }
              <div>
                <Button type="submit" disabled={isSubmitting}>Submit</Button>
                <Button onClick={handleClose}>Cancel</Button>
              </div>
            </form>
          )}
        </Formik>

      </div>
    </Dialog>
  );
};

export default AuthModalWindow;
