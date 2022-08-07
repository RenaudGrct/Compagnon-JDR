import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getCharacter } from 'src/actions/characters';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body1,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function MyCharacterDetails() {
  const {
    storedCharacterId,
  } = useSelector((state) => state.characters.character);

  const {
    selectedCharacterName,
    selectedCharacterClass,
    selectedCharacterRace,
    proficiencies,
    features,
    langue,
    abilityRace,
    selectedCharacterBackground,
    abilityBackground,
    abilityBackgroundDescription,
    selectedCharacterSkills,
    selectedStrenght,
    selectedDexterity,
    selectedConstitution,
    selectedWisdom,
    selectedIntelligence,
    selectedCharisma,
  } = useSelector((state) => state.characters.character);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacter());
  }, [storedCharacterId]);

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
          src={`/images/${selectedCharacterRace}.jpg`}
          sx={{ width: 100, height: 100 }}
        />

        <Box sx={{ width: '100%', maxWidth: 500 }}>
          <Typography variant="h4">
            { selectedCharacterName }
          </Typography>
          <Typography variant="h5">
            { selectedCharacterRace }
          </Typography>
          <Typography variant="h5">
            { selectedCharacterClass}
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
              {selectedStrenght}
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
              {selectedDexterity}
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
              {selectedIntelligence}
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
              {selectedWisdom}
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
              {selectedCharisma}
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
              {selectedConstitution}
            </Typography>
          </Item>
        </Grid>

      </Grid>
      <Stack sx={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'space-around' }} container spacing={{ xs: 1, md: 2 }} columns={{ xs: 36, sm: 24, md: 24 }}>
        <Item sx={{
          backgroundColor: 'secondary.main',
          fontFamily: 'monospace',
        }}
        >Race
        </Item>
        {abilityRace?.map((ability) => (
          <>
            <Paper
              sx={{
                backgroundColor: 'primary.main',
                fontFamily: 'monospace',
                color: 'primary.contrastText',
                padding: '1rem',
                textAlign: 'center',
              }}
              elevation={24}
            >
              {ability.racial_ability_name}
            </Paper>
            <Paper
              sx={{
                backgroundColor: 'secondary.dark',
                fontFamily: 'monospace',
                padding: '0.5rem',
              }}
              elevation={3}
            >
              {ability.description}
            </Paper>
            <Paper sx={{
              backgroundColor: 'primary.main',
              fontFamily: 'monospace',
              color: 'primary.contrastText',
              padding: '1rem',
              textAlign: 'center',
            }}
            >
              langues connues
            </Paper>
            {langue.map((l) => (
              <Paper sx={{
                backgroundColor: 'secondary.dark',
                fontFamily: 'monospace',
                padding: '0.5rem',
              }}
              >
                { l }
              </Paper>
            ))}
          </>

        ))}
        <Item sx={{
          backgroundColor: 'secondary.main',
          fontFamily: 'monospace',
        }}
        >Classe
        </Item>
        {features?.map((feat) => (
          <>
            <Paper sx={{
              backgroundColor: 'primary.main',
              fontFamily: 'monospace',
              color: 'primary.contrastText',
              padding: '1rem',
              textAlign: 'center',
            }}
            >
              {feat.name}
            </Paper>
            <Paper sx={{
              backgroundColor: 'secondary.dark',
              fontFamily: 'monospace',
              padding: '0.5rem',
            }}
            >
              {feat.description}
            </Paper>
            {feat.choice?.map((c) => (
              <>
                <Paper sx={{
                  backgroundColor: 'primary.main',
                  fontFamily: 'monospace',
                  color: 'primary.contrastText',
                  padding: '1rem',
                  textAlign: 'center',
                }}
                >
                  {c.name}
                </Paper>
                <Paper sx={{
                  backgroundColor: 'secondary.dark',
                  fontFamily: 'monospace',
                  padding: '0.5rem',
                }}
                >
                  {c.description}
                </Paper>
              </>
            ))}
          </>
        ))}

        <Paper sx={{
          backgroundColor: 'primary.main',
          fontFamily: 'monospace',
          color: 'primary.contrastText',
          padding: '1rem',
          textAlign: 'center',
        }}
        >
          jets de sauvegarde
        </Paper>
        {proficiencies?.map((proficiency) => (
          proficiency.saving_throws.map((t) => (
            <Paper sx={{
              backgroundColor: 'secondary.dark',
              fontFamily: 'monospace',
              padding: '0.5rem',
            }}
            >
              {t}
            </Paper>

          ))
        ))}

        <Paper sx={{
          backgroundColor: 'primary.main',
          fontFamily: 'monospace',
          color: 'primary.contrastText',
          padding: '1rem',
          textAlign: 'center',
        }}
        >
          aptitudes de classe
        </Paper>
        {proficiencies?.map((proficiency) => (
          proficiency.skills.map((skill) => (
            <Paper sx={{
              backgroundColor: 'secondary.dark',
              fontFamily: 'monospace',
              padding: '0.5rem',
            }}
            >
              {skill.name}
            </Paper>

          ))
        ))}

        <Item
          sx={{
            backgroundColor: 'secondary.main',
            fontFamily: 'monospace',
          }}
          centered
        >
          Historique
        </Item>
        <Paper sx={{
          backgroundColor: 'primary.main',
          fontFamily: 'monospace',
          color: 'primary.contrastText',
          padding: '1rem',
          textAlign: 'center',
        }}
        >
          {selectedCharacterBackground}
        </Paper>
        <Paper sx={{
          backgroundColor: 'primary.main',
          fontFamily: 'monospace',
          color: 'primary.contrastText',
          padding: '1rem',
          textAlign: 'center',
        }}
        >
          {abilityBackground}
        </Paper>
        <Paper sx={{
          backgroundColor: 'secondary.dark',
          fontFamily: 'monospace',
          padding: '0.5rem',
        }}
        >
          {abilityBackgroundDescription}
        </Paper>
        <Paper sx={{
          backgroundColor: 'primary.main',
          fontFamily: 'monospace',
          color: 'primary.contrastText',
          padding: '1rem',
          textAlign: 'center',
        }}
        >
          aptitudes d'historique
        </Paper>
        {selectedCharacterSkills?.map((skill) => (
          <Paper sx={{
            backgroundColor: 'secondary.dark',
            fontFamily: 'monospace',
            padding: '0.5rem',
          }}
          >
            {skill}
          </Paper>
        ))}
      </Stack>

    </Container>

  );
}
