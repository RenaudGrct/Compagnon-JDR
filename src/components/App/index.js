// == Import
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import CharacterManagement from 'src/components/Character/Management';
import Register from 'src/components/Register';
import Login from 'src/components/Login';
import Header from 'src/components/Header';
import HomePage from 'src/components/HomePage';
import Profile from 'src/components/Profile';
import Footer from 'src/components/Footer';
import CharacterCreation from 'src/components/Character/Creation';
import Name from 'src/components/Character/Creation/Name';
import Class from 'src/components/Character/Creation/Class';
import Race from 'src/components/Character/Creation/Race';
import Background from 'src/components/Character/Creation/Background';
import Stats from 'src/components/Character/Creation/Stats';
import Validate from 'src/components/Character/Creation/Validate';
import Avatar from 'src/components/Character/Creation/Name/Avatar';
// import Character from 'src/components/Character/Details';
// import CharacterEquipment from 'src/components/Character/Details/Equipment';
// import CharacterProficiencies from 'src/components/Character/Details/Proficiencies';
// import CharacterHistory from 'src/components/Character/Details/History';
import NotFound from 'src/components/404';
import MyCharacterDetails from 'src/components/Character/MyCharacter';

import './styles.css';

import {
  retrieveUserDataFromLocalStorage,
  getUserProfile,
  retrieveGuestDataFromLocalStorage,
  getGuestProfile,
} from 'src/actions/user';
// import { getBackground } from 'src/actions/characters';

const theme = createTheme({

  palette: {
    type: 'light',
    primary: {
      main: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#CB7C1E',
      dark: '#b7afa2',
    },
    background: {
      paper: '#ffffff',
    },
    error: {
      main: '#ff1200',
    },
    warning: {
      main: '#af15a6',
    },
    info: {
      main: '#0988ec',
    },
    success: {
      main: '#149418',
    },
  },
});

// == Composant
function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   const userId = localStorage.getItem('userId');
  //   const guest = localStorage.getItem('guest');

  //   // if (token && userId && guest) {
  //   //   dispatch(getUserProfile());
  //   //   // coder une autre methode pour le guest
  //   //   dispatch(retrieveUserDataFromLocalStorage(token, userId));
  //   //   console.log('je suis le guest');
  //   // }

  //   if (token && userId) {
  //     dispatch(getUserProfile());
  //     dispatch(retrieveUserDataFromLocalStorage(token, userId));
  //     console.log('je suis le user');
  //   }
  // }, []);

  useEffect(() => {
    if (localStorage.getItem('token') && localStorage.getItem('userId')) {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');

      dispatch(retrieveUserDataFromLocalStorage(token, userId));
      dispatch(getUserProfile());
    }
    else if (localStorage.getItem('token') && localStorage.getItem('guestId')) {
      const token = localStorage.getItem('token');
      const guestId = localStorage.getItem('guestId');

      dispatch(retrieveGuestDataFromLocalStorage(token, guestId));
      dispatch(getGuestProfile());
    }
  }, []);

  return (

    <div className="app">
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/characters" element={<CharacterManagement />} />
          <Route path="/creation" element={<CharacterCreation />} />
          <Route path="/creation/name" element={<Name />} />
          <Route path="/creation/class" element={<Class />} />
          <Route path="/creation/race" element={<Race />} />
          <Route path="/creation/background" element={<Background />} />
          <Route path="/creation/stats" element={<Stats />} />
          <Route path="/creation/validate" element={<Validate />} />
          <Route path="/creation/avatar" element={<Avatar />} />
          <Route path="/character" element={<MyCharacterDetails />} />
          {/* <Route path="/character/equipment" element={<CharacterEquipment />} />
          <Route path="/character/proficiencies" element={<CharacterProficiencies />} />
          <Route path="/character/history" element={<CharacterHistory />} /> */}
          <Route path="*" element={<NotFound />} />

        </Routes>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

// == Export
export default App;
