import { SET_NOTE_DATA } from "./types";

export const setNoteData = (data) => (dispatch) => {
    dispatch({ type: SET_NOTE_DATA, payload: data });
  };