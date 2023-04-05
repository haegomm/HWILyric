import styled from "styled-components";

export const lightTheme = {
    bgColor: '#fff',
    textColor: '#636161',
    accentColor: {
        1: '#B0E3F9',
        2: '#DEB3FB',
        3: '#FEC3B5',
        4: '#FBD5E0',
    },
    logoUrl: 'image/light-logo.png'
};

export const darkTheme = {
    bgColor: '#191B1F',
    textColor: '#fff',
    accentColor: {
        1: '#8A1C70',
        2: '#572681',
        3: '#E8AFFD',
        4: '#EC4884',
    },
    logoUrl: 'image/dark-logo.png'
};

export const theme = {
    lightTheme,
    darkTheme,
};

export default theme;