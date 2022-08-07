import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';

import { useEffect } from 'react';

import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { useSelector, useDispatch } from 'react-redux';

import { getCharacter, submitCharacterCreation } from 'src/actions/characters';
import { useNavigate } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function CharacterDetails() {
  const {
    name,
    selectedRace,
    selectedClass,
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma,
    storedCharacterId,
  } = useSelector((state) => state.characters.character);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCharacter());
  }, [storedCharacterId]);

  const handleCreationSubmit = (e) => {
    e.preventDefault();
    console.log('a la bien cousin');
    dispatch(submitCharacterCreation());
    navigate('/characters');
  };

  return (

    <Container
      sx={{
        mt: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem',
      }}
      maxWidth="lg"
    >
      <Stack direction="row" spacing={2}>

        <Avatar
          alt="User Avatar"
          src={`/images/${selectedRace}.jpg`}
          sx={{ width: 100, height: 100 }}
        />

        <Box sx={{ width: '100%', maxWidth: 500 }}>
          <Typography variant="h4" sx={{ color: 'primary.contrastText' }}>
            { name}
          </Typography>
          <Typography variant="h5" sx={{ color: 'primary.contrastText' }}>
            { selectedRace }
          </Typography>
          <Typography variant="h5" sx={{ color: 'primary.contrastText' }}>
            { selectedClass}
          </Typography>
        </Box>
      </Stack>
      <Grid sx={{ justifyContent: 'center' }} container spacing={{ xs: 1, md: 2 }} columns={{ xs: 36, sm: 24, md: 24 }}>

        <Grid item xs={12} sm={4} md={4}>
          <Item sx={{
            padding: '0.25rem',
            backgroundColor: 'primary.main',
            color: 'primary.contrastText',
            fontFamily: 'monospace',
          }}
          >
            <Typography variant="h7">
              Force
            </Typography>
            <Typography sx={{ display: 'block' }} variant="h7">
              {strength}
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Item sx={{
            padding: '0.25rem',
            backgroundColor: 'primary.main',
            color: 'primary.contrastText',
            fontFamily: 'monospace',
          }}
          >
            <Typography variant="h7">
              Dexterité
            </Typography>
            <Typography sx={{ display: 'block' }} variant="h7">
              {dexterity}
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Item sx={{
            padding: '0.25rem',
            backgroundColor: 'primary.main',
            color: 'primary.contrastText',
            fontFamily: 'monospace',
          }}
          >
            <Typography variant="h7">
              Intelligence
            </Typography>
            <Typography sx={{ display: 'block' }} variant="h7">
              {intelligence}
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Item sx={{
            padding: '0.25rem',
            backgroundColor: 'primary.main',
            color: 'primary.contrastText',
            fontFamily: 'monospace',
          }}
          >
            <Typography variant="h7">
              Sagesse
            </Typography>
            <Typography sx={{ display: 'block' }} variant="h7">
              {wisdom}
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Item sx={{
            padding: '0.25rem',
            backgroundColor: 'primary.main',
            color: 'primary.contrastText',
            fontFamily: 'monospace',
          }}
          >
            <Typography variant="h7">
              Charisme
            </Typography>
            <Typography sx={{ display: 'block' }} variant="h7">
              {charisma}
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Item sx={{
            padding: '0.25rem',
            backgroundColor: 'primary.main',
            color: 'primary.contrastText',
            fontFamily: 'monospace',
          }}
          >
            <Typography variant="h7">
              Constitution
            </Typography>
            <Typography sx={{ display: 'block' }} variant="h7">
              {constitution}
            </Typography>
          </Item>
        </Grid>
        <FormControl
          sx={{
            marginTop: '5rem',
          }}
          component="form"
          onSubmit={(e) => {
            handleCreationSubmit(e);
          }}
        >

          <Button
            color="secondary"
            variant="contained"
            type="submit"
            value="zbozbozobzob"
          >
            Enregistrer
          </Button>
        </FormControl>
      </Grid>

    </Container>

  );
}
