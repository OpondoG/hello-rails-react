export const FETCH_GREETING_SUCCESS = "FETCH_GREETING_SUCCESS";

export const fetchGreetingSuccess = (greeting) => ({
  type: FETCH_GREETING_SUCCESS,
  payload: greeting,
});

export const fetchGreeting = () => {
  return (dispatch) => {
    fetch("/api/greetings")
      .then((response) => response.json())
      .then((data) => dispatch(fetchGreetingSuccess(data)));
  };
};

const initialState = {
  greeting: "",
};

export const greetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GREETING_SUCCESS:
      return {
        ...state,
        greeting: action.payload,
      };
    default:
      return state;
  }
};
