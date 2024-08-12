import React, { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string; // Add className prop
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
    return (
        <div className={`flex justify-center ${className}`}>
            <div className='mt-4 border border-slate-400 p-4 rounded sm:max-w-3xl lg:max-w-7xl'>
                {children}
            </div>
        </div>
    );
};

export default Card;
