import { SET_NOTE_DATA } from './types';

const initialState = {
    createNoteData: null
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NOTE_DATA:
            return { ...state, createNoteData: action.payload };
    }
}