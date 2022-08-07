import CharacterCreation from 'src/components/Character/Creation';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import InputLabel from '@mui/material/InputLabel';

import races from 'src/assets/Data/races.json';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectRace,
  handleModalIsClosed,
  // selectStat,
  getRace,
  toggleIsFetched,
} from 'src/actions/characters';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'rgba(121,103,72,0.54)',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.primary.contrastText,
}));

export default function Race() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('hello');
    return () => {
      dispatch(toggleIsFetched());
    };
  }, []);

  const {
    selectedRace,
    modalIsClosed,
    // racialAbility,
    fetchedCharacterRaceObject,
  } = useSelector((state) => state.characters.character);
  const { raceIsFetched } = useSelector((state) => state.characters);

  const handleClose = () => {
    dispatch(handleModalIsClosed());
  };

  return (

    <>
      <CharacterCreation />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '5rem',
        }}
      >
        <FormControl
          sx={{
            display: 'flex',
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
              marginBottom: '5rem',
            }}
          >Choix de la Race
          </Typography>
          <RadioGroup
          // row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            sx={{
            // color: 'primary.contrastText',
              gap: '6rem',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              width: '60%',
            }}
          >
            <>
              {races.map((raceSelected) => (

                <>
                  <Box
                    key={raceSelected.name}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Item sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '1rem',
                      width: '20rem',
                    }}
                    >
                      <Avatar alt="User Avatar" src={raceSelected.image} sx={{ width: 84, height: 84 }} />
                      <FormControlLabel
                        value={raceSelected.name}
                        label={raceSelected.name}
                        checked={selectedRace === raceSelected.name}
                        onClick={(event) => {
                          dispatch(selectRace(event.target.value));
                          dispatch(getRace());
                        }}
                        control={<Radio sx={{ color: 'primary.contrastText' }} />}
                        labelPlacement="top"
                      />
                    </Item>

                  </Box>
                  <Dialog
                    open={!modalIsClosed && (selectedRace === raceSelected.name)}
                    onClose={handleClose}
                  >
                    { raceIsFetched && (
                    <>
                      <DialogTitle sx={{
                        backgroundColor: 'secondary.main',
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontFamily: 'monospace',
                      }}
                      >
                        {fetchedCharacterRaceObject?.name}
                        <Avatar alt="User Avatar" src={raceSelected.image} sx={{ width: 60, height: 60 }} />
                      </DialogTitle>
                      <DialogContent sx={{ backgroundColor: 'primary.main' }}>
                        <DialogContentText sx={{ color: 'primary.contrastText', fontFamily: 'monospace' }}>
                          {fetchedCharacterRaceObject?.racial_ability?.map((ability) => (
                            <>
                              <p key={ability.racial_ability_name}>{ability.description}</p>
                              {/* <FormControl sx={{ width: '100%', marginTop: '1rem' }}>
                                <InputLabel>abilité</InputLabel>
                                 <Select
                                  value={racialAbility}
                                  label="stats"
                                  onChange={(e) =>
                                    dispatch(selectStat('racialAbility', e.target.value))}
                                  sx={{ width: '10rem', marginTop: '1rem' }}
                                >
                                  {ability.choice.map((choosen) => (

                                    <MenuItem value={choosen}>{choosen}</MenuItem>

                                  ))}

                                </Select>
                              </FormControl> */}
                            </>
                          ))}
                          <p>vitesse de: {fetchedCharacterRaceObject?.speed}</p>
                          <p>Bonus de Race</p>
                          {fetchedCharacterRaceObject?.score_modifier?.map((score) => (
                            <p key={score.score_name}>{score.score_name}: {score.score_number}</p>
                          ))}
                          <p>langue parlé :</p>
                          {fetchedCharacterRaceObject.languages.map((lang) => (
                            <p key={lang}>{lang}</p>
                          ))}
                          <p>langue supplémentaire: {fetchedCharacterRaceObject?.extra_language}</p>
                        </DialogContentText>
                      </DialogContent>
                    </>
                    )}
                    <DialogActions sx={{ backgroundColor: 'secondary.main' }}>
                      <Button onClick={handleClose} autoFocus>
                        OK
                      </Button>
                    </DialogActions>
                  </Dialog>
                </>
              ))}
            </>

          </RadioGroup>
        </FormControl>
      </Container>
    </>

  );
}
