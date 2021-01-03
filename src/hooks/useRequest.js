import React from 'react';
import axios from 'axios';

const USE_REQUEST_FETCHED = 'USE_REQUEST_FETCHED';
const USE_REQUEST_ERROR = 'USE_REQUEST_ERROR';

const setResponseData = (payload) => ({ type: USE_REQUEST_FETCHED, payload });
const setError = (payload) => ({ type: USE_REQUEST_ERROR, payload });

const initialState = {
  responseData: null,
  isFetching: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case USE_REQUEST_FETCHED:
      return {
        ...state,
        isFetching: false,
        responseData: action.payload
      }

    case USE_REQUEST_ERROR:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state;
  }
};

const useRequest = (url) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    const source = axios.CancelToken.source();

    axios
      .get(url, { cancelToken: source.token })
      .then((response) => {
        /*
          Custom delay from server
          ** Remove if non needed
        */
        setTimeout(() => {
          dispatch(setResponseData(response.data));
        }, 2500)
      })
      .catch((error) => {
        dispatch(setError(error.message));
      });

    return source.cancel;
  }, [url])

  return state;
};

export default useRequest;
