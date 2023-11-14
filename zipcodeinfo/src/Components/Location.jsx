import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Marker, Popup } from 'react-leaflet';
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import L from 'leaflet';
import { NotSwapComponent } from '../Redux/actions';

const Location = () => {
    const dispatch = useDispatch();
    const { locations, loading } = useSelector((store) => store);

    // Create a custom marker icon for the map
    const customIcon = new L.Icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/128/684/684908.png',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
    });

    // Function to handle swapping components
    const handleSwap = () => {
        dispatch(NotSwapComponent());
    };

    // Ensure locations and places are defined
    if (!locations || !locations.places || locations.places.length === 0) {
        return (
            <div className="w-full h-[92vh] relative  flex items-center justify-center ">
                {/* Handle the case where locations or places are undefined or empty */}
                <p className=' bg-center'>No location data available.</p>
                <button onClick={handleSwap} className='bg-gray-900  w-[100px] rounded p-2 font-bold text-white'>Back</button>
            </div>
        );
    }

    return (
        <div>
            {loading ? (
                // Display a loading spinner if 'loading' is true
                <div className='w-full h-[92vh] flex items-center justify-center'>
                    <div id="wifi-loader">
                        {/* Circles representing the loading progress */}
                        <svg className="circle-outer" viewBox="0 0 86 86">
                            <circle className="back" cx="43" cy="43" r="40"></circle>
                            <circle className="front" cx="43" cy="43" r="40"></circle>
                            <circle className="new" cx="43" cy="43" r="40"></circle>
                        </svg>
                        <svg className="circle-middle" viewBox="0 0 60 60">
                            <circle className="back" cx="30" cy="30" r="27"></circle>
                            <circle className="front" cx="30" cy="30" r="27"></circle>
                        </svg>
                        <svg className="circle-inner" viewBox="0 0 34 34">
                            <circle className="back" cx="17" cy="17" r="14"></circle>
                            <circle className="front" cx="17" cy="17" r="14"></circle>
                        </svg>
                        <div className="text">Loading...</div>
                    </div>
                </div>
            ) : (
                // Display location details and map when 'loading' is false
                <div>
                    <div className='flex py-1 w-full px-2 md:h-[6vh] justify-normal sm:justify-between sm:flex-row flex-col items-center'>
                        <div className='w-full sm:w-[100px]'>
                            <button onClick={handleSwap} className='bg-gray-900  w-[100px] rounded p-2 font-bold text-white'>Back</button>
                        </div>
                        <div className=' flex w-full sm:w-[80%] flex-col sm:flex-row justify-start sm:justify-around sm:items-center items-left'>
                            {/* Display location information */}
                            <p className='text-gray-900  font-bold'>Country: {locations.country}</p>
                            <p className='text-gray-900  font-bold'>State: {locations.places[0]?.state}</p>
                            <p className='text-gray-900  font-bold'>Place Name: {locations.places[0]?.["place name"]}</p>
                        </div>
                    </div>
                    <div style={{ width: '100%', height: '86vh', overflow: 'hidden' }}>
                        <MapContainer center={{ lat: locations.places[0]?.latitude, lng: locations.places[0]?.longitude }} zoom={10} style={{ height: '100%', width: '100%' }}>
                            <TileLayer
                                // Set the map tile layer using OpenStreetMap
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?lang=en"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            {/* Check if places is defined and has at least one item */}
                            {locations.places && locations.places.length > 0 && (
                                <Marker position={{ lat: locations.places[0]?.latitude, lng: locations.places[0]?.longitude }} icon={customIcon}>
                                    <Popup>
                                        {/* Display a popup with the place name */}
                                        <p>{locations.places[0]?.["place name"]}</p>
                                    </Popup>
                                </Marker>
                            )}
                        </MapContainer>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Location;
