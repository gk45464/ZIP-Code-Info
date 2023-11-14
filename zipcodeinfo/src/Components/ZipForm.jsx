import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FetchLocation, SwapComponent } from "../Redux/actions";

const ZipForm = () => {
    const [postalCode, setPostalCode] = useState("");    
    const dispatch = useDispatch();

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Dispatch the FetchLocation and SwapComponent actions
        dispatch(FetchLocation(postalCode));
        dispatch(SwapComponent());
    };

    return (
        <div className="w-full h-[92vh] relative  flex items-center justify-center "  >
            <div className="w-full md:max-w-[500px] p-4 flex flex-col  items-center justify-center md:px-10 lg:p-24 h-full md:h-[500px] lg:h-[500px] bg-gray-700 rounded-3xl text-white absolute m-auto gap-2">
                <h1 className='text-4xl font-bold'>Zip <span className='font-black'>Code</span></h1>
                <p className='mt-2 text-center'>Enter below a ZipCode you want to know the location of</p>
                <form className="flex" onSubmit={handleSubmit}>
                    <input
                        className='text-black px-2 py-1 rounded-l-md border-2 border-white'
                        type="text"
                        placeholder="Enter Zip Code"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                    />
                    <button className="rounded-r-md border-2 border-zinc-100  text-zinc-100 px-2 py-1 cursor-pointer" type="submit" disabled={postalCode.length < 3}>
                        Search
                    </button>
                </form>
            </div>
           
        </div>
    );
};

export default ZipForm;
