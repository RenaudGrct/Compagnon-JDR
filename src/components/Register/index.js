import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

import Field from 'src/components/InputField';

import {
  changeInputField,
  submitRegister,
  verifyPassword,
  handleIsSubmitError,
} from 'src/actions/user';

export default function Register() {
  const {
    userName,
    userEmail,
    userPassword,
    userConfirmPassword,
    isSamePassword,
    submitError,
    isLoading,
    errorMessage,
    isRedirect,
  } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (userPassword === userConfirmPassword) {
      await dispatch(submitRegister());
    }
    else {
      dispatch(verifyPassword());
    }
  }

  useEffect(() => {
    if (isRedirect) {
      navigate('/login');
    }
  }, [isRedirect]);

  useEffect(() => {
    dispatch(handleIsSubmitError());
  }, []);

  return (
    <>
      <CssBaseline />
      <Container fixed>
        {isLoading && <CircularProgress />}
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '5rem',
            padding: '1rem',
            gap: '2rem',
          }}
          noValidate
          autoComplete="off"
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          {submitError && <Alert severity="error">{errorMessage}!</Alert>}
          <Field
            required
            id="outlined-required"
            label="Nom d'utilisateur"
            name="userName"
            onChange={(newValue, fieldName) => dispatch(changeInputField(newValue, fieldName))}
            value={userName}
          />
          <Field
            required
            id="outlined-required"
            label="E-mail"
            name="userEmail"
            onChange={(newValue, fieldName) => dispatch(changeInputField(newValue, fieldName))}
            value={userEmail}
          />
          <Field
            required
            id="outlined-required"
            label="Mot de passe"
            type="password"
            name="userPassword"
            onChange={(newValue, fieldName) => dispatch(changeInputField(newValue, fieldName))}
            value={userPassword}
          />
          <Field
            required
            id="outlined-required"
            label="Confirmation mot de passe"
            type="password"
            name="userConfirmPassword"
            onChange={(newValue, fieldName) => dispatch(changeInputField(newValue, fieldName))}
            value={userConfirmPassword}
          />
          {isSamePassword && <Alert severity="error">Les mots de passe ne sont pas identiques !</Alert>}

          <Button
            color="secondary"
            variant="contained"
            type="submit"
          >
            Créer compte
          </Button>

        </Box>
      </Container>
    </>
  );
}
