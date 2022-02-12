import { SET_NOTE_DATA, SET_INSPECTION_ID } from './types';

const initialState = {
    inspectionId: null,
    notesData: null
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NOTE_DATA:
            return { ...state, noteData: action.payload };
        case SET_INSPECTION_ID:
            return { ...state, inspectionId: action.payload };
        default: return state
    }
}