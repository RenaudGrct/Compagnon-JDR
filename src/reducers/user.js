import { CHANGE_LOGIN_FIELD, SUBMIT_LOGIN_SUCCESS, LOG_OUT } from 'src/actions/user';

export const initialState = {

  email: '',
  password: '',
  isLogged: false,

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_FIELD:
      return {
        ...state,
        [action.fieldName]: action.newValue,
      };

    case SUBMIT_LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        email: '',
        password: '',
      };

    case LOG_OUT:
      return {
        ...state,
        email: '',
        password: '',
        isLogged: false,
      };
    default:
      return state;
  }
};
export default reducer;
