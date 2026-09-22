import React from 'react'

const CircularBadge = () => {
    return (
        <div className="absolute bottom-10 right-10 sm:-bottom-6 sm:-right-6 w-32 h-32 sm:w-40 sm:h-40 animate-[spin_12s_linear_infinite] z-20">
            <svg viewBox="0 0 100 100" className="w-full h-full text-lightGrey" style={{ letterSpacing: "1.5px" }}>
                <defs>
                    <path id="circlePath" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
                </defs>
                <text fontSize="11" fill="currentColor" fontWeight="600" className="uppercase">
                    <textPath href="#circlePath" className="text-gray-400">
                        • Frontend Developer • React Specialist
                    </textPath>
                </text>
            </svg>
            {/* Center dot/icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-orange-400 rounded-full shadow-[0_0_15px_#fb9718]" />
        </div>
    );
};

export default CircularBadge;
