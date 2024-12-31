import React from 'react';

interface RebusIconProps {
    label: string;
    color: string;
}

const RebusIcon: React.FC<RebusIconProps> = ({ label, color }) => {
    return (
        <span style={{ display: 'inline-flex', alignItems: 'center', margin: '0 4px' }}>
            {label}
            <svg width="12" height="12" style={{ margin: '0 4px' }}>
                <circle cx="6" cy="6" r="5" fill={color} />
            </svg>
        </span>
    );
};

export default RebusIcon;