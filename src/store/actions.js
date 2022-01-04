import { SET_NOTE_DATA } from "./types";

export const setNoteData = (data) => {
    return { type: SET_NOTE_DATA, payload: data }
}