import axios from 'axios';
import { Dispatch } from 'redux';
import {
  GET_ALBUMS_REQUEST,
  GET_ALBUMS_SUCCESS,
  GET_ALBUMS_FAIL,
  SEARCH_ALBUMS_SUCCESS,
  PAGINATE_ALBUMS_SUCCESS,
} from '../constants/albumsConstants';

export const getAllAlbums = () => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: GET_ALBUMS_REQUEST,
    });

    const { data } = await axios.get(`http://localhost:4000/albums`);

    dispatch({
      type: GET_ALBUMS_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: GET_ALBUMS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const searchIndividualAlbums =
  (text: string) => async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: GET_ALBUMS_REQUEST,
      });

      const { data } = await axios.get(
        `http://localhost:4000/albums?q=${text}`
      );

      dispatch({
        type: SEARCH_ALBUMS_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: GET_ALBUMS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const paginationAlbums = (num: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: GET_ALBUMS_REQUEST,
    });

    const { data } = await axios.get(
      `http://localhost:4000/albums?_page=${num}`
    );

    dispatch({
      type: PAGINATE_ALBUMS_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: GET_ALBUMS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
