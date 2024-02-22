

import React, { useState, useEffect } from 'react';

function RunningInfoBar() {
    const [info, setInfo] = useState('We are working on this project for bug fixing.')

    useEffect(() => {
        const interval = setInterval(() => {

            setInfo('For a better experience, please open this website on a PC or tablet.');
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-serene-blue text-gray-500 h-24 flex items-center justify-center text-3xl">
            {info}
        </div>
    );
}

export default RunningInfoBar;
