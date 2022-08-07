import { Link, useNavigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

import {
  handleIsRedirect,
  logAsGuest,
  handleIsSubmitError,
} from 'src/actions/user';

function Homepage() {
  const {
    isLogged,
    isLoggedAsGuest,
    submitError,
    errorMessage,
    isLoading,
  } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleIsRedirect());
    dispatch(handleIsSubmitError());
  }, []);

  useEffect(() => {
    if (isLogged) {
      navigate('/characters');
    }
  }, [isLogged]);

  useEffect(() => {
    if (isLoggedAsGuest) {
      navigate('/characters');
    }
  }, [isLoggedAsGuest]);

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
          color="primary"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '10rem',
            padding: '1rem',
            gap: '2rem',
            color: 'primary.main',
            backgroundColor: 'primary.main',
            opacity: [0.5, 0.5, 0.6],

          }}
        >
          {isLoading && <CircularProgress color="secondary" />}

          <Link to="/login">
            <Button
              color="secondary"
              variant="contained"
              type="button"
              sx={{
                width: '20rem',
              }}
            >
              Se connecter
            </Button>
          </Link>

          <Link to="/register">
            <Button
              color="secondary"
              variant="contained"
              type="button"
              sx={{
                width: '20rem',
              }}
            >
              Créer compte
            </Button>
          </Link>
          {submitError && <Alert severity="error">{errorMessage}!</Alert>}
          <Button
            onClick={() => dispatch(logAsGuest())}
            color="secondary"
            variant="contained"
            type="button"
            sx={{
              width: '20rem',
            }}
          >
            Se connecter en tant qu'invité
          </Button>

        </Box>
      </Container>
    </>
  );
}

export default Homepage;
