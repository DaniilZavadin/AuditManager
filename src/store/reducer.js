import { SET_INSPECTIONS_DATA, SET_CURRENT_INSPECTION } from './types';

const initialState = {
    inspectionsData: [],
    currentInspectionId: {}
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INSPECTIONS_DATA:
            return { ...state, inspectionsData: action.payload };
        case SET_CURRENT_INSPECTION:
            return { ...state, currentInspectionId: action.payload };
        default: return state
    }
}