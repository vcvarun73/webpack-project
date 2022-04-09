import { createTheme, loadTheme } from '@fluentui/react';

const myTheme = createTheme({
    palette: {
        themePrimary: '#bf580a',
        themeLighterAlt: '#fcf7f3',
        themeLighter: '#f5e0d0',
        themeLight: '#ecc6a9',
        themeTertiary: '#d9935d',
        themeSecondary: '#c76921',
        themeDarkAlt: '#ac4f09',
        themeDark: '#914307',
        themeDarker: '#6b3105',
        neutralLighterAlt: '#faf9f8',
        neutralLighter: '#f3f2f1',
        neutralLight: '#edebe9',
        neutralQuaternaryAlt: '#e1dfdd',
        neutralQuaternary: '#d0d0d0',
        neutralTertiaryAlt: '#c8c6c4',
        neutralTertiary: '#b4b2b0',
        neutralSecondary: '#9b9997',
        neutralPrimaryAlt: '#83817e',
        neutralPrimary: '#201f1e',
        neutralDark: '#52504e',
        black: '#3a3836',
        white: '#ffffff',
    }}
);

loadTheme(myTheme);