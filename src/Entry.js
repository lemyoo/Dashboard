import React from 'react'
import MainView from './views/MainView';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const materialUITheme = createTheme({
    palette: {
        /*mode: themeMode ? 'light' : 'dark',
        primary: {
            light: themeMode ? '#668EBB' : '#C4BB40',
            main: themeMode ? '#4974A5' : '#C4BB40',
            dark: themeMode ? '#4974A5' : '#C4BB40',*/
    },
    secondary: {
        /*light: themeMode ? '#E2DD9F' : '#D0E2FE',
        main: themeMode ? '#C4BB40' : '#408BFB',
        dark: themeMode ? null : '#03409B',
        contrastText: themeMode ? null : '#000',*/
    },
    text: {
        /* primary: "#000",
         primary1: themeMode ? "#000" : "#fff"*/
    },

    typography: {
        fontFamily: ['"Abel"', 'sans-serif'].join(','),
        button: {
            textTransform: 'none',
            fontFamily: ['"Montserrat"', 'sans-serif'].join(','),
            fontWeight: 'bold',
            fontSize: 14,
        },
        fontSize: 15,
    },

}
    /*components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: themeMode ? '#fff' : '#424242',
                    color: themeMode ? '#000' : '#fff',

                },
            },
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    color: themeMode ? '#000' : '#fff',
                },
            },
        },

        MuiTableCell: {
            styleOverrides: {
                stickyHeader: {
                    backgroundColor: themeMode ? '#E2DD9F' : '#D0E2FE',
                    color: themeMode ? "#000000" : "#fff"
                }
            }
        }
    },
}*/
)

const Entry = () => {
    return (
        <ThemeProvider theme={materialUITheme}>
            <MainView />
        </ThemeProvider>
    )
}

export default Entry