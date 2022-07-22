import axios from 'axios';
import {
  SUBMIT_LOGIN,
  submitLoginSuccess,
  SUBMIT_REGISTER,
  submitRegisterSuccess,
} from 'src/actions/user';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN: {
      // const { user } = store.getState();

      next(action);
      const config = {
        method: 'get',
        url: 'https://compagnon-jdr.herokuapp.com/api/profile/login',
        headers: { 'Content-Type': 'application/json' },
        data: { email: 'latulipedu78@hotmail.com', password: 'tulipette78' },
      };

      axios(config)
        .then((response) => {
          store.dispatch(submitLoginSuccess(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

      // si je veux gérer un état de loading, je peux nexter aussi
      // SUBMIT_LOGIN
      break;
    }
    case SUBMIT_REGISTER: {
      next(action);
      const { user } = store.getState();
      console.log('cc0');
      const config = {

        method: 'post',
        url: 'https://compagnon-jdr.herokuapp.com/api/profile/register',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: { email: user.userEmail, username: user.userName, password: user.userPassword },
      };
      console.log(config);
      axios(config)
        .then((response) => {
          store.dispatch(submitRegisterSuccess(response.data));
          console.log(response);
          console.log('cc');
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    default:
      next(action);
  }
};

export default userMiddleware;
