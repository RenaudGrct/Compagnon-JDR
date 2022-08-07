import axios from 'axios';

import {
// Login user
  SUBMIT_LOGIN,
  submitLoginSuccess,
  submitError,

  // Register user
  SUBMIT_REGISTER,
  submitRegisterSuccess,

  // Delete user
  DELETE_USER_PROFILE,
  deleteUserProfileSuccess,
  deleteUserProfileError,

  // Update user
  UPDATE_USER_PROFILE,
  updateUserProfileSuccess,
  updateUserProfileError,
  UPDATE_USER_PASSWORD,

  // Get user
  GET_USER_PROFILE,
  saveUserProfile,

  GET_GUEST_PROFILE,
  saveGuestProfile,

  handleIsLoading,
  LOG_OUT,
  logOut,

  LOG_AS_GUEST,
  logAsGuestSuccess,
  logAsGuestError,

} from 'src/actions/user';

import { clearCharacters } from 'src/actions/characters';

const instance = axios.create({
  baseURL: 'https://api-compagnon-jdr.herokuapp.com/api/',
  withCredentials: true,
});

// instance.interceptors.response.use(() => {
//   console.log('cc');
// });

// const setInstanceAuthorization = () => {
//   if (localStorage.getItem('token')) {
//     console.log(localStorage);
//     const token = localStorage.getItem('token');
//     instance.defaults.headers.common.authorization = token;
//     console.log(instance.defaults.headers.common);
//   }
// };
// setInstanceAuthorization();

const userMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN: {
      const { user } = store.getState();

      next(action);
      try {
        const response = await instance.post('auth/login', {
          email: user.userEmail,
          password: user.userPassword,
        });
        store.dispatch(submitLoginSuccess(response.data));
        localStorage.setItem('token', response.data.accessToken);
        localStorage.setItem('userId', response.data.user.id);
        localStorage.removeItem('guestId', response.data.user.id);

        // setInstanceAuthorization();
      }
      catch (error) {
        store.dispatch(submitError(error.response.data));
        console.log(error);
      }
      store.dispatch(handleIsLoading());

      // si je veux gérer un état de loading, je peux nexter aussi
      // SUBMIT_LOGIN
      break;
    }

    case LOG_OUT: {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      store.dispatch(clearCharacters());

      next(action);
      break;
    }
    case SUBMIT_REGISTER: {
      next(action);
      const { user } = store.getState();

      if (!user.guestId) {
        const config = {

          method: 'post',
          url: 'https://api-compagnon-jdr.herokuapp.com/api/auth/register',
          headers: {
            'Content-Type': 'application/json',
          },
          data: { email: user.userEmail, username: user.userName, password: user.userPassword },
          withCredentials: true,
        };

        axios(config)
          .then((response) => {
            store.dispatch(submitRegisterSuccess(response.data));
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            localStorage.removeItem('guestId');
            console.log('submit user register succes');
          })
          .catch((error) => {
            store.dispatch(submitError(error.response.data));
            console.log(error);
          })
          .finally(() => {
            store.dispatch(handleIsLoading());
          });
      }
      else if (user.guestId) {
        const config = {

          method: 'post',
          url: `https://api-compagnon-jdr.herokuapp.com/api/guest/${user.guestId}/confirm-register`,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `bearer ${user.token}`,
          },
          data: { email: user.userEmail, username: user.userName, password: user.userPassword },
          withCredentials: true,
        };

        axios(config)
          .then((response) => {
            store.dispatch(submitRegisterSuccess(response.data));
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            localStorage.removeItem('guestId');
            console.log(response.data);
            console.log('submit guest register succes');
          })
          .catch((error) => {
            store.dispatch(submitError(error.response.data));
            console.log(error);
          })
          .finally(() => {
            store.dispatch(handleIsLoading());
          });
      }

      // si je veux gérer un état de loading, je peux nexter aussi
      // SUBMIT_LOGIN
      break;
    }
    // case DELETE_USER_PROFILE: {
    //   const { user } = store.getState();

    //   next(action);

    //   try {
    //     const response = await instance.delete(`profile/${user.userId}`);
    //     store.dispatch(deleteUserProfileSuccess(response.data));
    //     localStorage.removeItem('token');
    //     localStorage.removeItem('userId');
    //     console.log(response);
    //   }
    //   catch (error) {
    //     store.dispatch(deleteUserProfileError());
    //     console.log(error);
    //   }

    //   store.dispatch(logOut());
    // }
    //   break;

    case UPDATE_USER_PROFILE: {
      const { user } = store.getState();

      next(action);
      const config = {

        method: 'patch',
        url: `https://api-compagnon-jdr.herokuapp.com/api/profile/${user.userId}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${user.token}`,
        },
        data: {
          email: user.userEmail,
          username: user.userName,
          password: user.userPassword,
        },
        withCredentials: true,
      };

      axios(config)
        .then((response) => {
          store.dispatch(updateUserProfileSuccess(response.data));
        })
        .catch((error) => {
          store.dispatch(updateUserProfileError(error.response.data));
          console.log(error);
        })
        .finally(() => {
          store.dispatch(handleIsLoading());
        });
    }
      break;

    case DELETE_USER_PROFILE: {
      const { user } = store.getState();

      next(action);
      const config = {

        method: 'delete',
        url: `https://api-compagnon-jdr.herokuapp.com/api/profile/${user.userId}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${user.token}`,
        },
        withCredentials: true,
      };

      axios(config)
        .then((response) => {
          store.dispatch(deleteUserProfileSuccess(response.data));
          localStorage.removeItem('token');
          localStorage.removeItem('userId');
        })
        .catch((error) => {
          store.dispatch(deleteUserProfileError(error.response.data));
          console.log(error);
        })
        .finally(() => {
          store.dispatch(logOut());
        });
    }
      break;

    case UPDATE_USER_PASSWORD: {
      const { user } = store.getState();

      next(action);
      const config = {

        method: 'patch',
        url: `https://api-compagnon-jdr.herokuapp.com/api/profile/${user.userId}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${user.token}`,
        },
        data: { password: user.userPassword, newPassword: user.userNewPassword },
        withCredentials: true,
      };

      axios(config)
        .then((response) => {
          store.dispatch(updateUserProfileSuccess(response.data));
        })
        .catch((error) => {
          store.dispatch(updateUserProfileError(error.response.data));
          console.log(error);
        })
        .finally(() => {
          store.dispatch(handleIsLoading());
        });
    }
      break;

    case LOG_AS_GUEST: {
      next(action);
      const { user } = store.getState();

      const config = {

        method: 'post',
        url: 'https://api-compagnon-jdr.herokuapp.com/api/auth/guest',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${user.token}`,
        },
        withCredentials: true,
      };

      axios(config)
        .then((response) => {
          store.dispatch(logAsGuestSuccess(response.data));
          localStorage.setItem('token', response.data.accessToken);
          localStorage.setItem('guestId', response.data.guest.id);
          console.log(localStorage);
          console.log(response.data);
        })
        .catch((error) => {
          store.dispatch(logAsGuestError(error.response.data));
          console.log(error);
        })
        .finally(() => {
          store.dispatch(handleIsLoading());
        });

      break;
    }

    case GET_USER_PROFILE: {
      const { user } = store.getState();

      const config = {

        method: 'get',
        url: `https://api-compagnon-jdr.herokuapp.com/api/profile/${user.userId}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${user.token}`,
        },
        withCredentials: true,
      };

      axios(config)
        .then((response) => {
          store.dispatch(saveUserProfile(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }

    case GET_GUEST_PROFILE: {
      const { user } = store.getState();

      const config = {

        method: 'get',
        // NOUVELLE ROUTE
        url: `https://api-compagnon-jdr.herokuapp.com/api/guest/${user.guestId}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${user.token}`,
        },
        withCredentials: true,
      };

      axios(config)
        .then((response) => {
          store.dispatch(saveGuestProfile(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }

    // case GET_USER_PROFILE2: {
    //   const { user } = store.getState();

    //   try {
    //     const response = await instance.get(`${user.userId}`);
    //     console.log(response);
    //     store.dispatch(saveUserProfile(response.data));
    //     console.log(`User email is ${response.data.email}`);
    //   }
    //   catch (error) {
    //     console.log(error);
    //   }
    // }
    //   break;

    default:
      next(action);
  }
};

export default userMiddleware;

// case GET_USER_PROFILE: {
//   const { user } = store.getState();

// const config = {

//   method: 'post',
//   url: `https://api-compagnon-jdr.herokuapp.com/api/profile/${user.userId}`,
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: `bearer ${user.token}`,
//   },
//   withCredentials: true,
// };

// axios(config)
//   .then((response) => {
//     store.dispatch(saveUserProfile(response.data));
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);

//   })

// break;
// }
