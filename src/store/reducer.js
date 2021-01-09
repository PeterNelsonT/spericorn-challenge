import * as actionTypes from './actions';
const initialState = { users: [], countries: null, error: false };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_DELETE:
      return {
        ...state,
        users: state.users.filter(
          (user) => user.created !== action.user.created
        ),
      };
    case actionTypes.USER_UPDATE:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.created !== action.user.created) return user;
          return { ...user, ...action.user };
        }),
      };
    case actionTypes.USER_ADD:
      return { ...state, users: [...state.users, action.user] };
    case actionTypes.COUNTRY_DETAILS_FETCH_COMPLETED:
      return { ...state, countries: action.countries };
    case actionTypes.COUNTRY_DETAILS:
      return { ...state };
    case actionTypes.ERROR:
      return { ...state, error: true };
    default:
      return state;
  }
};

export default reducer;
