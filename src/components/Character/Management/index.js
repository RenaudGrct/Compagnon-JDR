import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';
import Alert from '@mui/material/Alert';
// import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleIsSuccess,
  handleIsRedirect,
} from 'src/actions/user';
import {
  submitCharacterDeletion,
  getAllCharacters,
  // getCharacter,
  storeCharacterId,
} from 'src/actions/characters';

export default function CharacterManagement() {
  const {
    isSuccess,
    userId,
  } = useSelector((state) => state.user);

  const { characterIsDelete } = useSelector((state) => state.characters);

  const {
    myCharacters,
  } = useSelector((state) => state.characters.character);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleIsRedirect());
    console.log('hello');
    return () => {
      dispatch(handleIsSuccess());
    };
  }, []);

  useEffect(() => {
    dispatch(getAllCharacters());
  }, [userId, characterIsDelete]);

  const navigate = useNavigate();

  const handleCharacterDeletion = (e) => {
    console.log('je suis le handleCharacterDeletion');
    dispatch(storeCharacterId(e.currentTarget.value));
    dispatch(submitCharacterDeletion());
  };

  return (
    <>
      {isSuccess && <Alert severity="success">Votre Profil a bien été mis a jour !</Alert>}
      <IconButton
        sx={{ transform: 'scale(3)' }}
        color="secondary"
        aria-label="delete"
        size="large"
      />

      <Box sx={{
        flexGrow: 1,
        flexWrap: 'wrap',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <Typography
          variant="h5"
          noWrap
          sx={{
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            // color: 'primary.contrastText',
            textDecoration: 'none',
            marginTop: '3rem',
          }}
        >Mes Personnages
        </Typography>
        <Link to="/creation/name">
          <Button
            color="secondary"
            variant="contained"
            type="button"
            sx={{
              width: '17rem',
              marginTop: '5rem',
            }}
          >
            Créer Nouveau Personnage
          </Button>
        </Link>
        {myCharacters.length ? (
          <Grid sx={{ display: 'flex', justifyContent: 'center' }} container spacing={2}>
            {myCharacters.map((character) => (

              <Grid key={character.name} sx={{ transform: 'scale(0.6)' }} item xs={7} sm={6} md={3}>
                <Card>

                  <CardMedia
                    component="img"
                    src={`images/${character.race}.jpg`}
                    // alt="green iguana"
                    alt={`/images/${character.race},jpg`}
                    height="200px"
                  />
                  <CardContent>
                    <Typography align="center" gutterBottom variant="h4" component="div">
                      {character.name}
                    </Typography>
                    <Typography align="center" gutterBottom variant="h5" component="div">
                      {character.race}
                    </Typography>
                    <Typography align="center" gutterBottom variant="h5" component="div">
                      {character.class}
                    </Typography>
                    <Box sx={{
                      mt: '0.5rem',
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-around',
                      gap: '1rem',
                    }}
                    >
                      <IconButton
                        value={character.id}
                        onClick={(e) => {
                          console.log(e.currentTarget.value);
                          navigate('/character');
                          dispatch(storeCharacterId(e.currentTarget.value));
                        }}
                      >
                        <VisibilityIcon
                          fontSize="inherit"
                          color="primary"
                        />
                      </IconButton>
                      <IconButton>
                        <ModeEditIcon fontSize="inherit" color="primary" />
                      </IconButton>
                      <IconButton
                        value={character.id}
                        onClick={(e) => handleCharacterDeletion(e)}
                      >
                        <DeleteForeverIcon
                          fontSize="inherit"
                          color="primary"
                        />
                      </IconButton>
                    </Box>
                  </CardContent>

                </Card>

              </Grid>

            ))}
          </Grid>
        )
          : <Alert sx={{ marginTop: '5rem' }} severity="info">Vous n'avez pas de personnages</Alert>}

      </Box>
    </>
  );
}
