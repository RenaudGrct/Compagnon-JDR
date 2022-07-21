import { useSelector, useDispatch } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import Field from 'src/components/InputField';

import { changeSignInField, submitRegister } from '../../actions/user';

function SignUp() {
  const {
    registerName,
    registerEmail,
    registerPassword,
    registerConfirmPassword,
  } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: '#cfe8fc',
            height: '80vh',
          }}
        >
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              '& > :not(style)': { m: '1rem', width: '30ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(submitRegister());
            }}
          >
            <Field
              required
              id="outlined-required"
              label="Nom d'utilisateur"
              name="registerName"
              onChange={(newValue, fieldName) => dispatch(changeSignInField(newValue, fieldName))}
              value={registerName}
            />
            <Field
              required
              id="outlined-required"
              label="E-mail"
              name="registerEmail"
              onChange={(newValue, fieldName) => dispatch(changeSignInField(newValue, fieldName))}
              value={registerEmail}
            />
            <Field
              required
              id="outlined-required"
              label="Mot de passe"
              type="password"
              name="registerPassword"
              onChange={(newValue, fieldName) => dispatch(changeSignInField(newValue, fieldName))}
              value={registerPassword}
            />
            <Field
              required
              id="outlined-required"
              label="Confirmation mort de passe"
              type="password"
              name="registerConfirmPassword"
              onChange={(newValue, fieldName) => dispatch(changeSignInField(newValue, fieldName))}
              value={registerConfirmPassword}
            />
            <Button
              variant="contained"
              type="submit"
            >
              S'enregistrer
            </Button>

          </Box>
        </Box>
      </Container>
    </>
  );
}

export default SignUp;
