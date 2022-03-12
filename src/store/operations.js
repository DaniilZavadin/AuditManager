import { SET_CURRENT_INSPECTION } from "./types";

export const setCurrentInspection = (data) => (dispatch) => {
  dispatch({ type: SET_CURRENT_INSPECTION, payload: data });
};