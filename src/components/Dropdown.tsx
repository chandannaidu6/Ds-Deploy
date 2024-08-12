import React, { useState, useEffect, useRef } from "react";

interface DropdownProps {
    size: number;
    ButtonName: string;
    Buttons: string[];
    Links: string[];
    dropdownLink?: string; // Optional dropdown link
}

export const Dropdown: React.FC<DropdownProps> = ({ size, ButtonName, Buttons, Links, dropdownLink }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null); // Adjusted type here
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleMouseEnter = () => {
        setIsHovered(true);
        setIsOpen(true);
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setIsOpen(false);
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
        }
        closeTimeoutRef.current = setTimeout(() => {
            setIsOpen(false);
        }, 5000);
    };

    const toggleDropdown = () => {
        if (dropdownLink) {
            window.location.href = dropdownLink;
        } else {
            setIsOpen(!isOpen);
            console.log('Dropdown toggled:', isOpen ? 'closed' : 'open');
        }
    };

    return (
        <div className="group relative cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="border text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <span className="menu-hover text-base font-medium text-white" onClick={toggleDropdown}>
                    {ButtonName}
                </span>
            </div>

            {(isOpen || isHovered) && (
                <div className="absolute z-50 flex w-max flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible" ref={dropdownRef}>
                    {Buttons.slice(0, size).map((button, index) => (
                        <a key={index} href={Links[index]} className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                            {button}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};
