import { useDispatch, useSelector } from 'react-redux';
import { changeNameInput } from 'src/actions/characters';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
// import Avatar from 'src/components/Character/Creation/Name/Avatar';

import CharacterCreation from 'src/components/Character/Creation';

export default function Name() {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.characters.character);

  return (

    <>
      <CharacterCreation />

      <Container
        maxwidth="sm"
        sx={{
          height: '75vh',
          display: 'flex',
          gap: '3rem',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >

        <Typography
          variant="h5"
          color="primary"
          gutterBottom
          component="div"
          fontFamily="monospace"
          sx={{
            marginBottom: '10rem',
            fontWeight: 700,
            letterSpacing: '.3rem',
          }}
        >
          Choix du Nom
        </Typography>

        <TextField
          variant="filled"
          required
          label="Nom du personnage"
          name="name"
          value={name}
          onChange={(event) => dispatch(changeNameInput(event.target.value))}
          sx={{ input: { color: 'primary', backgroundColor: 'primary.contrastText' } }}
          color="secondary"
        />

        {/* <Typography
          variant="h4"
          color="white"
          gutterBottom
          component="div"
        >

          Choix de l'avatar
        </Typography>

        <Avatar /> */}

      </Container>

    </>
  );
}
