import { Tableau10 } from './colors'; // Importing colors from the new colors utility

// Function to generate lighter and darker variations of a color
const adjustColor = (color: string, amount: number): string => {
    let usePound = false;
    if (color[0] === '#') {
        color = color.slice(1);
        usePound = true;
    }
    const num = parseInt(color, 16);
    let r = (num >> 16) + amount;
    if (r > 255) r = 255;
    else if (r < 0) r = 0;
    let b = ((num >> 8) & 0x00FF) + amount;
    if (b > 255) b = 255;
    else if (b < 0) b = 0;
    let g = (num & 0x0000FF) + amount;
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
    return (usePound ? '#' : '') + (0x1000000 + (r << 16) + (b << 8) + g).toString(16).slice(1);
};

// Define colors with lighter and darker variations
const colors = {
    environmental: {
        base: Tableau10.blue,
        lighter: adjustColor(Tableau10.blue, 40),
        darker: adjustColor(Tableau10.blue, -40),
    },
    agriculture: {
        base: Tableau10.green,
        lighter: adjustColor(Tableau10.green, 40),
        darker: adjustColor(Tableau10.green, -40),
    },
    urbanPlanning: {
        base: Tableau10.yellow,
        lighter: adjustColor(Tableau10.yellow, 40),
        darker: adjustColor(Tableau10.yellow, -40),
    },
};

export default colors;