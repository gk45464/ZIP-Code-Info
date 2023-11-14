import { LOCATION_LOADING, LOCATION_ERROR, LOCATION_SUCCESS, SWAP, NOT_SWAP } from "./actionTypes";

// Define the initial state for the LocationReducer
const initialState = {
    loading: false,  // Indicates whether location data is loading
    locations: {},   // Stores the location data
    error: false,    // Indicates if there's an error
    swap: false      // Controls whether to swap components
};

// Define the LocationReducer, which handles state changes based on action type
const LocationReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOCATION_LOADING: {
            // Set loading to true when fetching location data
            return { ...state, loading: true };
        }
        case LOCATION_SUCCESS: {
            // Set loading to false and update location data on success
            return { ...state, loading: false, locations: payload };
        }
        case LOCATION_ERROR: {
            // Set loading to false and mark an error
            return { ...state, loading: false, error: true };
        }
        case SWAP: {
            // Set swap to true to trigger component swapping
            return { ...state, swap: true };
        }
        case NOT_SWAP: {
            // Set swap to false to prevent component swapping
            return { ...state, swap: false };
        }
        default:
            // Return the current state if no matching action type is found
            return state;
    }
}

export default LocationReducer;
