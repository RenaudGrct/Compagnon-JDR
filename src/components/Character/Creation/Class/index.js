import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
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
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';

import { useEffect } from 'react';

import CharacterCreation from 'src/components/Character/Creation';

import classes from 'src/assets/Data/classes.json';

import {
  selectClass,
  handleModalIsClosed,
  selectStat,
  getClass,
  toggleIsFetched,
  selectSkills,
} from 'src/actions/characters';

import { useDispatch, useSelector } from 'react-redux';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'rgba(121,103,72,0.54)',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.primary.contrastText,
}));

export default function Class() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('hello');
    return () => {
      dispatch(toggleIsFetched());
    };
  }, []);

  const {

    selectedClass,
    modalIsClosed,
    classAbility,

    fetchedCharacterClassObject,

  } = useSelector((state) => state.characters.character);
  const { classIsFetched } = useSelector((state) => state.characters);

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
              marginBottom: '5rem',
            }}
          >Choix de la Classe
          </Typography>
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
            {
                 classes.map((classSelected) => (
                   <>
                     <Box
                       key={classSelected.name}
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
                         <Avatar alt="User Avatar" src={classSelected.image} sx={{ width: 54, height: 54 }} />
                         <FormControlLabel
                           labelPlacement="start"
                           value={classSelected.name}
                           label={classSelected.name}
                           checked={selectedClass === classSelected.name}
                           onClick={(event) => {
                             dispatch(selectClass(event.target.value));
                             dispatch(getClass());
                           }}
                           control={<Radio sx={{ color: 'primary.contrastText' }} />}
                           sx={{ display: 'flex', justifyContent: 'space-between' }}
                         />

                       </Item>
                     </Box>
                     <Dialog
                       open={!modalIsClosed && (selectedClass === classSelected.name)}
                       onClose={handleClose}
                       aria-labelledby="alert-dialog-title"
                       aria-describedby="alert-dialog-description"
                     >

                       { classIsFetched && (
                       <>
                         <DialogTitle sx={{
                           backgroundColor: 'secondary.main',
                           display: 'flex',
                           justifyContent: 'space-between',
                           fontFamily: 'monospace',
                         }}
                         >
                           {fetchedCharacterClassObject?.name}
                           <Avatar alt="User Avatar" src={classSelected.image} sx={{ width: 60, height: 60 }} />
                         </DialogTitle>
                         <DialogContent sx={{ backgroundColor: 'primary.main' }}>
                           <DialogContentText sx={{ color: 'primary.contrastText', fontFamily: 'monospace' }}>
                             {/* <p>Point de vie : {characterClass.hit_point}</p> */}
                             <p>jets de sauvegarde :</p>
                             {
                           fetchedCharacterClassObject?.proficiencies?.map((proficiency) => (
                             proficiency.saving_throws.map((save) => (
                               <p key={save}>{save},</p>
                             ))
                           ))
                            }
                             <p>choisit tes compétences :</p>
                             {fetchedCharacterClassObject?.proficiencies?.map((proficiency) => (
                               <Autocomplete
                                 key={proficiency.id}
                                 sx={{ backgroundColor: 'secondary.main' }}
                                 multiple
                                 id="tags-filled"
                                 options={proficiency.skills.map((option) => option)}
                                 getOptionLabel={(option) => option.name}
                                 onChange={(e, newValue) => {
                                   if (newValue.length <= 2) {
                                     dispatch(selectSkills(newValue));
                                   }
                                   console.log(newValue);
                                 }}
                                 //  defaultValue="fait tes choix"
                                 renderTags={(value, getTagProps) => value.map((option, index) => (
                                   <Chip
                                    //  onClick={(e) => dispatch(selectSkills(e.target.value))}
                                    //  key={option.name}
                                     variant="outlined"
                                     label={option.name}
                                     {...getTagProps({ index })}
                                    //  onDelete={() => console.log('je delete')}
                                   />
                                 ))}
                                 renderInput={(params) => (
                                   <TextField
                                     {...params}
                                     variant="filled"
                                     label="compétences"
                                   />
                                 )}
                               />
                             ))}

                             {/* {characterClass.proficiencies.map((proficiency) => (
                                   proficiency.skills.map((skill) => (
                                     // <p key={skill.name}>{skill.name},</p>
                                     ))
                                     ))} */}

                             <p>caracteristiques :</p>
                             {fetchedCharacterClassObject.feature.map((feat) => (
                               <>
                                 <p key={feat.feature_name}>{feat.feature_name} : </p>
                                 <p>{feat.description}</p>
                                 <p>nombre d'utilistation: {feat.number_of_use}</p>
                                 <p>réinitialisation : {feat.reset}</p>
                               </>
                             ))}
                             {fetchedCharacterClassObject.feature.map((feat) => (
                               feat.choices?.map((choice) => (
                                 <>
                                   <p>{choice.name}:</p>
                                   <p>{choice.description}</p>
                                 </>
                               ))
                             ))}
                             <p>choisit ta caracteristique :</p>
                             <FormControl variant="standard" sx={{ backgroundColor: 'secondary.main' }}>
                               <InputLabel> caracteristiques </InputLabel>
                               <Select
                                 value={classAbility}
                                 label="stats"
                                 onChange={(e) => dispatch(selectStat('classAbility', e.target.value))}
                                 sx={{ width: '10rem', marginTop: '1rem' }}
                               >
                                 {fetchedCharacterClassObject.feature?.map((feat) => (
                                   feat.choices?.map((choice) => (
                                     <MenuItem value={choice.id}>
                                       {choice.name}
                                     </MenuItem>
                                   ))
                                 ))}
                               </Select>
                             </FormControl>
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
                 ))
          }

          </RadioGroup>
        </FormControl>
      </Container>
    </>
  );
}
