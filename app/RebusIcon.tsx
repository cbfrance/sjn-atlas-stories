import React from 'react';
import { colors } from './colors';

interface RebusIconProps {
    label: string;
    color: string;
    type: 'environmental' | 'agriculture' | 'urbanPlanning';
}

// Calculate relative luminance
const getLuminance = (hex: string): number => {
    const rgb = hex.replace('#', '').match(/.{2}/g)?.map(x => parseInt(x, 16)) || [0, 0, 0];
    const [r, g, b] = rgb.map(c => {
        c = c / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

// Determine if text should be white or black
const getContrastColor = (backgroundColor: string): string => {
    const luminance = getLuminance(backgroundColor);
    return luminance > 0.5 ? '#000000' : '#ffffff';
};

const RebusIcon: React.FC<RebusIconProps> = ({ label, type, color }) => {
    const bgColor = colors[type].lighter;
    const textColor = getContrastColor(bgColor);

    return (
        <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            whiteSpace: 'nowrap',
            margin: '0 4px'
        }}>
            <span style={{
                backgroundColor: bgColor,
                color: textColor,
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