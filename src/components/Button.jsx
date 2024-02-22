import React, { useState } from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
    };

    return (
        <button
            className={`px-4 py-2 rounded-lg ${clicked ? "bg-green-600" : bgColor} ${textColor} ${className}`}
            onClick={handleClick}
            type={type}
            {...props}
        >
            {children}
        </button>
    );
}
