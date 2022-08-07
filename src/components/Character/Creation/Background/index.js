import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  handleModalIsClosed,
  selectBackground,
  getBackground,
} from 'src/actions/characters';

import CharacterCreation from 'src/components/Character/Creation';

// import backgrounds from 'src/assets/Data/backgrounds.json';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'rgba(121,103,72,0.54)',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.primary.contrastText,
}));

export default function Background() {
  const dispatch = useDispatch();
  const {
    selectedBackground,
    modalIsClosed,
    backgrounds,
    backgroundIsFetched,
  } = useSelector((state) => state.characters.character);

  const handleClose = () => {
    dispatch(handleModalIsClosed());
  };

  useEffect(() => {
    dispatch(getBackground());
  }, [backgroundIsFetched]);

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
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <>
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
            >Choix de l'Histoire
            </Typography>
            {backgrounds.length ? (

              <RadioGroup
          // row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                sx={{
                  gap: '3rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >

                {backgrounds.map((background) => (

                  <Box
                    key={background.name}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Item sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '1rem',
                      width: '20rem',
                    }}
                    >

                      <FormControlLabel
                        labelPlacement="start"
                        value={background.id}
                        label={background.name}
                        checked={Number(selectedBackground) === background.id}
                        onClick={(event) => dispatch(selectBackground(event.target.value))}
                        control={<Radio sx={{ color: 'primary.contrastText' }} />}
                        sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}
                      />

                    </Item>
                  </Box>
                ))}
                {backgrounds.map((background) => (
                  <Dialog
                    key={background.id}
                    open={!modalIsClosed && (Number(selectedBackground) === background.id)}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle sx={{
                      backgroundColor: 'secondary.main',
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontFamily: 'monospace',
                    }}
                    >
                      {background.name}
                    </DialogTitle>
                    <DialogContent sx={{ backgroundColor: 'primary.main' }}>
                      <DialogContentText sx={{ color: 'primary.contrastText', fontFamily: 'monospace' }}>
                        <p>capacité : {background.ability}</p>
                        <p>{background.ability_description}</p>
                        <p>langue additionnelle : {background.additional_language}</p>
                        {/* {background.skills.map((skill) => (
                      <p key={skill}>{skill},</p>
                    ))} */}

                      </DialogContentText>
                    </DialogContent>
                    <DialogActions sx={{ backgroundColor: 'secondary.main' }}>
                      <Button onClick={handleClose} autoFocus>
                        OK
                      </Button>
                    </DialogActions>
                  </Dialog>
                ))}

              </RadioGroup>
            )
              : <CircularProgress sx={{ marginTop: '10rem' }} color="secondary" />}
          </>
          {/* )} */}
        </FormControl>
      </Container>
    </>

  );
}
