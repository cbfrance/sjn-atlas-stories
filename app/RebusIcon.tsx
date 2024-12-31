import React from 'react';
import { colors } from './colors';

interface RebusIconProps {
    label: string;
    color: string;
    type: 'environmental' | 'agriculture' | 'urbanPlanning';
}

const RebusIcon: React.FC<RebusIconProps> = ({ label, type, color }) => {
    return (
        <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            whiteSpace: 'nowrap',
            margin: '0 4px'
        }}>
            <span style={{
                backgroundColor: colors[type].lighter,
                padding: '2px 4px',
                borderRadius: '3px'
            }}>
                {label}
            </span>
            <svg width="12" height="12" style={{ margin: '0 4px' }}>
                <circle cx="6" cy="6" r="5" fill={color} />
            </svg>
        </span>
    );
};

export default RebusIcon;