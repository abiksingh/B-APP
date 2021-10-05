import { AnyAction } from 'redux';
import {
  GET_ALBUMS_REQUEST,
  GET_ALBUMS_SUCCESS,
  GET_ALBUMS_FAIL,
  SEARCH_ALBUMS_SUCCESS,
  PAGINATE_ALBUMS_SUCCESS,
} from '../constants/albumsConstants';

export const getAlbumsReducer = (state = {}, action: AnyAction) => {
  switch (action.type) {
    case GET_ALBUMS_REQUEST:
      return {
        loading: true,
      };
    case GET_ALBUMS_SUCCESS:
      return {
        loading: false,
        success: true,
        data: action.payload,
      };

    case SEARCH_ALBUMS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        data: action.payload,
      };

    case PAGINATE_ALBUMS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        data: action.payload,
      };

    case GET_ALBUMS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
