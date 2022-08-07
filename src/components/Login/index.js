/* eslint-disable max-len */
import * as React from 'react';
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import WarningIcon from '@mui/icons-material/Warning';

import './style.scss';
import Field from 'src/components/InputField';

import {
  changeInputField,
  submitLogin,
  handleIsRedirect,
  handleIsSubmitError,
  handleIsSuccess,
  // getUserProfile,
} from 'src/actions/user';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Login() {
  const {
    userEmail,
    userPassword,
    isLoading,
    errorMessage,
    submitError,
    isLogged,
    isLoggedAsGuest,
    registerMessage,
    isSuccess,
  } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleIsRedirect());
    dispatch(handleIsSubmitError());
    return () => {
      dispatch(handleIsSuccess());
    };
  }, []);

  useEffect(() => {
    if (isLogged) {
      navigate('/characters');
    }
  }, [isLogged]);

  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  return (
    <>

      <CssBaseline />
      <Container
        fixed
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '10rem',
            padding: '1rem',
            gap: '2rem',
            backgroundColor: 'primary.main',
            opacity: [0.7, 0.7, 0.7],
          }}
          noValidate
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(submitLogin());
            // dispatch(getUserProfile());
          }}
        >
          {isLoading && <CircularProgress color="secondary" />}

          {isSuccess && <Alert severity="success">{registerMessage.successMessage}</Alert>}

          {submitError && <Alert severity="error">{errorMessage}!</Alert>}
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
          <Button
            color="secondary"
            variant="contained"
            type="submit"
            sx={{
              width: '15rem',
            }}
          >Se connecter
          </Button>
          <Link to="/register">
            <Button
              color="secondary"
              variant="contained"
              type="button"
              sx={{
                width: '15rem',
              }}
            >
              Créer compte
            </Button>
          </Link>
        </Box>
      </Container>

      {isLoggedAsGuest && (
      <div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>

            <WarningIcon
              sx={{ transform: 'scale(2.5)' }}
              color="red"
            />
            <Typography id="modal-modal-title" variant="h6" component="h2">
              ATTENTION, TOUTE CONNEXION À UN COMPTE EXISTANT ENTRAINERA LA SUPPRESSION DE VOS PERSONNAGES DU COMPTE INVITÉ
            </Typography>

          </Box>
        </Modal>
      </div>
      )}
    </>

  );
}
