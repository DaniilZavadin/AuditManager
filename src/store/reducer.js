import { SET_CURRENT_INSPECTION } from './types';

const initialState = {
    currentInspectionId: null
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_INSPECTION:
            return { ...state, currentInspectionId: action.payload };
        default: return state
    }
}