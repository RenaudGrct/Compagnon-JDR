import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { NavLink } from 'react-router-dom';

import './characterCreation.scss';

export default function CharacterCreation() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabsList = [

    {
      label: 'Nom',
      url: '/name',
      value: 0,
    },
    {
      label: 'Race',
      url: '/race',
      value: 1,
    },
    {
      label: 'Classe',
      url: '/class',
      value: 2,
    },
    {
      label: 'Histoire',
      url: '/background',
      value: 3,
    },
    {
      label: 'Stats',
      url: '/stats',
      value: 4,
    },
    {
      label: 'Valider',
      url: '/validate',
      value: 5,
    },
  ];

  return (
    <Box fixed sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'secondary.main' }}>
          <TabList
            centered
            fixed
            sx={{
              color: 'secondary',
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              width: '100vw',
            }}
            onChange={handleChange}
            aria-label="character creation tabs"
          >

            {tabsList.map((tab) => (

              <NavLink key={tab.label} to={`/creation${tab.url}`}>
                <Tab
                  sx={{ fontWeight: 'bold', fontStyle: 'italic', fontFamily: 'monospace' }}
                  label={`${tab.label}`}
                  value={`${tab.value}`}
                />
              </NavLink>

            ))}

          </TabList>
        </Box>
      </TabContext>
    </Box>
  );
}
