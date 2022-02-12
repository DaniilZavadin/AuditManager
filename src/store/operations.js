import { SET_NOTE_DATA, SET_INSPECTION_ID } from "./types";

export const setNoteData = (data) => (dispatch) => {
  dispatch({ type: SET_NOTE_DATA, payload: data });
};
export const setInspectionId = (data) => (dispatch) => {
  dispatch({ type: SET_INSPECTION_ID, payload: data });
};