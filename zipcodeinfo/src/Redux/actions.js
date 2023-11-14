import { LOCATION_LOADING, LOCATION_ERROR, LOCATION_SUCCESS, SWAP, NOT_SWAP } from "./actionTypes";

// Action creator to swap components
export const SwapComponent = () => (dispatch) => {
    dispatch({ type: SWAP });
}

// Action creator to not swap components
export const NotSwapComponent = () => (dispatch) => {
    dispatch({ type: NOT_SWAP });
}

// Action creator to fetch location data based on a postal code
export const FetchLocation = (postalCode) => async (dispatch) => {
    try {
        dispatch({ type: LOCATION_LOADING });
        
        // Fetch location data from an API based on the provided postal code
        const response = await fetch(`https://api.zippopotam.us/in/${postalCode}`);
        const data = await response.json();
        
        // Dispatch the location data on success
        dispatch({ type: LOCATION_SUCCESS, payload: data });
    } catch (error) {
        // Dispatch an error action in case of an error
        dispatch({ type: LOCATION_ERROR });
        return error;
    }
}
