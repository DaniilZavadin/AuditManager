import { SET_INSPECTIONS_DATA, SET_CURRENT_INSPECTION } from "./types";

export const setInspectionsData = (data) => (dispatch) => {
  dispatch({ type: SET_INSPECTIONS_DATA, payload: data });
};
export const setCurrentInspection = (data) => (dispatch) => {
  dispatch({ type: SET_CURRENT_INSPECTION, payload: data });
};