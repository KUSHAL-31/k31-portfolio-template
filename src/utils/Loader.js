import React from 'react';


const Loader = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="loader">
                <div className="w-52 h-52 border-4 border-dashed rounded-full animate-spin border-blue-500">
                </div>
            </div>
        </div>
    );
};

export default Loader;