export const CHANGE_INPUT_FIELD = 'CHANGE_INPUT_FIELD';
export const TOGGLE_IS_READONLY = 'TOGGLE_IS_READONLY';
export const TOGGLE_IS_CHANGE_PASSWORD = 'TOGGLE_IS_CHANGE_PASSWORD';
export const VERIFY_PASSWORD = 'VERIFY_PASSWORD';
export const HANDLE_IS_LOADING = 'HANDLE_IS_LOADING';
export const HANDLE_IS_SUCCESS = 'HANDLE_IS_SUCCESS';
export const HANDLE_IS_REDIRECT = 'HANDLE_IS_REDIRECT';
export const HANDLE_IS_SUBMIT_ERROR = 'HANDLE_IS_SUBMIT_ERROR';
export const HANDLE_PROFILE_MENU = 'HANDLE_PROFILE_MENU';

// USER CRUD
export const SUBMIT_REGISTER = 'SUBMIT_REGISTER';
export const SUBMIT_ERROR = 'SUBMIT_ERROR';
export const SUBMIT_REGISTER_SUCCESS = 'SUBMIT_REGISTER_SUCCESS';

export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const RETRIEVE_USER_DATA_FROM_LOCALSTORAGE = 'RETRIEVE_USER_DATA_FROM_LOCALSTORAGE';
export const RETRIEVE_GUEST_DATA_FROM_LOCALSTORAGE = 'RETRIEVE_GUEST_DATA_FROM_LOCALSTORAGE';
export const VERIFY_TOKEN = 'VERIFY_TOKEN';

export const LOG_OUT = 'LOG_OUT';
export const SUBMIT_LOGIN_SUCCESS = 'SUBMIT_LOGIN_SUCCESS';

export const GET_USER_PROFILE = 'GET_USER_PROFILE';
export const SAVE_USER_PROFILE = 'SAVE_USER_PROFILE';
export const GET_GUEST_PROFILE = 'GET_GUEST_PROFILE';
export const SAVE_GUEST_PROFILE = 'SAVE_GUEST_PROFILE';

export const DELETE_USER_PROFILE = 'DELETE_USER_PROFILE';
export const DELETE_USER_PROFILE_SUCCESS = 'DELETE_USER_PROFILE_SUCCESS';
export const DELETE_USER_PROFILE_ERROR = 'DELETE_USER_PROFILE_ERROR';

export const UPDATE_USER_PROFILE = 'UPDATE_USER_PROFILE';
export const UPDATE_USER_PROFILE_SUCCESS = 'UPDATE_USER_PROFILE_SUCCESS';
export const UPDATE_USER_PROFILE_ERROR = 'UPDATE_USER_PROFILE_ERROR';
export const UPDATE_USER_PASSWORD = 'UPDATE_USER_PASSWORD';

export const MODIFY_PROFILE = 'MODIFY_PROFILE';

export const LOG_AS_GUEST = 'LOG_AS_GUEST';
export const LOG_AS_GUEST_ERROR = 'LOG_AS_GUEST_ERROR';
export const LOG_AS_GUEST_SUCCESS = 'LOG_AS_GUEST_SUCCESS';

export const changeInputField = (newValue, fieldName) => ({
  type: CHANGE_INPUT_FIELD,
  newValue,
  fieldName,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const submitLoginSuccess = (response) => ({
  type: SUBMIT_LOGIN_SUCCESS,
  ...response,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const verifyPassword = () => ({
  type: VERIFY_PASSWORD,
});

export const toggleIsChangePassword = () => ({
  type: TOGGLE_IS_CHANGE_PASSWORD,
});

export const toggleIsReadOnly = () => ({
  type: TOGGLE_IS_READONLY,
});

export const handleProfileMenu = () => ({
  type: HANDLE_PROFILE_MENU,
});

export const handleIsLoading = () => ({
  type: HANDLE_IS_LOADING,
});

export const handleIsSuccess = () => ({
  type: HANDLE_IS_SUCCESS,
});

export const submitRegister = () => ({
  type: SUBMIT_REGISTER,
});

export const submitError = (response) => ({
  type: SUBMIT_ERROR,
  ...response,
});

export const submitRegisterSuccess = (response) => ({
  type: SUBMIT_REGISTER_SUCCESS,
  response,
});

export const getUserProfile = () => ({
  type: GET_USER_PROFILE,
});

export const saveUserProfile = (response) => ({
  type: SAVE_USER_PROFILE,
  ...response,
});

export const getGuestProfile = () => ({
  type: GET_GUEST_PROFILE,
});

export const saveGuestProfile = (response) => ({
  type: SAVE_GUEST_PROFILE,
  ...response,
});
export const deleteUserProfile = () => ({
  type: DELETE_USER_PROFILE,
});

export const deleteUserProfileSuccess = (response) => ({
  type: DELETE_USER_PROFILE_SUCCESS,
  ...response,
});

export const deleteUserProfileError = (response) => ({
  type: DELETE_USER_PROFILE_ERROR,
  ...response,
});

export const updateUserProfile = () => ({
  type: UPDATE_USER_PROFILE,
});

export const updateUserPassword = () => ({
  type: UPDATE_USER_PASSWORD,
});

export const updateUserProfileError = (response) => ({
  type: UPDATE_USER_PROFILE_ERROR,
  ...response,
});

export const updateUserProfileSuccess = (response) => ({
  type: UPDATE_USER_PROFILE_SUCCESS,
  ...response,
});

export const handleIsRedirect = () => ({
  type: HANDLE_IS_REDIRECT,
});
export const handleIsSubmitError = () => ({
  type: HANDLE_IS_SUBMIT_ERROR,
});

export const logAsGuest = () => ({
  type: LOG_AS_GUEST,
});

export const logAsGuestSuccess = (response) => ({
  type: LOG_AS_GUEST_SUCCESS,
  ...response,
});

export const logAsGuestError = (response) => ({
  type: LOG_AS_GUEST_ERROR,
  ...response,
});

export const verifyToken = (token, userId) => ({

  type: VERIFY_TOKEN,
  token,
  userId,
});

export const retrieveUserDataFromLocalStorage = (token, userId) => ({

  type: RETRIEVE_USER_DATA_FROM_LOCALSTORAGE,
  token,
  userId,
});

export const retrieveGuestDataFromLocalStorage = (token, guestId) => ({

  type: RETRIEVE_GUEST_DATA_FROM_LOCALSTORAGE,
  token,
  guestId,
});
