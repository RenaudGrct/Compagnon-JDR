import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

export default function Footer() {
  return (
    <Box
      bgcolor="text.secondary"
      color="gray"
      sx={{
        marginTop: 37,
      }}
    >
      <Container
        maxWidth="100%"
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'rows',
            justifyContent: 'space-around',
            alignItems: 'center',

          }}
        >
          <Link
            href="/"
            underline="hover"
            sx={{
              p: 2,
              color: 'primary.contrastText',
            }}
          >
            Contact
          </Link>
          <Link
            href="/"
            underline="hover"
            sx={{
              color: 'primary.contrastText',
              p: 2,
            }}
          >
            A propos
          </Link>
        </Box>
        <Box
          sx={{
            paddingBottom: 2,
          }}
        >
          <Link
            href="https://company.wizards.com/fr/legal/fancontentpolicy"
            target="_blank"
            sx={{
              color: 'primary.contrastText',
              fontSize: '0.5rem',
              textAlign: 'center',
            }}
            underline="hover"
          >
            Compagnon-JDR est un contenu de fan non officiel autorisé dans le cadre de la Politique
            des contenus de fans. Ni approuvé, ni promu par Wizards of the Coast.
            Certaines parties des matériaux utilisés sont la propriété de Wizards of the Coast.
            ©Wizards of the Coast LLC.
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
